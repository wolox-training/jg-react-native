import React, { Component, PropTypes } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'white'
  },
  footerText: {
    color: 'red'
  }
})

export default class FooterComponent extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={styles.footer}>
          <Button>
            <Text style={styles.footerText}>Remove completed items</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
