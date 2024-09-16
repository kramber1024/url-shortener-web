import { useCallback, useState } from "react";

const headers: Record<string, string> = { "Content-Type": "application/json" } as const;

/**
 * Fetch data from the server.
 *
 * This hook is made in a way that client trusts the server
 * and does not validate server response.
 * @example
 * const [loading, fetchData] = useFetch<{message: string}>("GET", "https://api.example.com/data");
 * fetchData({}, (data) => {
 *  if (data) {
 *    console.log(data.message);
 *  } else {
 *    console.error("Failed to fetch data");
 *   }
 * });
 * @template T - Expected response data type.
 * @param method - HTTP method.
 * @param url - URL to fetch data from. All subsequent requests will be made to this URL.
 * @returns
 * - loading - Indicates whether the request is in progress. Can be used for loading indicators.
 * - fetchData - Function with callback to fetch data from the server.
 */
export const useFetch = <T extends object>(
  method: "DELETE" | "GET" | "POST" | "PUT",
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
      })
        .then(async (response: Response): Promise<void> => {
          try {
            const data = (await response.json()) as T;
            callback?.(data);
          } catch {
            callback?.(null);
          }
        })
        .catch(() => {
          callback?.(null);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [method, url]
  );

  return [loading, fetchData];
};
