import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OffersMock } from './mocks/offers';

const Setting = {
  offers: OffersMock
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerCounts = {Setting.offers.length} offers={Setting.offers}/>
  </React.StrictMode>
);
