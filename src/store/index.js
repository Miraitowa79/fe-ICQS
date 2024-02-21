import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import authenticationSlice from "./authentication/slice";
import themeSlice from './theme/slice'

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector= useSelector;
