import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import TripList from '../../components/TripList.js';

const BanjaraLogo = require('../../../assets/banjara_logo.png');
export default class HomeScreen extends Component {
  
  constructor(props){
    super(props);
  }

  render(){

    var tripList = [
      {tripImage:BanjaraLogo,tripTitle:"Press Me"},
      {tripImage:BanjaraLogo,tripTitle:"Press Me pls"},
      {tripImage:BanjaraLogo,tripTitle:"Press Me pls"},
      {tripImage:BanjaraLogo,tripTitle:"Press Me pls"},
      {tripImage:BanjaraLogo,tripTitle:"Press Me pls"},
      {tripImage:BanjaraLogo,tripTitle:"Press Me pls"}
    ];

    return(
      <View style={styles.container}>
        <TripList tripList={tripList}/>
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
  },
  listContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:10,
  }
});