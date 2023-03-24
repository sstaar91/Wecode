import React, { useState } from 'react';
import css from './ShopCard.module.scss';

const ShopCard = ({ title, address, rating, famous, img, review, like }) => {
  const [isHoverPic, setIsHoverPic] = useState(false);

  return (
    <div className={css.container}>
      <div
        className={css.imagebox}
        onMouseEnter={() => setIsHoverPic(true)}
        onMouseLeave={() => setIsHoverPic(false)}
      >
        <img src={`/images/food/${img}.jpg`} alt="food" className={css.image} />
        {isHoverPic && <div className={css.rating}>☆ {rating}</div>}
      </div>
      <div className={css.infoBox}>
        <div>
          <div className={css.shopTitle}>{title}</div>
          <div className={css.shopSub}>
            {address}
            <img src="/images/icons/like.png" alt="like" className={css.icon} />
            {famous.toLocaleString()}
          </div>
        </div>
        <div>
          <div className={css.userId}>{review.userId} 님</div>
          <div className={css.description}>{review.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
