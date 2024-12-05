import { CityNames } from '../pages/const';

export type City = {
  id: number;
  name: CityNames;
  lat: number;
  lng: number;
  zoomForMap: number;
}
