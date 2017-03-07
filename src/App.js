import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
	state = { text: 'Hello World!' }
	
	render() {
		return (
			<View>
				<Text>{this.state.text}</Text>
			</View>
		)
	}
}

export default App;