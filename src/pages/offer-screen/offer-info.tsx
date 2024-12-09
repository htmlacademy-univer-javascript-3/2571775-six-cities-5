import { ReviewsList } from './reviews-list';
import { MemoizedCommentSendingForm } from './comment-sending-form';
import { OffersMap } from '../main-screen/offers-map';
import { useAppSelector } from '../../hooks';
import { OfferOwnInfo } from '../../types/offer-own-info';
import { AuthorizationStatus } from '../const';
import { memo } from 'react';

type OfferInfoProps = {
  offer: OfferOwnInfo;
}


function OfferInfo({offer}: OfferInfoProps): JSX.Element {
  const currentOfferId = useAppSelector((state) => state.currentOfferId);
  const nearestOffers = useAppSelector((state) => state.nearestOffers);
  const reviews = useAppSelector((state) => state.reviews);
  const auth = useAppSelector((state) => state.authorizationStatus);
  return(
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {
            offer.images.map((imageSrc, index) => {
              const keyValue = `photo-${index}`;
              return(
                <div className="offer__image-wrapper" key={keyValue}>
                  <img className="offer__image" src={imageSrc} alt="Photo studio" />
                </div>);
            })
          }
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {
            offer.isPremium ?
              <div className="offer__mark">
                <span>Premium</span>
              </div> : null
          }
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {offer.title}
            </h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={
                {
                  width: `${offer.rating}%`
                }
              }
              >
              </span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{offer.rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              {offer.type}
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {offer.bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{offer.price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {
                offer.goods.map((item, index) => {
                  const keyValue = `item-${index}`;
                  return(
                    <li className="offer__inside-item" key={keyValue}>
                      {item}
                    </li>);
                })
              }
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="offer__user-name">
                {offer.host.name}
              </span>
              {offer.host.isPro &&
              <span className="offer__user-status">
                Pro
              </span>}
            </div>
            <div className="offer__description">
              <p className="offer__text">
                {offer.description}
              </p>
            </div>
          </div>
          <section className="offer__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{1}</span></h2>
            <ReviewsList reviews={reviews}/>
            {auth === AuthorizationStatus.Auth && <MemoizedCommentSendingForm offerId={offer.id}/>}
          </section>
        </div>
      </div>
      <OffersMap points={nearestOffers.map((nearestOffer) => [nearestOffer.location, nearestOffer.id === currentOfferId])} className={'offer__map map'}></OffersMap>
    </section>
  );
}
export const MemoizedOfferInfo = memo(OfferInfo);
