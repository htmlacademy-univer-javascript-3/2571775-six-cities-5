import { useParams } from 'react-router-dom';
import { OfferInfo } from './offer-info';
import { OffersList } from '../main-screen/offers-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchOfferOwnInfo } from '../../store/api-actions';
import { OfferOwnInfo } from '../../types/offer-own-info';
import { Spinner } from '../main-screen/spinner';
import { Header } from '../main-screen/header';

function OfferScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  let offerId = '';
  if (id){
    offerId = id;
  }
  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferOwnInfo({ offerId }));
    }
  }, [dispatch, offerId]);

  const currentOffer = useAppSelector((state) => state.offerOwnInfo) as OfferOwnInfo;
  const isOfferPageLoading = useAppSelector((state) => state.isOfferPageLoading);
  if (!currentOffer || isOfferPageLoading) {
    return <Spinner/>;
  }
  const nearestOffers = offers.slice(0, 3);
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
            <Header/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <OfferInfo offer={currentOffer} nearestOffers={nearestOffers}/>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList offers={nearestOffers} offerClassNameType={'near-places'} offersDivClassName={'near-places__list places__list'} ></OffersList>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
