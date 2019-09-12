import React, { Component } from 'react';

import {
  TextInput,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  navigation: any;
}

interface State {
  num1: any;
  num2: any;
  resultado: any;
}

export default class UselessTextInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      resultado: 0
    }
  }

  static navigationOptions = {
    title: 'Sumar',
    headerStyle: {
      backgroundColor: '#e6b700',
    },
      headerTintColor: '#fff',
  };

  public sumar = () => {
    if(this.state.num1 && this.state.num2) {
        this.setState({
          resultado: Number(this.state.num1) + Number(this.state.num2),
          num1: '',
          num2: ''
        })
    } else {
      Alert.alert('debe ingresar 2 numeros para sumar')
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
    <>
      <View style={styles.container}>
      <Text style={{marginTop: 40, textAlign: 'center'}}>Sumar 2 numeros</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 2, marginTop: 20, width: 300}}
        onChangeText={(text) => this.setState({...this.state, num1: text})}
        value={this.state.num1}
        placeholder="numero 1"
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 2, marginTop: 20, width: 300}}
        onChangeText={(text) => this.setState({...this.state, num2: text})}
        value={this.state.num2}
        placeholder="numero 2"
      />
      <TouchableOpacity onPress={this.sumar} style={{marginTop: 20}}>
        <View style = {{backgroundColor: '#e6b700', width: 300, height: 40, alignItems: 'center',justifyContent: 'center', borderRadius: 15}}>
           <Text style = {{color: 'white'}}>SUMAR</Text>
        </View>
      </TouchableOpacity>
      <Text style={{textAlign: 'center', fontSize: 20}}>
        Resultado: {this.state.resultado && this.state.resultado}
      </Text>
      </View>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 30,
    paddingRight: 10
  },
});
