import { OfferPlace, PricePeriod, Rating } from '../pages/const';
import { City } from './city';
import { OfferProperties } from './offer-properties';

export type Offer = {
  id: number;
  description: string;
  city: City;
  coordinates: [number, number];
  imageSrc: string;
  rating: Rating;
  price: number;
  priceFor: PricePeriod;
  placeType: OfferPlace;
  isPremium: boolean;
  isFavourite: boolean;
  properties: OfferProperties;
}

export type Offers = Offer[]
