import React from 'react';
import Carousel from '../../../../components/Carousel';
import useGetFetch from '../../../../hooks/useGetFetch';
import Loading from '../../../../components/Loading';
import css from './RecommendList.module.scss';
import './carouselStyle.scss';
import Arrow from '../../../../components/Arrow/Arrow';

const RecommendList = () => {
  const { data, loading, error } = useGetFetch('/data/Main/recommandList.json');

  const setting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    rows: 2,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };

  return (
    <article className={css.container}>
      <h2 className={css.title}>로컬 추천 찐 맛집</h2>
      <div className={css.carouselBox}>
        {loading ? (
          <Loading />
        ) : (
          <Carousel setting={setting}>
            {data.map(({ id, title, location, img }) => {
              return (
                <div key={id} className={css.cardBox}>
                  <div
                    className={css.card}
                    style={{
                      backgroundImage: `url(/images/food/${img}.jpg)`,
                    }}
                  >
                    <span className={css.cardTitle}>{title}</span>
                    <span className={css.subTitle}>
                      <img
                        src="/images/icons/location.png"
                        alt="location"
                        className={css.location}
                      />
                      {location}
                    </span>
                  </div>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </article>
  );
};

export default RecommendList;
