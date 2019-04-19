import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';

export default class HomeScreen extends Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
  },
  listContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding:10,
    // borderRadius: 2,
    // borderWidth: 5,
    // borderColor: '#000000',
  }
});