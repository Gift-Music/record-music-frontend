import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderBar from "../Header.js";
// import { SearchBar } from 'react-native-elements';   // 검색바 관련 모듈


const SecondStack = createStackNavigator();
function SecondStackScreen() {
	return (
		<SecondStack.Navigator>
			<SecondStack.Screen
				name="Second"
				component={SecondScreen}
				options={{
					headerTitle: props => <HeaderBar {...props} />
				}}
			/>
			<SecondStack.Screen name="Details" component={DetailsScreen} />
		</SecondStack.Navigator>
	);
}



function SecondScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Second screen</Text>
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

export default SecondStackScreen;