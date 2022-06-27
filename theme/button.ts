export const buttonStyle = {
  defaultProps: {
    minWidth: "1rem",
    px: 0,
  },
  variants: {
    solid: {
      _active: {
        opacity: 0.5,
      },
    },
    solidWhite: {
      bg: "#f4f4f4",
      color: "var(--primary-text-color)",
      _active: {
        opacity: 0.5,
      },
    },
    outline: {
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "var(--main-color)",
      color: "var(--main-color)",
      rounded: "full",
      letterSpacing: "0.1em",
      _active: {
        opacity: 0.5,
      },
    },
  },
}
