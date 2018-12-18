import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Book from './layout';

class BookContainer extends Component {
  render() {
    const { image_url, author, title } = this.props.item;
    return (
      <Book
        img={image_url}
        author={author}
        title={title}
      />
    );
  }
}

BookContainer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    image_url: PropTypes.string
  }).isRequired
};

export default BookContainer;
