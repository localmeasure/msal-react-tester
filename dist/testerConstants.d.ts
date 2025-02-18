import { AccountInfo, AuthenticationResult, AuthError } from '@azure/msal-browser';
export declare const TEST_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJzY3AiOiJVc2VyLlJlYWQiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jb250b3NvIiwiYXBwX2Rpc3BsYXluYW1lIjoiYXBwbGljYXRpb24tbmFtZSIsInRpZCI6InRlbmFudC1pZCIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJYWCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMDAwMC1jMDAwLTAwMDAwMDAwMDAwMCIsInVuaXF1ZV9uYW1lIjoiam9obi5kb2VAY29udG9zby5jb20iLCJuYmYiOiIxNjU2NTk5NjI2IiwiYXBwaWQiOiJhcHAtaWQiLCJuYW1lIjoiSm9obiBEb2UiLCJleHAiOiIxNjU2NjA0NzY3IiwiaWF0IjoiMTY1NjU5OTYyNiIsImVtYWlsIjoiam9obi5kb2VAY29udG9zby5jb20ifQ.ftOvEUhqEFKWxIcxcYsgstgldO-31hIVwEhQ0hwwqWg";
/**

 {
  "alg": "HS256"
 }.{
  "aud": "00000003-0000-0000-c000-000000000000",
  "iss": "https://sts.windows.net/contoso",
  "nbf": "1656599626",
  "iat": "1656599626",
  "exp": "1656604767",
  "app_displayname": "application-name",
  "tid": "tenant-id",
  "tenant_region_scope": "XX",
  "unique_name": "john.doe@contoso.com",
  "appid": "app-id",
  "name": "John Doe",
  "email": "john.doe@contoso.com",
  "scp": "User.Read"
}.[Signature]

 
 */
export declare const defaultTestAccountInfo: AccountInfo;
export declare const defaultTestAuthenticationResult: AuthenticationResult;
export declare const defaultTestAuthError: AuthError;
