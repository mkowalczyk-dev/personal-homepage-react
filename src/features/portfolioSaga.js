import { call, put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";
import {
  fetchPortfolioStart,
  fetchPortfolioSuccess,
  fetchPortfolioFailure,
} from "./portfolioSlice";
import { getRepositories } from "./portfolioApi";

const loadingDelay = 2000;

function* fetchPortfolioSaga({ payload: username }) {

  try {
    yield delay(loadingDelay);
    const portfolioResponse = yield call(getRepositories, username);
    yield put(fetchPortfolioSuccess(portfolioResponse));
  } catch (error) {
    yield put(fetchPortfolioFailure(error.message));
  }
}

export function* portfolioSaga() {
  yield takeLatest(fetchPortfolioStart.type, fetchPortfolioSaga);
}