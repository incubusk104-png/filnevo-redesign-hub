// Real provider calls for the routed model.
//
// Both Cerebras and OpenAI expose an OpenAI-compatible /chat/completions API, so
// a single fetch-based path serves both. Runs on the Edge runtime (fetch only).
import {
  type ModelAssignment,
  getProviderEndpoint,
} from "@/lib/ai/providers";

export interface ExtractionResult {
  provider: ModelAssignment["provider"];
  model: string;
  content: string;
}

export class ProviderError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "ProviderError";
  }
}

// System prompt tuned for BIR document extraction (high accuracy, JSON-only).
const EXTRACTION_SYSTEM_PROMPT =
  "You are a precise BIR document extraction engine. Read the provided receipt " +
  "or invoice text and return ONLY a JSON object with the fields you can confidently " +
  "extract (vendor, date, total_amount, tax_amount, bir_category). Do not invent values.";

/**
 * Send document text to the routed provider/model and return the model output.
 * Throws ProviderError when the API key is missing or the provider responds with
 * a non-2xx status.
 */
export async function runExtraction(
  assignment: ModelAssignment,
  documentText: string,
): Promise<ExtractionResult> {
  const { apiKey, baseUrl } = getProviderEndpoint(assignment.provider);
  if (!apiKey) {
    throw new ProviderError(
      `Missing API key for provider "${assignment.provider}"`,
      500,
    );
  }

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: assignment.model,
      temperature: 0,
      messages: [
        { role: "system", content: EXTRACTION_SYSTEM_PROMPT },
        { role: "user", content: documentText },
      ],
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new ProviderError(
      `Provider ${assignment.provider} returned ${res.status}: ${detail.slice(0, 300)}`,
      res.status,
    );
  }

  const data = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const content = data.choices?.[0]?.message?.content ?? "";

  return { provider: assignment.provider, model: assignment.model, content };
}
