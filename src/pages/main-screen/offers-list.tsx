import { useState } from 'react';
import { Offers } from '../../types/offer';
import { OfferCard } from './offer-card';

type OffersProps = {
  offers: Offers;
  offerClassNameType: string;
  offersDivClassName: string;
}

export function OffersList({offers, offerClassNameType, offersDivClassName}: OffersProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCardId, setActiveCardId] = useState(0);
  return(
    <div className={offersDivClassName}>
      {
        offers.map((offer, id) => {
          const keyValue = `offer-${id}`;
          return (<OfferCard offer={offer} key={keyValue} onMouseOver={() => (setActiveCardId(offer.id))} classNameType={offerClassNameType}/>);
        })
      }
    </div>);
}
