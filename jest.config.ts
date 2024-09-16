import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./src/",
});

const config: Config = {
  testMatch: ["<rootDir>/**/*.test.tsx"],
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};

export default createJestConfig(config);
