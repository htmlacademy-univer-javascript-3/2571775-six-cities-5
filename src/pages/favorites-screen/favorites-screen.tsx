import { memo } from 'react';
import { MemoizedFavoritesOfferList } from './favorites-offers-list';
import { MemoizedHeader } from '../main-screen/header';
import { useAppSelector } from '../../hooks';
import { MemoizedSpinner } from '../main-screen/spinner';

function FavoritesScreen(): JSX.Element {
  const isFavoriteOffersLoading = useAppSelector((state) => state.isFavoriteOffersLoading);
  if (isFavoriteOffersLoading) {
    return <MemoizedSpinner/>;
  }
  return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <MemoizedHeader />
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <MemoizedFavoritesOfferList/>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

const MemoizedFavoritesScreen = memo(FavoritesScreen);
export default MemoizedFavoritesScreen;
