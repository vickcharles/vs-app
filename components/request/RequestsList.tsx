import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Image,
	Text,
	ListView,
	FlatList  } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class RequestList extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
      dataSource: [
				{
					name: 'Vickler Charles',
					key: '1'
			  },
		    {
					name: 'Juan Rozo',
					key: '2'
			  },
			  {
					name: 'Carolina Ramirez',
					key: '3'
			  }
		  ]
		}
	}

	static navigationOptions = {
		title: 'Nuevas solicitudes',
		headerStyle: {
			backgroundColor: 'black',
		},
		headerTintColor: '#ffffff',
  };


	renderRow = (dataRow) => (
		<TouchableHighlight>
			<View>
			 <Text>{dataRow.name}</Text>
			 </View>
		</TouchableHighlight>
	);

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}: any) =>
				    <TouchableHighlight>
							<View style={styles.card}>
							  <Image
					        style={styles.logo}
					        source={require('../../assets/servicio/transporte-de-carga.png')}
					       />
								 <View style={{marginLeft: 20}}>
							     <Text>{item.name}</Text>
									 <View>
								     <Text>Tipo de servicio:</Text>
									   <Text>Transporte de carga</Text>
									 </View>
								</View>
							</View>
						</TouchableHighlight>
					}
        />
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#f5f5f5'
	},
	card: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		shadowColor: "#000",
		borderRadius: 2,
		marginTop: 20,
		backgroundColor: '#ffffff',
    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
		padding: 20,
	},
	logo: {
		width: 80,
		alignContent: 'center',
		alignItems: 'center',
		height: 70,
	}
});
