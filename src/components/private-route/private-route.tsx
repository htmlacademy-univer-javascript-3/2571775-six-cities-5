import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../pages/const';
import { useAppSelector } from '../../hooks';

type PrivateProps = {
  children: JSX.Element;
}

export function PrivateRoute({ children }: PrivateProps): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}
