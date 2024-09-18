import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    viewportWidth: 600,
    viewportHeight: 600,
  },
});
