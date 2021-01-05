import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function HeaderBar() {
	return (

		<View style={{
			flex: 1,
			justifyContent: 'space-between',
			alignContent: "center",
			flexDirection: 'row',
		}}>
			<Image
				style={{ width: 32, height: 32 }}
				source={require('../images/image6.png')}
			/>
			<Text>asdfasdfasdf</Text>
			<TouchableOpacity onPress={() => alert('This is a button!')}>
				<Image
					style={{ width: 32, height: 32 }}
					source={require('../images/image6.png')}
				/>
			</TouchableOpacity>
		</View>
	);
}


export default HeaderBar;