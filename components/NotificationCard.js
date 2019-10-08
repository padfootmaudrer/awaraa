import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function NotificationCard(props) {

  const onNotificationClicked = () => {
    props.item.onNotificationClicked(props.item.key)
  }

  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.notificationCardContainer} onPress={onNotificationClicked}>
      <View style={styles.notificationHeaderContainer}>
        <Text style={styles.notificationHeaderText}>{props.item.data.heading}</Text>
      </View>
      <View style={styles.notificationDetailContainer}>
        <Text style={styles.notificationDetailText}>{props.item.data.subHeading}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  notificationCardContainer : {
    height:108,
    justifyContent:'center',
    paddingTop:8,
    paddingLeft:16,
    paddingRight:16,
    paddingBottom:4,
    borderRightWidth:0.1,
    borderLeftWidth:0.1,
    borderBottomWidth:0.1,
    borderWidth:0.05,
    elevation:2,
    marginTop:8,
    marginBottom:2
  },
  notificationHeaderContainer:{
    flex:2,
  },
  notificationDetailContainer:{
    flex:8,
    marginTop:8
  },
  notificationHeaderText:{
    color:'#2196f3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationDetailText:{
    color:'#2196f3',
    fontSize: 12
  }
});