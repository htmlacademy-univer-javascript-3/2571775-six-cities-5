import { useParams } from 'react-router-dom';
import { Offers } from '../../types/offer';
import { OfferInfo } from './offer-info';
import { NearestOffersList } from './nearest-offers-list';

type OfferScreenProps = {
  offers: Offers;
}

function OfferScreen({offers}: OfferScreenProps): JSX.Element {
  const { id } = useParams();
  let offerId = 0;
  if (id){
    offerId = +id;
  }
  const currentOffer = offers.find((offer) => offer.id === offerId);
  const nearestOffers = offers.filter((offer) => currentOffer?.properties.nearestOffersId.includes(offer.id));
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
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <OfferInfo offer={currentOffer} nearestOffers={nearestOffers}/>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearestOffersList offers={nearestOffers} ></NearestOffersList>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
