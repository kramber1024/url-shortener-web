type Scheme = "http" | "https";

const parseScheme = (scheme: string | undefined): Scheme => {
  if (!scheme || (scheme !== "http" && scheme !== "https")) {
    return "http";
  }
  return scheme;
};

const scheme = parseScheme(process.env.SCHEME);
const host = process.env.HOST ?? "127.0.0.1";

interface App {
  NAME: string;
}

interface Data {
  EMAIL_MAX_LENGTH: number;
  EMAIL_MIN_LENGTH: number;
  FIRST_NAME_MAX_LENGTH: number;
  FIRST_NAME_MIN_LENGTH: number;
  LAST_NAME_MAX_LENGTH: number;
  LAST_NAME_MIN_LENGTH: number;
  PASSWORD_MAX_LENGTH: number;
  PASSWORD_MIN_LENGTH: number;
}

interface Host {
  DOMAIN: string;
  HOST: string;
  PORT: number;
  SCHEME: Scheme;
  URL: `${Scheme}://${string}`;
}

interface Constants {
  /** App related constants. E.g ` NAME ` for whole app. */
  app: App;
  data: Data;
  host: Host;
}

export const constants: Constants = {
  app: {
    NAME: process.env.NAME ?? "APP_NAME",
  },
  data: {
    EMAIL_MAX_LENGTH: 64,
    EMAIL_MIN_LENGTH: "a@b.c".length,
    FIRST_NAME_MAX_LENGTH: 16,
    FIRST_NAME_MIN_LENGTH: 3,
    LAST_NAME_MAX_LENGTH: 16,
    LAST_NAME_MIN_LENGTH: 3,
    PASSWORD_MAX_LENGTH: 256,
    PASSWORD_MIN_LENGTH: 8,
  },
  host: {
    DOMAIN: process.env.DOMAIN ?? "ushort.com",
    HOST: host,
    PORT: parseInt(process.env.PORT ?? "26802", 10),
    SCHEME: scheme,
    URL: `${scheme}://${host}`,
  },
} as const;
