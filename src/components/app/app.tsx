import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute, AuthorizationStatus } from '../../pages/const';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import { NotFoundScreen } from '../../pages/not-found-screen/not-found-screen';
import { PrivateRoute } from '../private-route/private-route';
import { Offers } from '../../types/offer';

type AppProps = {
  offerCounts: number;
  offers: Offers;
}

function App({offerCounts, offers}: AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen offerCounts={offerCounts} offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesScreen favouriteOffers={offers.filter((offer) => offer.isFavourite)}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen offers={offers} />}
        />
        <Route
          path='*'
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
