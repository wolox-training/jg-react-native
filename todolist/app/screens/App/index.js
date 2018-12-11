import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Content } from 'native-base';

import Title from '../../components/Title';
import Footer from '../../components/Footer';
import Input from '../../components/Input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title />
        <Input />
        <Content />
        <Footer />
      </View>
    )
  }
}

App.propTypes = {
  items: PropTypes.array,
  dispatch: PropTypes.func,
};

export default connect(mapStateToProps)(App);
