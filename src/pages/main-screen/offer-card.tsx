import { Link } from 'react-router-dom';
import { MainPageOffer } from '../../types/main-page-offer';
import { useAppDispatch } from '../../hooks';
import { setCurrentOfferId } from '../../store/action';

type OfferCardProps = {
  offer: MainPageOffer;
  classNameType: string;
}

export function OfferCard({offer, classNameType}: OfferCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <article className={`${classNameType}__card place-card`} onMouseOver={() => dispatch(setCurrentOfferId(offer.id))} onMouseOut={() => dispatch(setCurrentOfferId(''))}>
      {
        offer.isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : null
      }
      <div className={`${classNameType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${offer.isFavourite ? ' place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={
              {
                width: `${offer.rating * 20}%`
              }
            }
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>);
}
