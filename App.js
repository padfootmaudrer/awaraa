import React from 'react';
import {StatusBar, Platform, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LandingScreen from './src/apps/SplashScreen';
import LoginScreen from './src/apps/LoginScreen';
import HomeScreen from './src/apps/HomeScreen';

export default class App extends React.Component {
	
	render() {
		return (
			<View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight }}>
				<RootNavigator />
			</View>
		);
	}
}

const RootNavigator = createStackNavigator(
	{
		SplashScreen: {
			screen: LandingScreen,
			navigationOptions: () => ({
				header: null,
			}),
    },
    LoginScreen: {
			screen: LoginScreen,
			navigationOptions: () => ({
				title: 'Login',
				headerStyle:{
					marginTop: Platform.OS === 'ios' ? 0 : -StatusBar.currentHeight,
				},
			}),
    },
    HomeScreen: {
			screen: HomeScreen,
			navigationOptions: () => ({
				title: 'Trips',
				headerStyle:{
					marginTop: Platform.OS === 'ios' ? 0 : -StatusBar.currentHeight,
				},
			}),
		}
	},
	{
		initialRouteName: 'SplashScreen',
	}
);