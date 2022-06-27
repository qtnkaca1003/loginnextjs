import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { buttonStyle } from "./button"
import { colors } from "./colors"
import { inputStyle } from "./input"
import { selectStyle } from "./select"
import { switchStyle } from "./switch"
import { tableStyle } from "./table"
import { tabsStyle } from "./tabs"

const breakpoints = createBreakpoints({
  base: "375px",
  sm: "320px",
  md: "414px",
  lg: "768px",
  xl: "960px",
})

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        background: "var(--main-bg-color)",
        overflow: "hidden",
        width: "100vw",
        minHeight: "-webkit-fill-available",
        height: "var(--app-height)",
        color: "var(--primary-text-color)",
        userSelect: "none",
        WebkitTouchCallout: "none",
        WebkitTapHighlightColor: "transparent",
      },
    },
  },
  fonts: {
    heading: "OpenSans, NotoSansJP",
    body: "OpenSans, NotoSansJP",
  },
  breakpoints,
  colors: colors,
  components: {
    Input: inputStyle,
    Button: buttonStyle,
    Tabs: tabsStyle,
    Select: selectStyle,
    Table: tableStyle,
    Icon: {
      colors: {
        gray: {
          "500": "var(--secondary-text-color)",
        },
      },
    },
    Switch: switchStyle,
    Divider: {
      baseStyle: {
        opacity: 1,
        borderColor: "var(--primary-border-color)",
      },
    },
  },
})

export default theme
