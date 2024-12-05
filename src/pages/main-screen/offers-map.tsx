import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useState, useEffect } from 'react';
import { useMap } from './use-map';

export type OffersMapProps = {
  points: [number, number][];
  className: string;
}

export function OffersMap({ points, className }: OffersMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  const [markers, setMarkers] = useState<leaflet.Marker[]>([]);

  const icon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      markers.forEach((marker) => {
        map.removeLayer(marker);
      });
      setMarkers(points.map((point) => leaflet
        .marker({ lat: point[0], lng: point[1] }, { icon })
        .addTo(map)));
    }
  }, [points, map]);

  return (
    <section className={className} style={{ height: '500px' }} ref={mapRef}></section>
  );
}
