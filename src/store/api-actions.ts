import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeCity, redirectToRoute, setAuthStatus, setLoadingStatus, setName, setOffers } from './action';
import { MainPageOffers } from '../types/main-page-offer';
import { ApiRoutes, AppRoute, AuthorizationStatus } from '../pages/const';
import { User } from '../types/user';
import { Auth } from '../types/auth';
import { dropToken, saveToken } from '../services/token';


export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async (_, {dispatch, extra: api}) => {
    const {data} = await api.get<MainPageOffers>(ApiRoutes.Offers);
    dispatch(setOffers(data));
    dispatch(changeCity(data[0].city));
    dispatch(setLoadingStatus(false));
  },
);

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/check',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<User>(ApiRoutes.Login);
      dispatch(setName(data.name));
      dispatch(setAuthStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const authLogin = createAsyncThunk<void, Auth, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/login',
  async (payload, {dispatch, extra: api}) => {
    const {data} = await api.post<User>(ApiRoutes.Login, payload);
    saveToken(data.token);
    dispatch(setName(data.name));
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const authLogout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'auth/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoutes.Logout);
    dropToken();
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
