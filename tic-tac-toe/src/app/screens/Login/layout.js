import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import style from './styles.scss';

function LoginForm(props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={style.login}>
      <div>
        <label htmlFor="username"> Username </label>
        <Field name="username" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password"> Password </label>
        <Field name="password" component="input" type="password" />
      </div>
      <button className={style.btn} type="submit">
        Sign in
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(LoginForm);
