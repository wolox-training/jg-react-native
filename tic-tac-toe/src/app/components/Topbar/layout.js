import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './styles.scss';

class Topbar extends Component() {
  getLinks = urls => {
    const links = urls.map((url, index) => <Link to={url.src} key={index} />);
    return links;
  };

  render() {
    return (
      <div className={style.topbar}>
        {this.getLinks()}
        <button className={style.logout} />
      </div>
    );
  }
}

export default Topbar;
