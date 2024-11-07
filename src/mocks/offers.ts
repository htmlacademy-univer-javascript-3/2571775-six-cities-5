import { Month, OfferPlace, OwnerStatus, PricePeriod, Rating } from '../pages/const';
import { Offers } from '../types/offer';
import { Amsterdam } from './cities';

export const OffersMock: Offers = [
  {
    id: 1,
    description: 'Beautiful & luxurious apartment at great location',
    city: Amsterdam,
    coordinates : [52.3909553943508, 4.85309666406198],
    imageSrc: 'img/apartment-01.jpg',
    rating: Rating.FourStar,
    price: 120,
    priceFor: PricePeriod.Night,
    placeType: OfferPlace.Apartment,
    isPremium: false,
    isFavourite: true,
    properties: {
      photosSrcs: ['img/room.jpg', 'img/apartment-01.jpg'],
      bedroomsCount: 3,
      maxAdultsCount: 3,
      insideItems: ['table', 'chair'],
      owner: {
        name: 'Semen',
        status: OwnerStatus.Pro,
        avatarSrc: 'img/avatar-max.jpg',
      },
      ownerDescription: 'very good1 place',
      reviews: [{
        owner: {
          name: 'Olga',
          status: OwnerStatus.Beginner,
          avatarSrc: 'img/avatar-angelina.jpg',
        },
        rating: Rating.OneStar,
        reviewText: 'text((',
        month: Month.April,
        year: 2024
      }],
      nearestOffersId: [2, 3, 4]
    }
  },
  {
    id: 2,
    description: 'Wood and stone place',
    city: Amsterdam,
    coordinates: [52.3609553943508, 4.85309666406198],
    imageSrc: 'img/room.jpg',
    rating: Rating.FourStar,
    price: 80,
    priceFor: PricePeriod.Night,
    placeType: OfferPlace.Room,
    isPremium: false,
    isFavourite: true,
    properties: {
      photosSrcs: ['img/room.jpg', 'img/apartment-01.jpg'],
      bedroomsCount: 3,
      maxAdultsCount: 3,
      insideItems: ['table', 'other2'],
      owner: {
        name: 'Second',
        status: OwnerStatus.Pro,
        avatarSrc: 'img/avatar-max.jpg',
      },
      ownerDescription: 'very good place',
      reviews: [{
        owner: {
          name: 'SecondOwner',
          status: OwnerStatus.Beginner,
          avatarSrc: 'img/avatar-max.jpg',
        },
        rating: Rating.OneStar,
        reviewText: 'text2((',
        month: Month.November,
        year: 2023
      }],
      nearestOffersId: [1, 3, 4]
    }
  },
  {
    id: 3,
    description: 'Canal View Prinsengracht',
    city: Amsterdam,
    coordinates: [52.3909553943508, 4.929309666406198],
    imageSrc: 'img/apartment-02.jpg',
    rating: Rating.FourStar,
    price: 132,
    priceFor: PricePeriod.Night,
    placeType: OfferPlace.Apartment,
    isPremium: false,
    isFavourite: true,
    properties: {
      photosSrcs: ['img/room.jpg', 'img/apartment-01.jpg'],
      bedroomsCount: 3,
      maxAdultsCount: 3,
      insideItems: ['table', 'chair', 'qweqw', 'aqweqwm', 'weqweqwe', '3333333'],
      owner: {
        name: 'Semen',
        status: OwnerStatus.Pro,
        avatarSrc: 'img/avatar-max.jpg',
      },
      ownerDescription: 'very good3 place',
      reviews: [{
        owner: {
          name: 'Olga',
          status: OwnerStatus.Beginner,
          avatarSrc: 'img/avatar-angelina.jpg',
        },
        rating: Rating.OneStar,
        reviewText: 'text((',
        month: Month.December,
        year: 2022
      }],
      nearestOffersId: [2, 1, 4]
    }
  },
  {
    id: 4,
    description: 'Nice, cozy, warm big bed apartment',
    city: Amsterdam,
    coordinates: [52.3809553943508, 4.939309666406198],
    imageSrc: 'img/apartment-03.jpg',
    rating: Rating.FiveStar,
    price: 180,
    priceFor: PricePeriod.Night,
    placeType: OfferPlace.Apartment,
    isPremium: true,
    isFavourite: false,
    properties: {
      photosSrcs: ['img/room.jpg', 'img/apartment-02.jpg'],
      bedroomsCount: 3,
      maxAdultsCount: 3,
      insideItems: ['table', 'chair4'],
      owner: {
        name: 'Semen',
        status: OwnerStatus.Pro,
        avatarSrc: 'img/avatar-max.jpg',
      },
      ownerDescription: 'very good place4',
      reviews: [{
        owner: {
          name: 'Olga4',
          status: OwnerStatus.Beginner,
          avatarSrc: 'img/avatar-angelina.jpg',
        },
        rating: Rating.OneStar,
        reviewText: 'text((4',
        month: Month.January,
        year: 2020
      },
      {
        owner: {
          name: 'SecondOwner',
          status: OwnerStatus.Beginner,
          avatarSrc: 'img/avatar-max.jpg',
        },
        rating: Rating.OneStar,
        reviewText: 'text2((',
        month: Month.November,
        year: 2023
      }],
      nearestOffersId: [2, 3, 1]
    }
  }
];
