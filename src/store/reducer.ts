import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setAuthStatus, setCurrentOfferId, setLoadingStatus, setName, setOffers, setSortingType } from './action';
import { AppState } from '../types/state';
import { AuthorizationStatus, SortTypes } from '../pages/const';

const initialState: AppState = {
  currentOfferId: '',
  city: {location:{latitude:0, longitude:0, zoom:0}, name:''},
  offers: [],
  sortingType: SortTypes.Popular,
  isLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
  name: ''
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(setSortingType, (state, { payload }) => {
      state.sortingType = payload;
      const arrayForSort = [...state.offers];
      switch (payload) {
        case SortTypes.Popular:
          state.offers = arrayForSort;
          break;
        case SortTypes.PriceFromHigh:
          state.offers = arrayForSort.sort((a, b) => b.price - a.price);
          break;
        case SortTypes.PriceFromLow:
          state.offers = arrayForSort.sort((a, b) => a.price - b.price);
          break;
        case SortTypes.TopRated:
          state.offers = arrayForSort.sort((a, b) => b.rating - a.rating);
          break;
      }
    })
    .addCase(setCurrentOfferId, (state, { payload }) => {
      state.currentOfferId = payload;
    })
    .addCase(setLoadingStatus, (state, { payload }) => {
      state.isLoading = payload;
    })
    .addCase(setAuthStatus, (state, { payload }) => {
      state.authorizationStatus = payload;
    })
    .addCase(setName, (state, { payload }) => {
      state.name = payload;
    });
});
