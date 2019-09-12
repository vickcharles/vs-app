import React , { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';

interface Props {
	onSubmit: any;
}

export default class LoginForm extends Component<Props,{}> {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
			  <TextInput
				  placeholder="correo"
				  style={styles.input}
				/>
				<TextInput
					placeholder="contraseña"
					secureTextEntry
				  style={styles.input}
				/>
				<TouchableOpacity onPress={this.props.onSubmit} style={styles.buttonContainer}>
					<Text style={styles.buttonText}>ACCEDER</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
    );
  }
};

const styles= StyleSheet.create({
	container: {
		flex: 1,
    padding: 20
	},
	input: {
		backgroundColor: '#f5f5f5',
		marginBottom: 20,
		padding: 14,
		borderRadius: 5,
		borderColor: '#ebeef1',
		borderWidth: 2
	},
	buttonContainer: {
		backgroundColor: 'black',
		paddingVertical: 15,
		borderRadius: 5
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontWeight: '700'
	}
});
