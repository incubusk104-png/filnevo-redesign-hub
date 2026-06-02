// Mock rate limit implementation for Edge Runtime compatibility
export const rateLimit = () => {
  return {
    limit: () => Promise.resolve({ success: true }),
    remaining: () => 100,
    reset: () => Date.now() + 60000
  };
};