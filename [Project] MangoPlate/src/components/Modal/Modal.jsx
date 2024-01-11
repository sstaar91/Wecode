import React, { useEffect } from 'react';
import css from './Modal.module.scss';

const Modal = ({ children, handleModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className={css.dimmedBackground}
      onClick={() => {
        handleModal(false);
      }}
    >
      <div className={css.container}>{children}</div>
    </div>
  );
};

export default Modal;
