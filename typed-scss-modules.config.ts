export const config = {
  watch: true,
  nameFormat: "camel",
  exportType: "named",
  quoteType: "double",
  aliasPrefixes: {
    "@styles": "./src/styles",
    "@components": "./src/components",
  },
  ignore: ["node_modules"],
};
