import { Reviews } from './review';
import { User } from './user';

export type OfferProperties = {
  photosSrcs: string[];
  bedroomsCount: number;
  maxAdultsCount: number;
  insideItems: string[];
  owner: User;
  ownerDescription: string;
  reviews: Reviews;
  nearestOffersId: number[];
}
