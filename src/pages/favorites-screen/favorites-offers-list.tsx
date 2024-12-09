import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { MemoizedFavoriteOffer } from './favorite-offer-card';

function FavoritesOfferList(): JSX.Element {
  const offers = useAppSelector((state) => state.favoriteOffers);
  return(
    <div className="favorites__places">
      {
        offers.map((offer, id) => {
          const keyValue = `favorite-offer-${id}`;
          return (<MemoizedFavoriteOffer offer={offer} key={keyValue} />);
        })
      }
    </div>);
}

export const MemoizedFavoritesOfferList = memo(FavoritesOfferList);
