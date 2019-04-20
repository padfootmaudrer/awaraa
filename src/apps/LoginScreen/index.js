import React, {Component} from 'react';
import {StyleSheet, View, Button, Image} from 'react-native';
import TripCard from '../../components/TripCard.js';

const BanjaraLogo = require('../../../assets/banjara_logo.png');

export default class LoginScreen extends Component {

  constructor(props){
    super(props);
  }

  handleSkipPress = () => {
    this.props.navigation.navigate('HomeScreen');
  }

  render(){
    return(
      <View style={styles.container}>
        <Button title="Skip" onPress={() => this.handleSkipPress()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		flexDirection: 'row',
    justifyContent: 'center',
    padding:16
  }
});