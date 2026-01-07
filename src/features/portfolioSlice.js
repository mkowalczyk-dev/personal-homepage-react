import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
  repositories: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    fetchPortfolioStart: () => ({
      status: "loading",
      repositories: null,
    }),
    fetchPortfolioSuccess: (_, { payload: repositories }) => ({
      status: "success",
      repositories,
    }),
    fetchPortfolioFailure: () => ({
      status: "error",
      repositories: null,
    }),
  },
});

export const {
  fetchPortfolioStart,
  fetchPortfolioSuccess,
  fetchPortfolioFailure,
} =
  portfolioSlice.actions;

const selectPersonalHomepageState = state => state.portolio;

export const selectRepositories = state => selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = state => selectPersonalHomepageState(state).status;

export default portfolioSlice.reducer;