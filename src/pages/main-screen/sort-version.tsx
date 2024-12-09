import { memo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortingType } from '../../store/action';
import { SortTypes } from '../const';

type SortVersionProps = {
  type: SortTypes;
  callback: () => void;
}

function SortVersion({ type, callback }: SortVersionProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentType = useAppSelector((state) => state.sortingType);
  const onClick = useCallback(
    () => {
      dispatch(setSortingType(type));
      callback();
    }, [callback, dispatch, type]);
  return(
    <li className={`places__option${type === currentType ? ' places__option--active' : ''}`} tabIndex={0} onClick={onClick}>{type}</li>);
}
export const MemoizedSortVersion = memo(SortVersion);
