import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

export function TripCard(props) {

  const onLikePress = () => {
    props.item.onLikePress(props.item.key)
  }

  const onTripSelection = () => {
    props.item.onTripSelection(props.item.key)
  }

  return (
    <View style={styles.parentCardContainer}>
      <TouchableOpacity activeOpacity={0.8} style={styles.cardImageContainer} onPress={onTripSelection}>
        <Image source={props.item.data.cardImage.source} style={styles.cardImage}></Image>
        <View style={styles.cardImageTextContainer}>
          <Text style={styles.cardImageText}>{props.item.data.cardImage.imageText}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.cardDetailsContainer}>
        <View style={styles.cardProfileContainer}>
          <TouchableOpacity style={styles.cardProfileImageContainer}>
            <Image source={props.item.data.profile.imageSource} style={styles.cardProfileImage}/>
          </TouchableOpacity>
          <View style={styles.cardProfileNameContainer}>
            <Text style={styles.cardProfileNameText}>{props.item.data.profile.name}</Text>
            <Text style={styles.cardProfileAgeText}>{props.item.data.profile.age}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.cardLikeIconContainer} activeOpacity={0.8} onPress={onLikePress}>
          <Ionicons name={Platform.OS==='ios'?'ios-thumbs-up':'md-thumbs-up'} size={40} color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}/>      
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentCardContainer:{
    height:250,
    borderRightWidth:0.1,
    borderLeftWidth:0.1,
    borderBottomWidth:0.1,
    borderWidth:0.05,
    elevation:2,
    marginTop:4,
    marginBottom:3,
    marginLeft:4,
    marginRight:4,
    paddingTop:4,
    paddingBottom:2,
    justifyContent: 'center',
  },
  cardImageContainer: {
    flex:6,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  cardImage:{
    flex:1,
    resizeMode: 'contain',
    width:'100%'
  },
  cardImageTextContainer:{
    position: 'absolute',
    justifyContent: 'flex-end', 
  },
  cardImageText:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 24,
    textAlign: 'center',
  },
  cardDetailsContainer:{
    flex:2,
    flexDirection: 'row'
  },
  cardProfileContainer:{
    flex:9,
    flexDirection: 'row'
  },
  cardProfileImageContainer:{
    borderRadius:60,
    flex:2,
    alignItems: 'flex-start',
  },
  cardProfileImage:{
    flex:1,
    resizeMode: 'contain',
    width:'100%'
  },
  cardProfileNameContainer:{
    flex:8,
    justifyContent: 'center', 
    alignItems: 'flex-start',
    marginLeft: 4
  },
  cardLikeIconContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardLikeIcon:{
    flex:1
  }
});