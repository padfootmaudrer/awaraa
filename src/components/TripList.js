import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import TripCard from './TripCard.js';

const TripList = props => {
  
  getTripCardList = (item) => {
    return {cardImage:item.tripImage,cardTitle:item.tripTitle,key:item.tripTitle+"1"}
  }
  var tripList = props.tripList.map(getTripCardList)

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tripList}
        renderItem={({item}) => <TripCard cardImage={item.cardImage} cardButtonTitle={item.cardTitle}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:10,
  }
});

export default TripList;