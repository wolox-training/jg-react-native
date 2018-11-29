import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import style from './styles.scss';
import { required, minLength, email } from './validation';
import customField from './components/Field';

function LoginForm(props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className={style.login}>
      <Field
        name="username"
        label="Username"
        component={customField}
        type="text"
        validate={[required, email]}
      />
      <Field
        name="password"
        label="Password"
        component={customField}
        type="password"
        validate={[required, minLength]}
      />
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
