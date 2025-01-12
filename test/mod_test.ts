import { assertEquals } from "@std/assert";
import { getAuthUrl, getToken } from "../mod.ts";

Deno.test("getToken should an object with client_id, client_secret", async () => {
  const tokenData = await getToken("masto.byrd.ws");
  console.log(tokenData);
  assertEquals(typeof tokenData.client_id, "string");
  assertEquals(typeof tokenData.client_secret, "string");
});

Deno.test("getAuthorizationUrl should return a string", async () => {
  const url = await getAuthUrl("masto.byrd.ws");
  console.log(url);
  assertEquals(typeof url, "string");
});
