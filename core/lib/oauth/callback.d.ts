import { TokenSet } from "openid-client";
import type { Account, LoggerInstance, Profile } from "../../..";
import type { OAuthConfig } from "../../../providers";
import type { InternalOptions } from "../../../lib/types";
import type { IncomingRequest, OutgoingResponse } from "../..";
export default function oAuthCallback(params: {
    options: InternalOptions<"oauth">;
    query: IncomingRequest["query"];
    body: IncomingRequest["body"];
    method: Required<IncomingRequest>["method"];
    cookies: IncomingRequest["cookies"];
}): Promise<GetProfileResult & {
    cookies?: OutgoingResponse["cookies"];
}>;
export interface GetProfileParams {
    profile: Profile;
    tokens: TokenSet;
    provider: OAuthConfig<any>;
    logger: LoggerInstance;
}
export interface GetProfileResult {
    profile: ReturnType<OAuthConfig["profile"]> | null;
    account: Omit<Account, "userId"> | null;
    OAuthProfile: Profile;
}
