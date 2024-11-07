import { Offers } from '../../types/offer';
import { NearestOffer } from './nearest-offer';

type NearestOffersListProps = {
  offers: Offers;
}

export function NearestOffersList({offers}: NearestOffersListProps): JSX.Element {
  return(
    <div className="near-places__list places__list">
      {
        offers.map((offer, index) => {
          const keyValue = `offer-${index}`;
          return(<NearestOffer offer={offer} key={keyValue}/>);
        })
      }
    </div>
  );
}
