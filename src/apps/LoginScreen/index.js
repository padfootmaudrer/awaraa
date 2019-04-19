import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Text, Button, Image} from 'react-native';

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
        {/* <Button title="Skip" onPress={() => this.handleSkipPress()}/> */}
        <View style={styles.cardContainer}>
          <View style={styles.tripCard}>
            <Image source={BanjaraLogo} style={styles.tripCard}></Image>
          </View>
          <View style={styles.cardButtonView}>
            <Button color="black" title="Press Me"/>
          </View>
        </View>
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
  },
  cardContainer: {
    flex: 1,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#000000',
  },
  tripCard: {
    height: 120,
    width: 326,
    alignItems: 'center',
  },
  cardButtonView: {
    // height: 40,
    width: 360,
  }
});