import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Actions, TextInput, Alert, ScrollView } from 'react-native';

const Header = (props) => {
  const { headerTextStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <TouchableOpacity style={styles.backButtonStyle}>
        {/* onPress={Actions.launchScreen} */}
        <Text style={{color: 'white'}}>Back</Text>
      </TouchableOpacity>
      <Text style={headerTextStyle}>{props.headerText}</Text>
    </View>
  );
};

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
