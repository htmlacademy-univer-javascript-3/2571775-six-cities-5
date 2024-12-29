import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../const';
import { authLogout } from '../../store/api-actions';
import { memo } from 'react';

function Header(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.authorizationStatus);
  const userEmail = useAppSelector((state) => state.email);
  const offers = useAppSelector((state) => state.offers);
  return(
    <nav className="header__nav">
      <ul className="header__nav-list">{
        auth === AuthorizationStatus.Auth
        && (
          <li className="header__nav-item user">
            <div className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <Link className="header__user-name user__name" to={AppRoute.Favorites}>
                <span>{userEmail}</span>
              </Link>
              <span className="header__favorite-count">{offers.filter((offer) => offer.isFavorite).length}</span>
            </div>
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
export const MemoizedHeader = memo(Header);
