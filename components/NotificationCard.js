import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

export function NotificationCard(props) {

  const onNotificationClick = () => {
    props.item.onNotificationClick(props.item.key)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} style={styles.settingTabContainer} onPress={onNotificationClick}>
        <View style={styles.settingsIconContainer}>
          <Ionicons name={Platform.OS==='ios'?props.item.data.iosIcon:props.item.data.androidIcon} size={40} color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}/>
        </View>
        <View style={styles.settingsNameContainer}>
          <Text style={styles.settingsText}>{props.item.data.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff'
  },
  settingTabContainer : {
    height:60,
    flexDirection : 'row',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:16,
  },
  settingsIconContainer:{
    flex:1
  },
  settingsNameContainer:{
    flex:9,
    backgroundColor: '#fff',
    paddingLeft:16
  },
  settingsText:{
    color:'#2196f3',
    fontSize: 16,
    fontWeight: 'bold',
  }
});