import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Checkbox from './layout';
import { actionCreators } from '../../redux/Todo/actions';

class CheckboxContainer extends Component {
  handleRemove = () => {
    const { item } = this.props;
    this.props.dispatch(actionCreators.removeItem(item));
  };

  toggleComplete = () => {
    const { item } = this.props;
    this.props.dispatch(actionCreators.completedItem(item));
  };

  render() {
    const { name, completed } = this.props.item;
    return (
      <Checkbox 
        name={name}
        completed={completed}
        toggleComplete={this.toggleComplete}
        handleRemove={this.handleRemove}
      />
    );
  }
}

CheckboxContainer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired
};

export default connect()(CheckboxContainer);
