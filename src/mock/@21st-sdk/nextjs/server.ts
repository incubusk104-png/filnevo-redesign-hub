export const createTokenHandler = (options: any) => {
  return {
    POST: async (req: Request) => {
      return new Response(JSON.stringify({ message: 'Token handler mock' }), { status: 200 });
    }
  };
};