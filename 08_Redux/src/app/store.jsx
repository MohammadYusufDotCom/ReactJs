import { configureStore } from "@reduxjs/toolkit";
import { custumTransform } from "./transformTime";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import sessionStorage from "redux-persist/es/storage/session";

import todoReducer from "../todoSlice/todoSlice"

const persistConfig = {
    key: 'root',
    storage:sessionStorage,
    transforms: [custumTransform]
  };

  const persistedReducer = persistReducer(persistConfig,todoReducer)

export const store = configureStore({
    reducer: persistedReducer,
    // reducer: todoReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

export const persisteStore = persistStore(store)
