import React from 'react';
import { FlatList, View} from 'react-native';
import { TripCard } from './TripCard'

export function TripCardList(props) {
  var tripFeed = require('../constants/TripFeed.js')  
  
  onLikeIconPress = (tripId) => {console.log("Like pressed for trip ",tripId)}
  onTripSelected = (tripId) => {console.log("Selected trip ",tripId)}

  var listData = [];
  tripFeed.map((trip)=>{
    listData.push({key:trip.id,data:trip,onLikePress:onLikeIconPress,onTripSelection:onTripSelected})
  });

  return (
    <View>
      <FlatList data={listData} renderItem={({item}) => <TripCard item={item}/>}/>
    </View>
  );
}