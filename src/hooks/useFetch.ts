import { useEffect, useState } from "react";

type RestMethod = "DELETE" | "GET" | "POST" | "PUT";

interface HookResponse<T> {
  loading: boolean;
  response: null | T;
}

export const useFetch = <T extends object>(
  url: string,
  body: unknown,
  method: RestMethod
): HookResponse<T> => {
  const [response, setResponse] = useState<null | T>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response: Response = await fetch(url, {
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
        method,
      });
      /** Client knows/trusts response from server */
      const json: T = (await response.json()) as T;

      setResponse(json);
      setLoading(false);
    };

    void fetchData();
  }, [url, body, method]);

  return { loading, response };
};
