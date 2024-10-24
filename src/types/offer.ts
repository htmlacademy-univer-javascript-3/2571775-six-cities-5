import { City, OfferPlace, PricePeriod, Rating } from '../pages/const';
import { OfferProperties } from './offer-properties';

export type Offer = {
  id: number;
  description: string;
  city: City;
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
