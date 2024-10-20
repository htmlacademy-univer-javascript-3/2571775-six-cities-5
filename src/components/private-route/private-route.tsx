import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../pages/const';

type PrivateProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export function PrivateRoute({authorizationStatus, children}: PrivateProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
