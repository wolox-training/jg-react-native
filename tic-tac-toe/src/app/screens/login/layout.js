import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import style from './styles.css';

function Login(props) {
  return (
    <form onSubmit={props.onSubmit} className={style.login}>
      <Field name="username" component="input" type="text" label="Username" />
      <Field name="password" component="input" type="password" label="Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

const LoginForm = reduxForm({
  form: 'login'
})(Login);

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
