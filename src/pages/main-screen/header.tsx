import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../const';
import { authLogout } from '../../store/api-actions';

export function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.authorizationStatus);
  const userName = useAppSelector((state) => state.name);
  const offers = useAppSelector((state) => state.offers);
  return(
    <nav className="header__nav">
      <ul className="header__nav-list">{
        auth === AuthorizationStatus.Auth
        && (
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{userName}</span>
              <span className="header__favorite-count">{offers.filter((offer) => offer.isFavourite).length}</span>
            </a>
          </li>
        )
      }
      {auth === AuthorizationStatus.Auth ?
        <Link
          className="header__nav-link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(authLogout());
          }}
          to={AppRoute.Main}
        >
          <span className="header__signout">Sign out</span>
        </Link> :
        <Link className="header__nav-link" to={AppRoute.Login}>
          <span className="header__signout">Sign in</span>
        </Link>}
      </ul>
    </nav>
  );
}
