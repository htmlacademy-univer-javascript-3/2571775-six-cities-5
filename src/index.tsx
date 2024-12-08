import {store} from './store';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import { checkAuth, fetchOffers } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffers());
store.dispatch(checkAuth());
root.render(
  <Provider store={store}>
    <ToastContainer />
    <App/>
  </Provider>
);
