import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: [
    "src/.*\\.module\\.(?:css|scss)\\.d\\.ts",
    "src/.*index\\.ts",
    "src/.*\\.cy.(?:ts|tsx)",
    "cypress/.*",
  ],
};

export default createJestConfig(config);
