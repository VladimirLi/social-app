export const getHelloWorld = async (): Promise<string> => {
  const response = await fetch(`${process.env.API_URL}`, {
    method: "GET",
  });
  return response.text();
};
