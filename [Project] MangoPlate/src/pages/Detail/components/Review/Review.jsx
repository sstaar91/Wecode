import React from 'react';
import { cn, combineStyle } from '../../../../utils/styles';
import Icon from '../../../../components/Icon';
import css from './Review.module.scss';

const Review = ({
  reviews,
  setReviews,
  isOpenReview,
  setIsOpenReview,
  reviewText,
  setReviewText,
  reviewInit,
}) => {
  const changeSortReview = e => {
    const newArr = [...reviews];
    newArr.sort((a, b) => {
      return b[e.target.name] - a[e.target.name];
    });
    setReviews(newArr);
  };

  const handleReview = e => {
    const { name, value } = e.target;
    setReviewText(prev => ({ ...prev, [name]: value }));
  };

  const registerReview = id => {
    const newArr = [...reviews];
    newArr.push({ ...reviewText, id: id + 1 });
    setReviews(newArr);
    setReviewText(reviewInit);
    setIsOpenReview(prev => !prev);
  };

  return (
    <article className={css.container}>
      <h2 className={css.title}>Review</h2>
      <button className={css.sortBtn} name="rating" onClick={changeSortReview}>
        # 평점순
      </button>
      <button className={css.sortBtn} name="id" onClick={changeSortReview}>
        # 최신순
      </button>
      <div className={css.reviewBox}>
        {isOpenReview && (
          <div className={css.reviewForm}>
            <div className={css.ratingForm}>
              {new Array(5).fill(1).map((num, idx) => {
                return (
                  <img
                    key={num + idx}
                    src="/images/loading_Chicken.png"
                    alt="ratingBtn"
                    onClick={() => {
                      setReviewText(prev => ({ ...prev, rating: num + idx }));
                    }}
                    className={combineStyle(
                      `${css.ratingImg}`,
                      reviewText.rating >= num + idx,
                      `${css.check}`,
                      ''
                    )}
                  />
                );
              })}
            </div>
            <textarea
              className={css.reviewArea}
              placeholder="정성스런 리뷰를 남겨보세요!"
              name="description"
              value={reviewText.description}
              onChange={handleReview}
            />
            <div className={css.buttonBox}>
              <button
                className={cn(`${css.button}`, `${css.black}`)}
                onClick={() => setReviewText(reviewInit)}
              >
                리셋
              </button>
              <button
                className={cn(`${css.button}`, `${css.main}`)}
                onClick={() => registerReview(reviews.length)}
              >
                리뷰 남기기
              </button>
            </div>
          </div>
        )}
        {reviews.map(({ id, userId, rating, description, createAt }) => {
          return (
            <div key={id} className={css.reviewCard}>
              <Icon icon="faUser" color="black" size="2x" />
              <div>
                <span className={css.userId}>{userId}</span>
                <span className={css.rating}>
                  <Icon icon="faStar" />
                  {rating}
                </span>
                <span className={css.create}>{createAt}</span>
                <br />
                <div className={css.description}>{description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Review;
