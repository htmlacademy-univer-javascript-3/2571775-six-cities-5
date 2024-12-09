import { Route, Routes } from 'react-router-dom';
import MemoizedMainScreen from '../../pages/main-screen/main-screen';
import { AppRoute } from '../../pages/const';
import MemoizedLoginScreen from '../../pages/login-screen/login-screen';
import MemoizedFavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import MemoizedOfferScreen from '../../pages/offer-screen/offer-screen';
import { MemoizedNotFoundScreen } from '../../pages/not-found-screen/not-found-screen';
import { PrivateRoute } from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { MemoizedSpinner } from '../../pages/main-screen/spinner';
import { HistoryRouter } from '../history-router/history-router';
import { browserHistory } from '../../browser-history';

function App(): JSX.Element {
  const isLoading = useAppSelector((state) => state.isLoading);
  if (isLoading){
    return(<MemoizedSpinner />);
  }

  return(
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MemoizedMainScreen/>}
        />
        <Route
          path={AppRoute.Login}
          element={<MemoizedLoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <MemoizedFavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<MemoizedOfferScreen />}
        />
        <Route
          path='*'
          element={<MemoizedNotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
