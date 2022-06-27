import { Box, BoxProps, TextProps } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React, { ReactNode } from "react"
import Header from "./Header"

interface Props {
  children?: ReactNode
  title?: string
  namespace?: string
  titleProps?: TextProps
  childProps?: BoxProps
}

const Layout = ({
  namespace,
  children,
  title,
  titleProps,
  childProps,
}: Props) => {
  const router = useRouter()

  return (
    <>
      <Header namespace={namespace} title={title} titleProps={titleProps} />
      <Box
        id="body-container"
        as="main"
        flex={1}
        overflow="hidden"
        {...childProps}
      >
        {children}
      </Box>
    </>
  )
}

export default Layout
