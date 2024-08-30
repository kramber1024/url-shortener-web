import { useCallback, useState } from "react";

type RestMethod = "DELETE" | "GET" | "POST" | "PUT";

const headers: Record<string, string> = { "Content-Type": "application/json" };

export const useFetch = <T extends object>(
  method: RestMethod,
  url: string
): [boolean, null | T, (body: unknown) => void] => {
  const [response, setResponse] = useState<null | T>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const refetch = useCallback(
    async (body: unknown) => {
      setLoading(true);
      const response: Response = await fetch(url, {
        body: JSON.stringify(body),
        headers,
        method,
      });
      setResponse(response.json() as T);
      setLoading(false);
    },
    [method, url]
  );

  return [loading, response, refetch];
};
