const env = process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV

export const DEFAULT_EMPTY = "-"
export const MAX_FAVORITE_LIST_NUM = 5

export const ENV = Object.freeze({
  DEV: env === "development",
  STUB: env === "stub",
  PRD: env === "production",
  TEST: env === "test",
})

export const APP_VERSION = process.env.REACT_APP_VERSION || "1.0.0"
