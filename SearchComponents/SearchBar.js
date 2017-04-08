import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { InputContainer } from './InputContainer'

const SearchBar = (props) => {
  return (
    <InputContainer>
      <TextInput
        style={{height: 31, textAlign: 'center'}}
        placeholder='search here'
        // onChangeText={(text) => this.setState({text})}
        // value={this.state.text}
      />
    </InputContainer>
  );
};
