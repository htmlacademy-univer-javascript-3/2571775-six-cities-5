import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeCity, redirectToRoute, setAuthStatus, setFavoriteOffers, setFavoriteOffersLoadingStatus, setLoadingStatus, setName, setNearestOffers, setOfferOwnInfo, setOfferPageLoadingStatus, setOffers, setReviews } from './action';
import { MainPageOffers } from '../types/main-page-offer';
import { ApiRoutes, AppRoute, AuthorizationStatus } from '../pages/const';
import { User } from '../types/user';
import { Auth } from '../types/auth';
import { dropToken, saveToken } from '../services/token';
import { OfferOwnInfo } from '../types/offer-own-info';
import { Reviews } from '../types/review';
import { ReviewInfo } from '../types/review-info';
import { ChangeIsFavoriteInfo } from '../types/change-is-favourite-info';

export const fetchOffers = createAsyncThunk<void, {isChangeCity: boolean}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetch',
  async ({isChangeCity}, {dispatch, extra: api}) => {
    const {data} = await api.get<MainPageOffers>(ApiRoutes.Offers);
    dispatch(setOffers(data));
    if (isChangeCity){
      dispatch(changeCity(data[0].city));
    }
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

export const fetchReviews = createAsyncThunk<void, { offerId: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/fetch',
  async ({offerId}, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${ApiRoutes.Comments}/${offerId}`);
    dispatch(setReviews(data));
  },
);

export const fetchNearestOffers = createAsyncThunk<void, { offerId: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'nearestOffers/fetch',
  async ({offerId}, {dispatch, extra: api}) => {
    const {data} = await api.get<MainPageOffers>(`${ApiRoutes.Offers}/${offerId}/${ApiRoutes.NearbySuffix}`);
    dispatch(setNearestOffers(data));
  },
);

export const fetchOfferOwnInfo = createAsyncThunk<void, { offerId: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerOwnInfo/fetch',
  async ({offerId}, {dispatch, extra: api}) => {
    dispatch(setOfferPageLoadingStatus(true));
    try {
      const {data} = await api.get<OfferOwnInfo>(`${ApiRoutes.Offers}/${offerId}`);
      dispatch(fetchReviews({offerId}));
      dispatch(fetchNearestOffers({offerId}));
      dispatch(setOfferOwnInfo(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.BadRoute));
    }
    dispatch(setOfferPageLoadingStatus(false));
  },
);

export const postReview = createAsyncThunk<void, ReviewInfo, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'review/post',
  async ({comment, rating, offerId}, {dispatch, extra: api}) => {
    await api.post(`${ApiRoutes.Comments}/${offerId}`, {comment, rating});
    dispatch(fetchReviews({offerId}));
  },
);

export const changeOfferIsFavoriteStatus = createAsyncThunk<void, ChangeIsFavoriteInfo, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offerIsFavourite/change',
  async ({status, offerId}, {dispatch, extra: api}) => {
    await api.post(`${ApiRoutes.Favorite}/${offerId}/${status}`);
    dispatch(fetchOffers({isChangeCity: false}));
  },
);

export const getFavoriteOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'favoriteOffers/set',
  async (_, {dispatch, extra: api}) => {
    dispatch(setFavoriteOffersLoadingStatus(true));
    const {data} = await api.get<MainPageOffers>(`${ApiRoutes.Favorite}`);
    dispatch(setFavoriteOffers(data));
    dispatch(setFavoriteOffersLoadingStatus(false));
  },
);
