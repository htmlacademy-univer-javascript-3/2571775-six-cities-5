import { ChangeEvent, FormEvent, memo, useCallback, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { postReview } from '../../store/api-actions';

type CommentSendingFormProps = {
  offerId: string;
}

function CommentSendingForm({ offerId }: CommentSendingFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [canPost, setCanPost] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const handleFieldChange = useCallback((evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setText(value);
    setCanPost(value.length >= 50 && rating !== 0);
  }, [rating]);
  const handleFieldChangeInput = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setRating(+value);
    setCanPost(text.length >= 50 && +value !== 0);
  }, [text.length]);

  const submit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsPosting(true);
    dispatch(postReview({
      comment: text,
      rating: rating,
      offerId: offerId,
    }));
    setText('');
    setRating(0);
    setCanPost(false);
    setIsPosting(false);
  }, [dispatch, offerId, rating, text]);
  return(
    <form className="reviews__form form" onSubmit={submit} aria-disabled={!isPosting}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onChange={handleFieldChangeInput} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" checked={rating === 5} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={handleFieldChangeInput} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked={rating > 3} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={handleFieldChangeInput} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" checked={rating > 2}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={handleFieldChangeInput} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" checked={rating > 1}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onChange={handleFieldChangeInput} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" checked={rating > 0}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea onChange={handleFieldChange} value={text} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!canPost}>Submit</button>
      </div>
    </form>
  );
}
export const MemoizedCommentSendingForm = memo(CommentSendingForm);
