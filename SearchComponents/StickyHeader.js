import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Actions, TextInput, Alert, ScrollView } from 'react-native';

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
