import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon';
import css from './ShopCard.module.scss';

const ShopCard = ({
  id,
  title,
  address,
  rating,
  famous,
  img,
  review,
  like,
}) => {
  const [isHoverPic, setIsHoverPic] = useState(false);

  return (
    <Link to={`/detail/${id}`} className={css.container}>
      <div
        className={css.imagebox}
        onMouseEnter={() => setIsHoverPic(true)}
        onMouseLeave={() => setIsHoverPic(false)}
      >
        <img src={`/images/food/${img}.jpg`} alt="food" className={css.image} />
        {isHoverPic && (
          <div className={css.rating}>
            <Icon icon="faStar" color="#ffd900" />
            {rating}
          </div>
        )}
      </div>
      <div className={css.infoBox}>
        <div>
          <div className={css.shopTitle}>{title}</div>
          <div className={css.shopSub}>
            {address}
            <Icon icon="faThumbsUp" />
            {famous.toLocaleString()}
          </div>
        </div>
        <div>
          <div className={css.userId}>{review.userId} 님</div>
          <div className={css.description}>{review.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
