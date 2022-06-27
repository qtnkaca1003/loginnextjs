/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface UserState {
  name?: string
  accessToken?: string
  email?: string
  picture?: string
  note?: string
}

const initialState: UserState = {
  name: "",
  accessToken: "",
  email: "",
  picture: "",
  note: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      ;(state.accessToken = action.payload.accessToken),
        (state.email = action.payload.email),
        (state.name = action.payload.name),
        (state.picture = action.payload.picture),
        (state.note = action.payload.note)
    },
    deleteUser: (state, action: PayloadAction<UserState>) => {
      ;(state.accessToken = " "),
        (state.email = ""),
        (state.name = ""),
        (state.picture = "")
    },
  },
})

export const { setUser, deleteUser } = userSlice.actions

export default userSlice.reducer
