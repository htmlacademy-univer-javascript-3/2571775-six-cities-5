import { City } from './city';
import { MainPageOffers } from './main-page-offer';
import {store} from '../store';
import { AuthorizationStatus, SortTypes } from '../pages/const';

export type AppState = {
  currentOfferId: string;
  city: City;
  offers: MainPageOffers;
  sortingType: SortTypes;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  name: string;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
