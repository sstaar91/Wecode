import React from 'react';
import Carousel from '../../../../components/Carousel';
import css from './RecommendList.module.scss';
import './carouselStyle.scss';
import useGetFetch from '../../../../hooks/useGetFetch';

const RecommendList = () => {
  const { data, loading, error } = useGetFetch('/data/Main/recommandList.json');

  const setting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    rows: 2,
  };

  return (
    <article className={css.container}>
      <h2 className={css.title}>로컬 추천 찐 맛집</h2>
      <div className={css.carouselBox}>
        <Carousel setting={setting}>
          {data.map(({ id, title, location }) => {
            return (
              <div key={id}>
                <span>{title}</span>
                <span>{location}</span>
              </div>
            );
          })}
        </Carousel>
      </div>
    </article>
  );
};

export default RecommendList;
