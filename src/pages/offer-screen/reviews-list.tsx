import { Reviews } from '../../types/review';
import { ReviewInfo } from './review-info';

type ReviewsListProps = {
  reviews: Reviews;
}

export function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return(
    <ul className="reviews__list">
      {
        reviews.map((review, index) => {
          const keyValue = `review-${index}`;
          return(<ReviewInfo review={review} key={keyValue}/>);
        })
      }
    </ul>
  );
}
