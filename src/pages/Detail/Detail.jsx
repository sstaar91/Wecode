import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cn, combineStyle } from '../../utils/styles';
import { dateFormat } from '../../utils/date';
import Line from '../../components/Line';
import Icon from '../../components/Icon';
import Loading from '../../components/Loading';
import useGetFetch from '../../hooks';
import css from './Detail.module.scss';

const reviewInit = {
  id: 0,
  userId: '단백질마렵다',
  rating: 0,
  description: '',
  createAt: dateFormat(),
};

const Detail = () => {
  const params = useParams();
  const [isOpenReview, setIsOpenReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState(reviewInit);

  const { data, loading } = useGetFetch(`/data/detail/${params.id}.json`);

  const { shopTitle, rating, famous, location, time, menu, review } = data;

  useEffect(() => {
    setReviews(review);
  }, [data]);

  console.log(reviews);

  const handelActiveBtn = () => {
    setIsOpenReview(prev => !prev);
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

  const changeSortReview = e => {
    const newArr = [...reviews];
    newArr.sort((a, b) => {
      return b[e.target.name] - a[e.target.name];
    });
    setReviews(newArr);
  };

  if (loading) return <Loading />;

  return (
    <section>
      <article className={css.infoContainer}>
        <img
          src="/images/food/chicken.jpg"
          alt="shop"
          className={css.shopImg}
        />
        <div className={css.infoBox}>
          <span className={css.title}>{shopTitle}</span>
          <span className={css.recommand}>
            <Icon icon="faStar" />
            {rating}
          </span>
          <span className={css.recommand}>
            <Icon icon="faThumbsUp" />
            {famous}
          </span>
          <Line />
          <div className={css.infoWrap}>
            <span>
              <Icon icon="faLocationDot" />
              {location}
            </span>
            <span>
              <Icon icon="faClock" />
              {time}
            </span>
          </div>
          <div className={css.menuBox}>
            <span className={css.menuText}>MENU</span>
            {menu.map(({ id, name, price, protein, pick }) => {
              return (
                <div className={css.menuCard} key={id}>
                  <label className={css.pick}>{pick && '추천'}</label>
                  <span className={css.menuTitle}>{name}</span>
                  <span className={css.menuinfo}>
                    가격 : {price.toLocaleString()} ₩
                  </span>
                  <span className={css.menuinfo}>
                    단백질 함유량 : {protein}g
                  </span>
                  <span>(1인분 기준)</span>
                </div>
              );
            })}
          </div>
          <div className={css.buttonBox}>
            {RESERVE_BUTTON_LIST.map(list => {
              return (
                <button
                  key={list.id}
                  className={cn(`${css.button}`, `${css[list.class]}`)}
                  onClick={handelActiveBtn}
                >
                  {list.title}
                </button>
              );
            })}
          </div>
        </div>
      </article>
      <article className={css.reviewContainer}>
        <h2 className={css.title}>Review</h2>
        <button
          className={css.sortBtn}
          name="rating"
          onClick={changeSortReview}
        >
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
    </section>
  );
};

export default Detail;

const RESERVE_BUTTON_LIST = [
  { id: 1, title: '리뷰달기', class: 'black' },
  { id: 2, title: '주문하기', class: 'eatDeal' },
  { id: 3, title: '예약하기', class: 'main' },
];
