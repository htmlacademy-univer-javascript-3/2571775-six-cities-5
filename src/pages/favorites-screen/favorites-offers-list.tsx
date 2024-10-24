import { Offers } from '../../types/offer';
import { FavoriteOffer } from './favorite-offer-card';

type FavoritesOfferListProps = {
  offers: Offers;
}

export function FavoritesOfferList({offers}: FavoritesOfferListProps): JSX.Element {
  return(
    <div className="favorites__places">
      {
        offers.map((offer, id) => {
          const keyValue = `favorite-offer-${id}`;
          return (<FavoriteOffer offer={offer} key={keyValue} />);
        })
      }
    </div>);
}
