import React from 'react';
import { FlatList, View} from 'react-native';
import { NotificationCard } from './NotificationCard'

export function NotificationList(props) {  

  onNotificationClicked = (notificationId) => {
    props.onNotificationClicked(notificationId);
  }

  var listData = [];
  props.notificationList.map((notification)=>{
    listData.push({key:notification.id,data:notification,onNotificationClicked:onNotificationClicked})
  });

  return (
    <View>
      <FlatList data={listData} renderItem={({item}) => <NotificationCard item={item}/>}/>
    </View>
  );
}