import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { changeCity, setLoadingStatus, setOffers } from './action';
import { MainPageOffers } from '../types/main-page-offer';
import { ApiRoutes } from '../pages/const';


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
