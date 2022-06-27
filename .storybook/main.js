const path = require("path")
const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: [
    "../ui-lib/**/*.stories.mdx",
    "../ui-lib/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-sass-postcss"
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  typescript: {
    reactDocgen: "none",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: (prop) => {
        const isHTMLElementProp =
          prop.parent?.fileName.includes("node_modules") ?? false
        return !isHTMLElementProp
      },
    },
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    }
  },
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },
}
