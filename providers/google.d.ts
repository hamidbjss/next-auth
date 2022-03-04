import type { OAuthConfig, OAuthUserConfig } from ".";
export interface GoogleProfile {
    aud: string;
    azp: string;
    email: string;
    email_verified: boolean;
    exp: number;
    family_name: string;
    given_name: string;
    hd: string;
    iat: number;
    iss: string;
    jti: string;
    name: string;
    nbf: number;
    picture: string;
    sub: string;
}
export default function Google<P extends Record<string, any> = GoogleProfile>(options: OAuthUserConfig<P>): OAuthConfig<P>;
