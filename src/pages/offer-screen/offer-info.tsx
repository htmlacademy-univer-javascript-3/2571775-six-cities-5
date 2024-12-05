import { Navigate } from 'react-router-dom';
import { Offer, Offers } from '../../types/offer';
import { ReviewsList } from './reviews-list';
import { CommentSendingForm } from './comment-sending-form';
import { OffersMap } from '../main-screen/offers-map';

type OfferInfoProps = {
  offer: Offer | undefined;
  nearestOffers: Offers;
}


export function OfferInfo({offer, nearestOffers}: OfferInfoProps): JSX.Element {
  if (offer){
    return(
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {
              offer.properties.photosSrcs.map((imageSrc, index) => {
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
                {offer.description}
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
                {offer.placeType}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offer.properties.bedroomsCount} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                    Max {offer.properties.maxAdultsCount} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;{offer.priceFor}</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {
                  offer.properties.insideItems.map((item, index) => {
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
                  <img className="offer__avatar user__avatar" src={offer.properties.owner.avatarSrc} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                  {offer.properties.owner.name}
                </span>
                <span className="offer__user-status">
                  {offer.properties.owner.status}
                </span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {offer.properties.ownerDescription}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offer.properties.reviews.length}</span></h2>
              <ReviewsList reviews={offer.properties.reviews}/>
              <CommentSendingForm/>
            </section>
          </div>
        </div>
        <OffersMap points={nearestOffers.map((nearestOffer) => nearestOffer.coordinates)} className={'offer__map map'}></OffersMap>
      </section>
    );
  } else {
    return(<Navigate to='*' />);
  }
}
