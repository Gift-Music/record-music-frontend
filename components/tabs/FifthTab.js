import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderBar from "../Header.js";
// import { SearchBar } from 'react-native-elements';   // 검색바 관련 모듈


const FifthStack = createStackNavigator();
function FifthStackScreen() {
	return (
		<FifthStack.Navigator>
			<FifthStack.Screen
				name="Fifth"
				component={FifthScreen}
				options={{
					headerTitle: props => <HeaderBar {...props} />
				}}
			/>
			<FifthStack.Screen name="Details" component={DetailsScreen} />
		</FifthStack.Navigator>
	);
}



function FifthScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Fifth screen</Text>
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

export default FifthStackScreen;