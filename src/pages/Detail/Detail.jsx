import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cn } from '../../utils/styles';
import Line from '../../components/Line';
import Icon from '../../components/Icon';
import Loading from '../../components/Loading';
import useGetFetch from '../../hooks';
import css from './Detail.module.scss';

const Detail = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);
  const { data, loading } = useGetFetch(`/data/detail/${params.id}.json`);

  const { shopTitle, rating, famous, location, time, menu, review } = data;

  useEffect(() => {
    setReviews(review);
  }, [data]);

  const changeSortReview = e => {
    const newArr = [...reviews];
    newArr.sort((a, b) => {
      return b[e.target.name] - a[e.target.name];
    });
    setReviews(newArr);
  };

  if (loading) return <Loading />;

  const userColor = ['yellow', 'blue', 'red', 'black'];

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
          <div className={css.reserveBox}>
            {RESERVE_BUTTON_LIST.map(list => {
              return (
                <button
                  key={list.id}
                  className={cn(`${css.button}`, `${css[list.class]}`)}
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
          {reviews.map(({ id, userId, rating, description, createAt }) => {
            const randomNum = Math.floor(Math.random() * 3);

            return (
              <div key={id} className={css.reviewCard}>
                <Icon
                  icon="faUser"
                  color={`${userColor[randomNum]}`}
                  size="2x"
                />
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
  { id: 1, title: '주문하기', class: 'order' },
  { id: 2, title: '포장하기', class: 'packing' },
  { id: 3, title: '예약하기', class: 'reserve' },
];
