import type { ApiClient, Effect, TokenResponse } from "./types.ts";
import { buildAuthorizationUrl, buildRegistrationData } from "./util.ts";
import { createApiClient } from "./client.ts";

export const registerApp =
  (api: ApiClient, domain: string): Effect<TokenResponse> => async () => {
    const response = await api.post(
      `https://${domain}/api/v1/apps`,
      buildRegistrationData(),
    );
    if (!response.ok) throw new Error("Failed to register application");
    return await response.json();
  };

export const getToken = async (domain: string): Promise<TokenResponse> => {
  const api = createApiClient();
  const register = registerApp(api, domain);
  return await register();
};

export const getAuthUrl = async (domain: string): Promise<string> => {
  const { client_id } = await getToken(domain);
  return buildAuthorizationUrl(domain, client_id);
};
