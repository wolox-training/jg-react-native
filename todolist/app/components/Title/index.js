import React, { Component } from 'react'
import { Container, Header, Left, Body, Right, Title } from 'native-base';


export default class TitleComponent extends Component {

  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>Todo List</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
