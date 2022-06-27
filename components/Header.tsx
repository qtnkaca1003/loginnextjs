import { Flex, Text, TextProps } from "@chakra-ui/react"
import { useTranslation } from "next-i18next"
import Head from "next/head"
import React from "react"

interface Props {
  namespace?: string
  title?: string
  titleProps?: TextProps
}

const lOptions = [
  {
    name: "Japanese",
    value: "ja",
  },
  {
    name: "English",
    value: "en",
  },
]

const Header = ({ namespace, title, titleProps }: Props) => {
  const { t, i18n } = useTranslation(namespace)

  const titleText = t(title || "title")
  const onChangeLanguage = (item: any) => {
    i18n.changeLanguage(item.value)
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>{titleText}</title>
        <meta property="og:title" content={titleText} />
        <meta
          property="og:description"
          content={t("description", { defaultValue: "" })}
        />
      </Head>
      <Flex
        position="sticky"
        top="0"
        w="100%"
        height="var(--header-height)"
        alignItems="center"
        py="1rem"
        bgColor="var(--main-bg-color)"
      >
        <Text
          whiteSpace="pre-line"
          w="100%"
          fontSize="1.4rem"
          fontWeight="bold"
          textAlign="center"
          position="absolute"
          left={0}
          {...titleProps}
        >
          {titleText}
        </Text>
      </Flex>
    </>
  )
}

export default Header
