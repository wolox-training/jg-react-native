import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function ModalError(props) {
  const title = 'Error!';
  const { message, handleClose } = props;
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <span className={style.close} role="button" tabIndex={0} onClick={handleClose}>
          &times;
        </span>
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}

ModalError.propTypes = {
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default ModalError;
