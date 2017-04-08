import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const Header = (props) => {

  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity style={styles.backButtonStyle}>
        {/* onPress={Actions.launchScreen} */}
        <Text style={{color: 'white'}}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.headerTextStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#5294d6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  backButtonStyle: {
    position: 'absolute',
    top: 25,
    left: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: 'white',
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 5,
  },
};

export {Header};
