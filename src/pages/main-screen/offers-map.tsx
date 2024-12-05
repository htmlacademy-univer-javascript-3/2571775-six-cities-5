import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { useMap } from './use-map';

export type OffersMapProps = {
  points: [number, number, boolean][];
  className: string;
}

export function OffersMap({ points, className }: OffersMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });
      points.forEach((point) => {
        const icon = leaflet.icon({
          iconUrl: point[2] ? 'img/pin-active.svg' : 'img/pin.svg',
          iconSize: [30, 40],
          iconAnchor: [20, 40],
        });
        leaflet
          .marker({ lat: point[0], lng: point[1] }, { icon })
          .addTo(map);
      });
    }
  }, [points, map]);

  return (
    <section className={className} style={{ height: '500px' }} ref={mapRef}></section>
  );
}
