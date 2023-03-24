import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import useGetFetch from '../../hooks/useGetFetch';
import ShopCard from './ShopCard/ShopCard';
import css from './List.module.scss';

const List = () => {
  const params = useParams();
  const { data, loading } = useGetFetch(`/data/List/${params.id}.json`);

  const { title, location, list } = data;

  if (loading) return <Loading />;

  return (
    <section className={css.container}>
      <div className={css.titleWrap}>
        <span className={css.title}>{title}</span>
        <span className={css.subTitle}>
          <img
            src="/images/icons/location.png"
            alt="location"
            className={css.location}
          />
          {location}
        </span>
      </div>
      <div className={css.shopWrap}>
        {list.map(info => {
          return <ShopCard key={info.id} {...info} />;
        })}
      </div>
    </section>
  );
};

export default List;
