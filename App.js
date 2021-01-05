import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 하단 탭에 들어갈 컴포넌트들
import FirstStackNavigator from './components/tabs/FirstTab.js';
import SecondStackScreen from "./components/tabs/SecondTab.js";
import ThirdStackScreen from "./components/tabs/ThirdTab.js";
import FourthStackScreen from "./components/tabs/fourthTab.js";
import FifthStackScreen from "./components/tabs/FifthTab.js";


// App()
export default function App() {
	return (
		<>
			<NavigationContainer>
				<MyTabs />
			</NavigationContainer >
		</>
	);
};



// 하단 네비게이션
const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="First"
				component={FirstStackNavigator}
				options={{
					tabBarLabel: 'First',
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ width: 24, height: 24 }}
							source={require('./images/image6.png')}
						/>
					),
				}}
			/>
			<Tab.Screen name="Second" component={SecondStackScreen}
				options={{
					tabBarLabel: 'Second',
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ width: 24, height: 24 }}
							source={require('./images/image6.png')}
						/>
					),
				}}
			/>
			<Tab.Screen name="Third" component={ThirdStackScreen}
				options={{
					tabBarLabel: 'Third',
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ width: 24, height: 24 }}
							source={require('./images/image6.png')}
						/>
					),
				}}
			/>
			<Tab.Screen name="Fourth" component={FourthStackScreen}
				options={{
					tabBarLabel: 'Fourth',
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ width: 24, height: 24 }}
							source={require('./images/image6.png')}
						/>
					),
				}}
			/>
			<Tab.Screen name="Fifth" component={FifthStackScreen}
				options={{
					tabBarLabel: 'Fifth',
					tabBarIcon: ({ color, size }) => (
						<Image
							style={{ width: 24, height: 24 }}
							source={require('./images/image6.png')}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = {

}