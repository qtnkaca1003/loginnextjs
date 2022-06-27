// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

module.exports = {
  i18n: {
    locales: ["ja", "en"],
    defaultLocale: "ja",
  },
  lng: "ja",
  defaultNS: "common",
  fallbackLng: "en",
  serializeConfig: false,
  localePath: path.resolve("./public/locales"),
  // Set default value when loading
  overloadTranslationOptionHandler: () => ({ defaultValue: "-" }),
  react: {
    useSuspense: false,
  },
}
