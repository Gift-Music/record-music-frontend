import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderBar from "../Header.js";
// import { SearchBar } from 'react-native-elements';   // 검색바 관련 모듈


const FourthStack = createStackNavigator();
function FourthStackScreen() {
	return (
		<FourthStack.Navigator>
			<FourthStack.Screen
				name="Fourth"
				component={FourthScreen}
				options={{
					headerTitle: props => <HeaderBar {...props} />
				}}
			/>
			<FourthStack.Screen name="Details" component={DetailsScreen} />
		</FourthStack.Navigator>
	);
}



function FourthScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Fourth screen</Text>
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

export default FourthStackScreen;