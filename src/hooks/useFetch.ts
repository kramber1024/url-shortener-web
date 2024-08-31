import { useCallback, useState } from "react";

type RestMethod = "DELETE" | "GET" | "POST" | "PUT";

const headers: Record<string, string> = { "Content-Type": "application/json" };

export const useFetch = <T extends object>(
  method: RestMethod,
  url: string
): [boolean, (body: unknown, callback?: (data: null | T) => void) => void] => {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(
    (body: unknown, callback?: (data: null | T) => void): void => {
      setLoading(true);
      fetch(url, {
        body: JSON.stringify(body),
        headers,
        method,
      }).then(
        async (response: Response): Promise<void> => {
          const data = (await response.json()) as T;
          setLoading(false);
          callback?.(data);
        },
        () => {
          setLoading(false);
          callback?.(null);
        }
      );
    },
    [method, url]
  );

  return [loading, fetchData];
};
