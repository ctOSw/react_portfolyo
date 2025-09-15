import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme2: JSON.parse(localStorage.getItem("darkTheme2")) || false,
};

export const themeSlice = createSlice({
  name: "theme-selector2",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.darkTheme2 = !state.darkTheme2;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
