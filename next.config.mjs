import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    /** Aliases for sass */
    config.resolve.alias["@/styles"] = "src/styles/";
    config.resolve.alias["@/components"] = "src/components/";

    return config;
  },
};

export default nextConfig;
