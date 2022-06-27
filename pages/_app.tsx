import { ChakraProvider } from "@chakra-ui/react"
import "assets/styles/index.scss"
import Loading from "components/Loading"
import { GetServerSidePropsContext } from "next"
import { appWithTranslation } from "next-i18next"
import type { AppProps } from "next/app"
import { useEffect } from "react"
import { Provider, useDispatch } from "react-redux"
import { setAppSize } from "redux/appSlice"
import store from "redux/store"
import theme from "theme"
import i18nextConfig from "../next-i18next.config"

declare module "next" {
  type GetSSProps = Omit<GetServerSidePropsContext, "locale"> & {
    locale: string
  }
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <AppChild Component={Component} pageProps={pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AppChild({ Component, pageProps }: any) {
  const dispatch = useDispatch()

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty("--app-height", "100vh")
      setTimeout(() => {
        doc.style.setProperty("--app-height", `${window.innerHeight}px`)
        dispatch(
          setAppSize({
            width: window.innerWidth,
            height: window.innerHeight,
          }),
        )
        // Delay for get correct height screen
      }, 300)
    }
    appHeight()
    const disableZoomTouch = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault()
        event.stopPropagation()
      }
    }
    window.addEventListener("resize", appHeight)
    window.addEventListener("touchstart", disableZoomTouch, { passive: false })

    return () => {
      window.removeEventListener("resize", appHeight)
      window.removeEventListener("touchstart", disableZoomTouch)
    }
  }, [dispatch])

  return (
    <>
      <Component {...pageProps} />
      <Loading />
    </>
  )
}

export default appWithTranslation(MyApp, i18nextConfig)
