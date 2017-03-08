import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button } from './components/common';

class App extends Component {
	
	render() {
		return (
			<View>
				<Header headerText={'testing'}/>
			</View>
		);
	};
}

export default App;
