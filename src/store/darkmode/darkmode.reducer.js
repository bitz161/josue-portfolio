import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "darkmode",
  initialState: {
    darkmode: {
      backgroundColor: "#0d1b2a",
      textColor: "#e0e1dd",
      elementColor: "#1b263b",
    },
    lightmode: {
      backgroundColor: "#ffffff",
      textColor: "#1b263b",
      elementColor: "#e0e1dd",
    },
    currentTheme: false,
  },
  reducers: {
    enableDarkmode(state, action) {
      const { payload } = action;
      state.currentTheme = payload;
    },
  },
});

export const themeActions = themeSlice.actions;
