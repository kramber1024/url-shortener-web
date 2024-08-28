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

interface Constants {
  /** App related constants. E.g ` NAME ` for whole app. */
  app: App;
  data: Data;
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
} as const;
