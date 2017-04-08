import React, { Component } from 'react';
import { View, TextInput} from 'react-native';
import { Header } from './index'

const StickyHeader = (props) => {

  return (
    <View>
      <Header headerText={'Simple Search'} />
      <InputContainer>
        <TextInput
          style={{height: 31, textAlign: 'center'}}
          placeholder='search here'
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </InputContainer>
    </View>
  );
};

export {StickyHeader};
