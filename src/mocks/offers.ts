import { City, Month, OfferPlace, OwnerStatus, PricePeriod, Rating } from '../pages/const';
import { Offers } from '../types/offer';

export const OffersMock: Offers = [
  {
    id: 1,
    description: 'Beautiful & luxurious apartment at great location',
    city: City.Amsterdam,
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
      }]
    }
  },
  {
    id: 2,
    description: 'Wood and stone place',
    city: City.Amsterdam,
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
      }]
    }
  },
  {
    id: 3,
    description: 'Canal View Prinsengracht',
    city: City.Amsterdam,
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
      }]
    }
  },
  {
    id: 4,
    description: 'Nice, cozy, warm big bed apartment',
    city: City.Amsterdam,
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
      }]
    }
  }
];
