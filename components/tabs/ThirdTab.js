import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderBar from "../Header.js";
// import { SearchBar } from 'react-native-elements';   // 검색바 관련 모듈


const ThirdStack = createStackNavigator();
function ThirdStackScreen() {
	return (
		<ThirdStack.Navigator>
			<ThirdStack.Screen
				name="Third"
				component={ThirdScreen}
				options={{
					headerTitle: props => <HeaderBar {...props} />
				}}
			/>
			<ThirdStack.Screen name="Details" component={DetailsScreen} />
		</ThirdStack.Navigator>
	);
}



function ThirdScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Third screen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate('Details')}
			/>
		</View>
	);
}


function DetailsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Details!</Text>
		</View>
	);
}

const styles = StyleSheet.create({

});

export default ThirdStackScreen;