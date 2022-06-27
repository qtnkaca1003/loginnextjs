export const tableStyle = {
  variants: {
    simple: {
      th: {
        color: "var(--secondary-text-color)",
        fontSize: "1rem",
        lineHeight: "1.5rem",
        padding: "3px 2px",
        fontWeight: "bold",
        borderColor: "var(--primary-border-color)",
      },
      td: {
        color: "var(--primary-text-color)",
        fontSize: "1rem",
        lineHeight: "2rem",
        padding: "3px 2px",
        fontWeight: "bold",
        borderColor: "var(--primary-border-color)",
      },
    },
    border: {
      th: {
        color: "var(--primary-text-color)",
        fontSize: "1.2rem",
        lineHeight: "1.7rem",
        padding: "1.2rem",
        fontWeight: "bold",
        border: "1px solid var(--primary-border-color)",
      },
      td: {
        color: "var(--primary-text-color)",
        fontSize: "1rem",
        lineHeight: "1.5rem",
        padding: "0.8rem 1.2rem",
        fontWeight: "bold",
        border: "1px solid var(--primary-border-color)",
      },
    },
  },
}
