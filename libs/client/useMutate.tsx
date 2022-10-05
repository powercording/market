import { useState } from "react";

export default function UseMutate(
  url: string
): [
  (data: any) => void,
  { loading: boolean; data: undefined | any; error: undefined | any }
] {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((json) => setState((prev) => ({ ...prev, data: json })))
      .then(() => setState((prev) => ({ ...prev, loading: false })))
      .catch((error) => setState((prev) => ({ ...prev, error: error })));
  }

  return [mutation, { ...state }];
}
