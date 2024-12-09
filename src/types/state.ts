import { City } from './city';
import { MainPageOffers } from './main-page-offer';
import {store} from '../store';
import { AuthorizationStatus, SortTypes } from '../pages/const';
import { OfferOwnInfo } from './offer-own-info';
import { Reviews } from './review';

export type AppState = {
  currentOfferId: string;
  city: City;
  offers: MainPageOffers;
  sortingType: SortTypes;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  name: string;
  offerOwnInfo: OfferOwnInfo | null;
  isOfferPageLoading: boolean;
  reviews: Reviews;
  nearestOffers: MainPageOffers;
  favoriteOffers: MainPageOffers;
  isFavoriteOffersLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
