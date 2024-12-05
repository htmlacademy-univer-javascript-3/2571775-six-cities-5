import { createReducer } from '@reduxjs/toolkit';
import { Paris } from '../mocks/cities';
import { OffersMock } from '../mocks/offers';
import { changeCity, setCurrentOfferId, setOffers, setSortingType } from './action';
import { AppState } from '../types/state';
import { SortTypes } from '../pages/const';

const initialState: AppState = {
  currentOfferId: undefined,
  city: Paris,
  offers: OffersMock,
  sortingType: SortTypes.Popular
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = OffersMock;
    })
    .addCase(setSortingType, (state, { payload }) => {
      state.sortingType = payload;
      const arrayForSort = [...OffersMock];
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
    });
});
