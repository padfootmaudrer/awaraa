import React, {Component} from 'react';
import {StyleSheet, View, Button, Image} from 'react-native';

const TripCard = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.tripCard}>
        <Image source={props.cardImage} style={styles.tripCard}></Image>
      </View>
      <View style={styles.cardButtonView}>
        <Button color="#001100" title={props.cardButtonTitle}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
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
    width: 360,
  }
});

export default TripCard;