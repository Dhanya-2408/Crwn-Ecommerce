import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const middleWares = [logger];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
