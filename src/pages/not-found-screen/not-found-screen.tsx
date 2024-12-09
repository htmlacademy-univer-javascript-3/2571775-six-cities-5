import { Link } from 'react-router-dom';
import '../../../public/css/not-found.css';
import { memo } from 'react';

function NotFoundScreen(): JSX.Element {
  return(
    <div className='not-found'>
      <h1>404</h1>
      <Link to='/'>Вернуться на главную</Link>
    </div>
  );
}
export const MemoizedNotFoundScreen = memo(NotFoundScreen);
