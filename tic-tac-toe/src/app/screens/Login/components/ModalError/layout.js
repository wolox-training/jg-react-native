import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function ModalError({ message, handleClose, show }) {
  const title = 'Error!';
  const showHideClassName = show ? [style.show, style.modal].join(' ') : [style.hide, style.modal].join(' ');
  return (
    <div className={showHideClassName}>
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
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default ModalError;
