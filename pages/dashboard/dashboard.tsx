/* eslint-disable prettier/prettier */
import { LogoutGG } from "pakagelogin-nhanqt"
import Image from "next/image"
import { useRouter } from "next/router"
import { useAppSelector } from "hooks/useRedux"
import { useDispatch } from "react-redux"
import { deleteUser, UserState } from "redux/userSlice"

const Dasboard = () => {
  const router = useRouter()
  const user = useAppSelector((state) => state.user)
  const dispatch = useDispatch()
  const clientId =
    "887683151777-3lg3hnfsjgurkje2am2pn41ofpukro3o.apps.googleusercontent.com"
  const signOut = () => {
    router.push("/")
    const delUser: UserState = {
      name: "",
      accessToken: "",
      email: "",
      picture: "",
    }
    dispatch(deleteUser(delUser))
  }

  return (
    <>
      <main>
        <div className="wapper__dashboard">
          <div className="wapper__dashboard__card">
            <h1 className="title">User Profile</h1>
            <div className="wapper__dashboard__card__image">
              {user?.picture !== undefined && user?.picture ? (
                <Image
                  src={user?.picture}
                  alt="avatar"
                  width={100}
                  height={100}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="wapper__dashboard__card__name">
              <h2>Name: {user?.name}</h2>
            </div>
            <div className="wapper__dashboard__card__email">
              <h3>Email: {user?.email}</h3>
            </div>
            <div className="wapper__dashboard__card__button">
              {user.note === "fb" ? (
                <button onClick={signOut} className="btn_logout">
                  Log out
                </button>
              ) : user.note === "gg" ? (
                <LogoutGG
                  buttonText="LogOut"
                  onLogoutSuccess={signOut}
                  clientId={clientId}
                />
              ) : (
                <button onClick={signOut} className="btn_logout">
                  Log out
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Dasboard
