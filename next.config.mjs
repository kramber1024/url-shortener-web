import path from "path";
import { config } from "process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    /** Disable css modules */
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes("_app")) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    });
    /** Aliases for sass */
    config.resolve.alias["@/styles"] = "src/styles/";
    config.resolve.alias["@/components"] = "src/components/";

    return config;
  },
};

export default nextConfig;
