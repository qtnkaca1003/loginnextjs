/* eslint-disable prettier/prettier */
import dynamic from "next/dynamic"

const Login = dynamic(
  () => {
    return import("./login/login")
  },
  { ssr: false },
)

export default function Home() {
  return <Login />
}
