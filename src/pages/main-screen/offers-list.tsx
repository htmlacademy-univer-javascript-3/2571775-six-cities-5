import { useState } from 'react';
import { Offers } from '../../types/offer';
import { OfferCard } from './offer-card';

type OffersProps = {
  offers: Offers;
}

export function OffersList({offers}: OffersProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCardId, setActiveCardId] = useState(0);
  return(
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer, id) => {
          const keyValue = `offer-${id}`;
          return (<OfferCard offer={offer} key={keyValue} onMouseOver={() => setActiveCardId(offer.id)}/>);
        })
      }
    </div>);
}
