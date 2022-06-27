/* eslint-disable prettier/prettier */
import { useAppDispatch, useAppSelector } from "hooks/useRedux"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { PageIndex } from "pakagelogin-nhanqt"
import { useState } from "react"
import { setUser, UserState } from "redux/userSlice"

interface IRes {
  name: string
  accessToken: string
  email: string
  picture: { data: { url: string } }
  profileObj: { name?: string; email?: string; imageUrl?: string }
}
const Login = () => {
  const appId = "575100697553277"
  const clientId =
    "887683151777-3lg3hnfsjgurkje2am2pn41ofpukro3o.apps.googleusercontent.com"
  const cliendId = ""
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const router = useRouter()
  const [userName, setUserName] = useState<string>("")
  const [, /* password */ setPassword] = useState<string>("")
  const onClickLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const acc: UserState = {
      accessToken: userName,
      name: userName,
      email: "@gmail.com",
    }
    dispatch(setUser(acc))
    router.push("/dashboard/dashboard")
  }
  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const responseFacebook = (resFB: IRes) => {
    const addUser: UserState = {
      name: resFB?.name,
      accessToken: resFB.accessToken,
      email: resFB.email,
      picture: resFB.picture.data.url,
      note: "fb",
    }
    dispatch(setUser(addUser))
    router.push("/dashboard/dashboard")
  }
  const onSuccess = (res: IRes) => {
    const data: UserState = {
      name: res?.profileObj.name,
      accessToken: res.accessToken,
      email: res?.profileObj.email,
      note: "gg",
      picture: res?.profileObj.imageUrl,
    }
    dispatch(setUser(data))
    router.push("/dashboard/dashboard")
  }
  const onFailure = (res: IRes) => {
    const error = res.accessToken
  }

  return (
    <PageIndex
      onSuccess={onSuccess}
      onFailure={onFailure}
      callback={responseFacebook}
      onChangePassword={changePassword}
      onSubmit={onClickLogin}
      onChangeUserName={changeUsername}
      appId={appId}
      clientId={clientId}
      paddingTitle="0 0 49px"
      sizeButton="large"
      textButton="LOGIN"
      typeButton="button"
    />
  )
}

export default Login
