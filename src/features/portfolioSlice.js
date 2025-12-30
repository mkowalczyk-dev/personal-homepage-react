import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolio: [],
  loading: false,
  error: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    fetchPortfolioStart(state, action) {
      state.loading = true;
      state.portfolio = action.payload;
    },
    fetchPortfolioSuccess(state, action) {
      state.loading = false;
      state.portfolio = action.payload;
    },
    fetchPortfolioFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPortfolioStart,
  fetchPortfolioSuccess,
  fetchPortfolioFailure,
} =
  portfolioSlice.actions;

export default portfolioSlice.reducer;