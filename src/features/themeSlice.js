import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkTheme: false,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: state => {
            state.isDarkTheme = !state.isDarkTheme;
        },
    },
});

export const {
    toggleTheme
} = themeSlice.actions;

const selectThemeState = state => state.theme;

export const selectIsDarkTheme = state => selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;