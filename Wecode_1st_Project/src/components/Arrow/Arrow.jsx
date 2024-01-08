import React from 'react';
import { cn } from '../../utils/styles';
import css from './Arrow.module.scss';

const Arrow = ({ direction, onClick }) => {
  return (
    <img
      src="/images/icons/arrow.png"
      alt="arrow"
      className={cn(`${css.arrow}`, `${css[direction]}`)}
      onClick={onClick}
    />
  );
};

export default Arrow;
