import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function ModalError({ message }) {
  const title = 'Error!';
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <span className={style.close} role="button" tabIndex={0}>
          &times;
        </span>
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

ModalError.propTypes = {
  message: PropTypes.string.isRequired
};

export default ModalError;
