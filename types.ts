export type Effect<A> = () => Promise<A>;

export interface ApiClient {
  post(url: string, data: unknown): Promise<Response>;
}

export interface TokenResponse {
  client_id: string;
  client_secret: string;
}

export interface AccountToken {
  access_token: string;
  token_type: string;
  scope: string;
  created_at: number;
}