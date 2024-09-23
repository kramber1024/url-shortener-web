import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
};

export default createJestConfig(config);
