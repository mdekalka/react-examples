import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import * as reducers from './reducer';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
 reducer: { ...reducers },
 middleware,
 devTools: process.env.NODE_ENV !== 'production',
});
