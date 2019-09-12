import * as React from 'react';

import {
  TextInput,
  Text,
	Button,
	Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
  View
} from 'react-native';

interface Props {
  navigation: any;
}

class HomePage extends React.Component<Props, {}> {
    static navigationOptions = {
			title: 'Politecnico Internacional',
			headerStyle: {
				backgroundColor: '#1154a1',
			},
			headerTintColor: '#fff',
    };

    render() {
      const { navigate } = this.props.navigation;

      return (
        <View style={styles.container}>
				  <Image style={{width: 120, height: 120}} source={require('../assets/poli-logo.png')} />
          <Text style={{marginTop: 40, textAlign: 'center'}}>ELIGE UNA OPERACION</Text>
          <TouchableOpacity onPress={() => navigate('Profile', {name: 'Jane'})} style={{marginTop: 20}}>
            <View style={{backgroundColor: '#e6b700', width: 300, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 15}}>
              <Text style={{color: 'white'}}>SUMAR</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('Restar', {name: 'Jane'})} style={{marginTop: 20}}>
            <View style={{backgroundColor: '#db5f4d', width: 300, height: 40, alignItems: 'center',justifyContent: 'center', borderRadius: 15}}>
              <Text style={{color: 'white'}}>RESTAR</Text>
            </View>
          </TouchableOpacity>
					<TouchableOpacity onPress={() => navigate('GuardarDatos', {name: 'Jane'})} style={{marginTop: 20}}>
            <View style={{backgroundColor: 'grey', width: 300, height: 40, alignItems: 'center',justifyContent: 'center', borderRadius: 15}}>
              <Text style={{color: 'white'}}>GUARDAR DATOS</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 30,
    paddingRight: 10
  },
});
