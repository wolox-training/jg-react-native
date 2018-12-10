import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, minLength, email } from '@validation';

import style from './styles.scss';
import customField from './components/Field';
import ModalError from './components/ModalError';
import fielNames from './fieldNames';

function LoginForm({ handleSubmit, loginError, loginLoading, showModal, handleCloseModal }) {
  return (
    <React.Fragment>
      {showModal && loginError && <ModalError loginError={loginError} handleClose={handleCloseModal} />}
      <form onSubmit={handleSubmit} className={style.login}>
        <Field
          name={fielNames.USERNAME}
          label="Username"
          type="text"
          component={customField}
          validate={[required, email]}
        />
        <Field
          name={fielNames.PASSWORD}
          label="Password"
          type="password"
          component={customField}
          validate={[required, minLength]}
        />
        <button className={style.btn} type="submit" disabled={loginLoading}>
          Sign in
        </button>
      </form>
    </React.Fragment>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  loginLoading: PropTypes.bool,
  showModal: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(LoginForm);
