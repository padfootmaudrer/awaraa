import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Toolbar } from '../components/Toolbar';
import { NotificationList } from '../components/NotificationList';

export default function NotificationsScreen() {

  onNotificationClicked = (notificationId) => {console.log("Selected Notification ",notificationId)}

  var notificationList = [
    {id:'1',heading:'Hi this is your dummy notificationsfications',subHeading:'ios-notifications-outline',timestamp:'md-notifications-outline'},
    {id:'2',heading:'Hi this is your dummy notificationsral',subHeading:'ios-settings',timestamp:'md-settings'},
    {id:'3',heading:'Hi this is your dummy notificationsunt',subHeading:'ios-person',timestamp:'md-person'},
    {id:'4',heading:'Hi this is your dummy notificationsacy',subHeading:'ios-lock',timestamp:'md-lock'},
    {id:'5',heading:'Hi this is your dummy notificationsk',subHeading:'ios-remove-circle-outline',timestamp:'md-remove-circle-outline'},
    {id:'6',heading:'Hi this is your dummy notifications',subHeading:'ios-help-circle-outline',timestamp:'md-help-circle-outline'}
  ];

  return (
    <View style={styles.container}>
      <NotificationList notificationList={notificationList} onNotificationClicked={onNotificationClicked} />
    </View>
  );
}

NotificationsScreen.navigationOptions = {
  headerTitle: <Toolbar>Notifications</Toolbar>,
  headerStyle: {backgroundColor: '#2196f3'}
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff'
  }
});