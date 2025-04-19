import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action to set the entire formData

    loginState(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      // * Set Token to AsyncStorage
      AsyncStorage.setItem("token", action.payload.token);
    },
    logout(state) {
      state.user = {};
      state.isLoggedIn = false;
      state.token = "";
      // * Remove Token from AsyncStorage
      AsyncStorage.removeItem("token");
      AsyncStorage.removeItem("isLoggedIn");
    },
  },
});

// Export actions
export const { loginState, logout } = authSlice.actions;

export default authSlice;
