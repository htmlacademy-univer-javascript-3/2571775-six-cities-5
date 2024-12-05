import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';

export const changeCity = createAction<City>('city/change');
export const setOffers = createAction('offers/set');
