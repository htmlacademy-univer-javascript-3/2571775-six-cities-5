import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RefObject, useEffect, useRef, useState } from 'react';
import { City } from '../../types/city';
import { MapAttribution, MapUrlTemplate } from '../const';

export function useMap(mapRef: RefObject<HTMLElement>, city: City): leaflet.Map | null {
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
