import { City } from './city';
import { Offers } from './offer';
import {store} from '../store';
import { SortTypes } from '../pages/const';

export type AppState = {
  currentOfferId: number | undefined;
  city: City;
  offers: Offers;
  sortingType: SortTypes;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
