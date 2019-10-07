import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Toolbar(props) {
  return (
    <View style={styles.container}>
      <Text {...props} style={styles.textContainer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  }
});