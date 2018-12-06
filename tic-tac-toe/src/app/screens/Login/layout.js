import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, minLength, email } from '@validation';

import style from './styles.scss';
import customField from './components/Field';
import ModalError from './components/ModalError';
import fielNames from './fieldNames';

function LoginForm({ handleSubmit, loginSuccess, messageError }) {
  return (
    <React.Fragment>
      {messageError && loginSuccess && <ModalError message={messageError} />}
      <form onSubmit={handleSubmit} className={style.login}>
        <Field
          name={fielNames.USERNAME}
          label="Username"
          component={customField}
          type="text"
          validate={[required, email]}
        />
        <Field
          name={fielNames.PASSWORD}
          label="Password"
          component={customField}
          type="password"
          validate={[required, minLength]}
        />
        <button className={style.btn} type="submit">
          Sign in
        </button>
      </form>
    </React.Fragment>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginSuccess: PropTypes.bool.isRequired,
  messageError: PropTypes.string
};

export default reduxForm({
  form: 'login'
})(LoginForm);
