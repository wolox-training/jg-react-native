import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import style from './styles.scss';
import { required, minLength, email } from './validation';
import customField from './components/Field';
import ModalError from './components/ModalError';
import fieldNames from './fieldNames';

function LoginForm({ handleSubmit, messageError }) {
  return (
    <React.Fragment>
      {messageError && <ModalError message={messageError} />}
      <form onSubmit={handleSubmit} className={style.login}>
        <Field {...fieldNames.username} component={customField} validate={[required, email]} />
        <Field {...fieldNames.password} component={customField} validate={[required, minLength]} />
        <button className={style.btn} type="submit">
          Sign in
        </button>
      </form>
    </React.Fragment>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  messageError: PropTypes.string
};

export default reduxForm({
  form: 'login'
})(LoginForm);
