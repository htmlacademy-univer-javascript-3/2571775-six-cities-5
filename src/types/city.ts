import { CityNames } from '../pages/const';

export type City = {
  name: CityNames;
  lat: number;
  lng: number;
  zoomForMap: number;
}
