import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPortfolioStart,
  fetchPortfolioSuccess,
  fetchPortfolioFailure,
} from "./portfolioSlice";

function fetchPortfolioApi() {
  yield axios.get("https://hirazuku.github.io/My-VR-CV/");
}

function* fetchPortfolioSaga() {

  try {
    const portfolioResponse = yield call(fetchPortfolioApi);

    const portfolioData = portfolioResponse.data;

    yield put(fetchPortfolioSuccess(portfolioData));
  } catch (error) {
    yield put(fetchPortfolioFailure(error.message));
  }
}

export function* creditsSaga() {
  yield takeLatest(fetchPortfolioStart.type, fetchPortfolioSaga);
}