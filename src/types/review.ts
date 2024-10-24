import { Month, Rating } from '../pages/const';
import { User } from './user';

export type Review = {
  owner: User;
  rating: Rating;
  reviewText: string;
  month: Month;
  year: number;
}

export type Reviews = Review[];
