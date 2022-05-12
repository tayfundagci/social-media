import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUser: false,
  },
  reducers: {
    userLogin: (state) => {
      state.currentUser = true;
    },

    userLogout: (state) => {
      state.currentUser = false;
    },
  },
});

export const { user, userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
