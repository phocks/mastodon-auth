const REDIRECT_URI = "http://example.org"; //"urn:ietf:wg:oauth:2.0:oob";

export const buildRegistrationData = (): Record<string, string> => ({
  client_name: "Test Application", 
  redirect_uris: REDIRECT_URI,
  scopes: "read write push",
  website: "https://myapp.example"
});

export const buildAuthorizationUrl = (domain: string, client_id: string): string => {
  const params = new URLSearchParams({
    client_id,
    scope: "read write push",
    redirect_uri: REDIRECT_URI,
    response_type: "code"
  });
  return `https://${domain}/oauth/authorize?${params}`;
};

export const buildAccessTokenRequestData = (
  client_id: string,
  client_secret: string,
  code: string
): URLSearchParams => {
  return new URLSearchParams({
    client_id,
    client_secret,
    redirect_uri: REDIRECT_URI,
    grant_type: "authorization_code",
    code,
    scope: "read write push"
  });
};