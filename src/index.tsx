import {store} from './store';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import { checkAuth, fetchOffers, getFavoriteOffers } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffers({isChangeCity: true}));
store.dispatch(getFavoriteOffers());
store.dispatch(checkAuth());
root.render(
  <Provider store={store}>
    <ToastContainer />
    <App/>
  </Provider>
);
