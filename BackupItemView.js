import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Actions, TextInput, Alert, ScrollView } from 'react-native';

export default class App extends Component {
  _onPressButton = () => {
    Alert.alert('This will link later!');
  };

render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#f1f1f1' }} stickyHeaderIndices={[0]}>
        <StickyHeader />
        <Card>
          <CardSection>
            <DisplayContainer>
              <View style={styles.thumbnailContainerStyle}>
                <Text style={{fontSize: 18}}>title</Text>
                <Image
                  style={styles.thumbnailStyle}
                  source={{
                    uri: 'http://greentreesarborcareinc.com/wp-content/uploads/2014/01/image-placeholder.jpg'
                  }}
                />
              </View>
              <DisplayTextContainer>
                <Text style={{fontSize: 18, color: '#031eff'}}>searchType</Text>
                <Text style={{fontSize: 20, color: '#03af1f', fontWeight: 'bold'}}>price</Text>
              </DisplayTextContainer>
            </DisplayContainer>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}
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

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const DisplayContainer = (props) => {
  return (
    <View style={styles.displayContainerStyle}>
      {props.children}
    </View>
  );
};

const DisplayTextContainer = (props) => {
  return (
    <View style={styles.displayTextContainerStyle}>
      {props.children}
    </View>
  );
};

const InputContainer = (props) => {
  return (
    <View style={styles.inputContainerStyle}>
      {props.children}
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
  containerStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  displayContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 10,
    paddingRight: 40,
  },
  displayTextContainerStyle: {
    marginRight: 5,
    fontSize: 20,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
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
  buttonContainerStyle: {
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#5294d6',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
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
