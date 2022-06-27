export const inputStyle = {
  variants: {
    date: {
      field: {
        borderRadius: "1.5rem",
        display: "-webkit-inline-flex",
        justifyContent: "center",
        textAlign: "-webkit-center",
        bg: "transparent",
        border: "1px solid var(--cell-border-color)",
        fontSize: "1.2rem",
        fontWeight: "bold",
      },
    },
    search: {
      field: {
        bg: "var(--input-bg)",
        boxShadow: "var(--box-shadow-input)",
        height: "5rem",
        color: "var(--primary-text-color)",
        borderRadius: "1.5rem",
        fontWeight: "medium",
        fontSize: "1.4rem",
        _placeholder: {
          color: "var(--secondary-text-color)",
          fontSize: "1.4rem",
          lineHeight: "1.7rem",
          fontWeight: "medium",
        },
      },
    },
    underline: {
      field: {
        borderRadius: "0",
        bg: "transparent",
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "flex-end",
      },
    },
  },
}
