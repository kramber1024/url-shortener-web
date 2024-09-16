/** @type {import('jest').Config} */
const config = {
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/*.test.tsx"],
  testPathIgnorePatterns: ["node_modules"],
};

module.exports = config;
