import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const BanjaraLogo = require('../../../assets/banjara_logo.png');


export default class SplashScreen extends Component {

  constructor(props) {
		super(props);
		setTimeout(()=>{
			this.handleSearchPress();
		},1500);
	}

	handleSearchPress = () => {
		this.props.navigation.navigate('LoginScreen');
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={BanjaraLogo} style={styles.logo}/>
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
	logo: {
		width: 300,
		height: 130,
	},
});