import React from 'react';
import { Field, reduxForm } from 'redux-form';

import style from './styles.scss';

function LoginForm(props) {
  // eslint-disable-next-line
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
      <button type="submit">Submit</button>
    </form>
  );
}
// eslint-disable-next-line
LoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default LoginForm;
