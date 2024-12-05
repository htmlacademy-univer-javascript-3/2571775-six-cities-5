import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortTypes } from '../pages/const';

export const changeCity = createAction<City>('city/change');
export const setOffers = createAction('offers/set');
export const setSortingType = createAction<SortTypes>('sorting/set');
export const setCurrentOfferId = createAction<number | undefined>('offer/set');
