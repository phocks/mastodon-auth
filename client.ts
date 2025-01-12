import type { ApiClient } from "./types.ts";

export const createApiClient = (): ApiClient => ({
  post: (url, data) => 
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
});