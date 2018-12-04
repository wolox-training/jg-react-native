import React from 'react';
import PropTypes from 'prop-types';

import style from './styles.scss';

function Profile({ user, goBackClick }) {
  return (
    <div className={style.profile}>
      <h1>User info</h1>
      <ul className={style.info}>
        <li>Name: {user.name}</li>
        <li>Last name: {user.lastname}</li>
        <li>Age: {user.age}</li>
        <li>Username: {user.username}</li>
      </ul>
      <button onClick={goBackClick}>Go back</button>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    lastname: PropTypes.string,
    age: PropTypes.string,
    username: PropTypes.string
  }).isRequired,
  goBackClick: PropTypes.func.isRequired
};

export default Profile;
