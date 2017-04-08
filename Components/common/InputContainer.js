import React, { Component } from 'react';
import { View } from 'react-native';


const InputContainer = (props) => {
  return (
    <View style={styles.inputContainerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  inputContainerStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    marginTop: 10,
  },
};

export {InputContainer};
