import { DEFAULT_EMPTY } from "constants/app"

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const isNullOrEmpty = (
  value?: number | string | null,
): value is null | undefined => {
  return (value ?? "") === ""
}

export const StringFormat = (str: string, ...args: string[]) =>
  str.replace(/{(\d+)}/g, (_match, index) => args[index] || "")

export const removeDuplicates = <T = string | number>(arr: T[]) => {
  const s = new Set(arr)
  const it = s.values()

  return Array.from(it)
}

export const getText = (value?: string | number | null) => {
  return isNullOrEmpty(value) ? DEFAULT_EMPTY : value
}
