import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import List from '../../components/List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title />
        <Input />
        <List items={this.props.items} />
        <Footer />
      </View>
    )
  }
}

const mapStateToProps = store => ({
  items: store.items,
})

App.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(App);
