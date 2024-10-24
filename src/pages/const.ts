export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum OfferPlace {
  Apartment = 'Apartment',
  Room = 'Room'
}

export enum PricePeriod {
  Night = 'Night'
}

export enum Rating {
  OneStar = 20,
  TwoStar = 40,
  ThreeStar = 60,
  FourStar = 80,
  FiveStar = 100
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum OwnerStatus {
  Beginner = 'Beginner',
  Middle = 'Middle',
  Pro = 'Pro',
  Legend = 'Legend'
}

export enum Month {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December',
}
