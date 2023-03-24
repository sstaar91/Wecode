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
      className={css.modal}
      onClick={() => {
        handleModal(false);
      }}
    >
      {children}
    </div>
  );
};

export default Modal;
