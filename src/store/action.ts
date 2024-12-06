import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { SortTypes } from '../pages/const';
import { MainPageOffers } from '../types/main-page-offer';

export const changeCity = createAction<City>('city/change');
export const setOffers = createAction<MainPageOffers>('offers/set');
export const setSortingType = createAction<SortTypes>('sorting/set');
export const setCurrentOfferId = createAction<string>('offer/set');
export const setLoadingStatus = createAction<boolean>('loading/set');
