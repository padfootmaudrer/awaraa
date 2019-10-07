import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Toolbar } from '../components/Toolbar';
import { SettingsList } from '../components/SettingsList';

export default function SettingsScreen() {

  onSettingsOptionClicked = (settingId) => {console.log("Selected Setting ",settingId)}

  var settingsList = [
    {id:'1',name:'Notifications',iosIcon:'ios-notifications-outline',androidIcon:'md-notifications-outline'},
    {id:'2',name:'General',iosIcon:'ios-settings',androidIcon:'md-settings'},
    {id:'3',name:'Account',iosIcon:'ios-person',androidIcon:'md-person'},
    {id:'4',name:'Privacy',iosIcon:'ios-lock',androidIcon:'md-lock'},
    {id:'5',name:'Block',iosIcon:'ios-remove-circle-outline',androidIcon:'md-remove-circle-outline'},
    {id:'6',name:'Help',iosIcon:'ios-help-circle-outline',androidIcon:'md-help-circle-outline'}
  ];

  return (
    <View style={styles.container}>
      <SettingsList settingsList={settingsList}/>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  headerTitle: <Toolbar>Settings</Toolbar>,
  headerStyle: { backgroundColor: '#2196f3'}
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff'
  }
});