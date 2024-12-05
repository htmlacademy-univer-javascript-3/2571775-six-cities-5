import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RefObject, useEffect, useRef, useState } from 'react';
import { MapAttribution, MapUrlTemplate } from '../const';
import { useAppSelector } from '../../hooks';

export function useMap(mapRef: RefObject<HTMLElement>): leaflet.Map | null {
  const city = useAppSelector((state) => state.city);
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current || '', {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoomForMap,
      });

      leaflet
        .tileLayer(
          MapUrlTemplate,
          {
            attribution: MapAttribution,
          },
        )
        .addTo(instance);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return(map);
}
