import { OffersMap } from './offers-map';
import { OffersList } from './offers-list';
import { useAppSelector } from '../../hooks';
import CitiesList from './cities-list';
import { SortingVariables } from './sorting-versions';
import { Header } from './header';
import { SortTypes } from '../const';
import { MainPageOffers } from '../../types/main-page-offer';

function MainScreen(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const currentOfferId = useAppSelector((state) => state.currentOfferId);
  const offers = useAppSelector((state) => state.offers);
  const sortType = useAppSelector((state) => state.sortingType);
  let currentOffers: MainPageOffers = [];
  const bebra = [...offers];
  switch (sortType) {
    case SortTypes.Popular:
      currentOffers = bebra;
      break;
    case SortTypes.PriceFromHigh:
      currentOffers = bebra.sort((a, b) => b.price - a.price);
      break;
    case SortTypes.PriceFromLow:
      currentOffers = bebra.sort((a, b) => a.price - b.price);
      break;
    case SortTypes.TopRated:
      currentOffers = bebra.sort((a, b) => b.rating - a.rating);
      break;
  }
  currentOffers = currentOffers.filter((offer) => offer.city.name === city.name);
  const cities = offers.map((offer) => offer.city);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <Header/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities.filter((someCity, i, arr) => arr.findIndex((anotherCity) => anotherCity.name === someCity.name) === i).sort((a, b) => a.name.localeCompare(b.name))} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOffers.length} places to stay in {city?.name}</b>
              <SortingVariables/>
              <OffersList offers={currentOffers} offerClassNameType='cities' offersDivClassName={'cities__places-list places__list tabs__content'}/>
            </section>
            <div className="cities__right-section">
              <OffersMap points={currentOffers.map((offer) => [offer.location, offer.id === currentOfferId])} className={'cities__map map'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
