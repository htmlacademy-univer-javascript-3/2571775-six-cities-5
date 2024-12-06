import { MainPageOffers } from '../../types/main-page-offer';
import { OfferCard } from './offer-card';

type OffersProps = {
  offers: MainPageOffers;
  offerClassNameType: string;
  offersDivClassName: string;
}

export function OffersList({offers, offerClassNameType, offersDivClassName}: OffersProps): JSX.Element {
  return(
    <div className={offersDivClassName}>
      {
        offers.map((offer, id) => {
          const keyValue = `offer-${id}`;
          return (<OfferCard offer={offer} key={keyValue} classNameType={offerClassNameType}/>);
        })
      }
    </div>);
}
