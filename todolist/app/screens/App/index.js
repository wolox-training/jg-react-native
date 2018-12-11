import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Title from '../../components/Title';
import Footer from '../../components/Footer';

//import { actionCreators } from '../../redux/Todo/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  static propTypes = {
    items: PropTypes.array,
    dispatch: PropTypes.func,
  }

  render() {
    return (
      <View style={styles.container}>
        <Title />
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
