import { createReducer } from '@reduxjs/toolkit';
import { Paris } from '../mocks/cities';
import { OffersMock } from '../mocks/offers';
import { changeCity, setOffers } from './action';
import { InitialState } from '../types/state';

const initialState: InitialState = {
  city: Paris,
  offers: OffersMock
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = OffersMock;
    });
});
