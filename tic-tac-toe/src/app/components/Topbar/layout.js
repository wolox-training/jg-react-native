import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './styles.scss';

class Topbar extends Component {
  getLinks = urls => {
    const links = urls.map((url, index) => (
      <Link to={url.src} key={index} className={style.link}>
        {url.name}
      </Link>
    ));
    return links;
  };

  render() {
    const { urls, logoutClick } = this.props;
    return (
      <nav className={style.topbar}>
        {this.getLinks(urls)}
        <button className={style.logout} onClick={logoutClick}>
          Logout
        </button>
      </nav>
    );
  }
}

Topbar.propTypes = {
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ),
  logoutClick: PropTypes.func.isRequired
};

export default Topbar;
