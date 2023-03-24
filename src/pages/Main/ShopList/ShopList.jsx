import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../../../components/Carousel';
import useGetFetch from '../../../hooks/useGetFetch';
import Loading from '../../../components/Loading';
import Arrow from '../../../components/Arrow/Arrow';
import css from './ShopList.module.scss';
import './carouselStyle.scss';

const ShopList = ({ categoryTitle, url }) => {
  const navigate = useNavigate();
  const { data, loading, error } = useGetFetch(`/data/Main/${url}.json`);

  const setting = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    rows: 2,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };

  const goToPage = id => {
    if (url === 'recommandList') {
      navigate(`/list/${id}`);
    }
  };

  return (
    <article className={css.container}>
      <h2 className={css.title}>{categoryTitle}</h2>
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
                    onClick={() => goToPage(id)}
                  >
                    <span className={css.cardTitle}>{title}</span>
                    {location && (
                      <span className={css.subTitle}>
                        <img
                          src="/images/icons/location.png"
                          alt="location"
                          className={css.location}
                        />
                        {location}
                      </span>
                    )}
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

export default ShopList;
