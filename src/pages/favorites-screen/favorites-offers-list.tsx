import { useAppSelector } from '../../hooks';
import { FavoriteOffer } from './favorite-offer-card';

export function FavoritesOfferList(): JSX.Element {
  const offers = useAppSelector((state) => state.offers).filter((offer) => offer.isFavourite);
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
