import { City } from './city';
import { Offers } from './offer';
import {store} from '../store';

export type InitialState = {
  city: City;
  offers: Offers;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
