import { ChakraProvider } from "@chakra-ui/react"
import { layoutPropNames, propNames } from "@chakra-ui/styled-system"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { Parameters, Story } from "@storybook/react"
import React from "react"
import "../assets/styles/index.scss"
import theme from "../theme"

const excludedPropNames = layoutPropNames.concat(
  propNames.concat(["as", "apply", "sx", "__css"]),
)

const customViewports = {
  GalaxyFold: {
    name: "Galaxy Fold",
    styles: {
      width: "280px",
      height: "653px",
    },
    type: "mobile",
  },
}

export const parameters: Parameters = {
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "iphonex",
  },
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "white" },
      { name: "dark", value: "gray" },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    exclude: excludedPropNames,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const appWrapper = (Story: Story) => {
  return (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  )
}

export const decorators = [appWrapper]
