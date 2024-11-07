import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';
import { useRef } from 'react';
import { useMap } from './use-map';

export type OffersMapProps = {
  city: City;
  points: [number, number][];
}

export function OffersMap({city, points}: OffersMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  if (map){
    points.forEach((point) => {
      leaflet
        .marker({
          lat: point[0],
          lng: point[1],
        }, {
          icon: icon,
        })
        .addTo(map);
    });
  }

  return (
    <section className="cities__map map" style={{height: '500px'}} ref={mapRef}></section>
  );
}
