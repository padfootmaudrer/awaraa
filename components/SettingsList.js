import React from 'react';
import { FlatList, View} from 'react-native';
import { SettingsTab } from './SettingsTab'

export function SettingsList(props) {  
  onSettingChosen = (settingsId) => {console.log("Selected setting ",settingsId)}

  var listData = [];
  props.settingsList.map((setting)=>{
    listData.push({key:setting.id,data:setting,onSettingsOptionChosen:onSettingChosen})
  });

  return (
    <View>
      <FlatList data={listData} renderItem={({item}) => <SettingsTab item={item}/>}/>
    </View>
  );
}