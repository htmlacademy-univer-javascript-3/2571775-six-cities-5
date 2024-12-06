import { createAPI } from '../services/api.ts';
import {reducer} from './reducer.ts';
import {configureStore} from '@reduxjs/toolkit';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
