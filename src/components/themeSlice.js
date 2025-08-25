import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: JSON.parse(localStorage.getItem("darkTheme")) || false,
};

export const themeSlice = createSlice({
  name: "theme-selector",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
