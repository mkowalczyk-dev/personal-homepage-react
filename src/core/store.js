import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import portfolioReducer from "../features/portfolioSlice";
import themeReducer from "../common/themeSlice";

import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    theme: themeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;