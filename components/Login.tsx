import React , { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component<any, {}> {
	static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#ffd15c',
    },
      headerTintColor: 'black',
	};

  render() {
		const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
			  <View style={styles.logoContainer}>
					<Image
					  style={styles.logo}
					  source={require('../assets/logo.png')}
					/>
		  	</View>
        <LoginForm
				  onSubmit={() => navigate('RequestsList', {name: 'Jane'})}
				/>
			</View>
    );
  }
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffd15c'
	},
	logoContainer: {
		alignItems: 'center',
		flex: 0.7,
		justifyContent: 'center'
	},
	logo: {
		width: 200,
		height: 120
	}
});
