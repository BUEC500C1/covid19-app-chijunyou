import React, { Component } from 'react';
import {StatusBar, StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, {Callout} from 'react-native-maps';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      TotalConfirmedUS: '',
      TotalDeathsUS: '',


      TotalConfirmedIT: '',
          TotalDeathsIT: '',

      TotalConfirmedCHINA: '',
      TotalDeathsCHINA: '',

      
      TotalConfirmedMEX: '',
      TotalDeathsMEX: '',
 

      TotalConfirmedUK: '',
      TotalDeathsUK: '',


      TotalConfirmedKR: '',
      TotalDeathsKR: '',


      TotalConfirmedAU: '',
      TotalDeathsAU: '',

      TotalConfirmedCA: '',
      TotalDeathsCA: '',

      TotalConfirmedES: '',
      TotalDeathsES: '',




      TotalConfirmedBR: '',
      TotalDeathsBR: '',

      TotalConfirmedRU: '',
      TotalDeathsRU: '',

      



    };
  } 

  componentDidMount() {
    fetch('https://api.covid19api.com/summary')
      .then((response) => response.json())
      .then(responseJson => {
        this.setState({
          TotalConfirmedUS: responseJson['Countries'][236]['TotalConfirmed'],
          TotalDeathsUS: responseJson['Countries'][236]['TotalDeaths'],
        }),


        this.setState({
          TotalConfirmedCHINA: responseJson['Countries'][45]['TotalConfirmed'],
          TotalDeathsCHINA: responseJson['Countries'][45]['TotalDeaths'],
        }),

        this.setState({
          TotalConfirmedMEX: responseJson['Countries'][142]['TotalConfirmed'],
          TotalDeathsMEX: responseJson['Countries'][142]['TotalDeaths'],
        }),

        

        this.setState({
          TotalConfirmedUK: responseJson['Countries'][235]['TotalConfirmed'],
          TotalDeathsUK: responseJson['Countries'][235]['TotalDeaths'],
        }),


        this.setState({
          TotalConfirmedKR: responseJson['Countries'][14]['TotalConfirmed'],
          TotalDeathsKR: responseJson['Countries'][14]['TotalDeaths'],
        }),
        this.setState({
          TotalConfirmedAU: responseJson['Countries'][14]['TotalConfirmed'],
          TotalDeathsAU: responseJson['Countries'][14]['TotalDeaths'],
        }),
        this.setState({
          TotalConfirmedES: responseJson['Countries'][107]['TotalConfirmed'],
          TotalDeathsES: responseJson['Countries'][107]['TotalDeaths'],
        }),
        this.setState({
          TotalConfirmedBR: responseJson['Countries'][30]['TotalConfirmed'],
          TotalDeathsAU: responseJson['Countries'][30]['TotalDeaths'],
        }),
        this.setState({
          TotalConfirmedRU: responseJson['Countries'][181]['TotalConfirmed'],
          TotalDeathsRU: responseJson['Countries'][181]['TotalDeaths'],
        }),


        this.setState({
          TotalConfirmedIT: responseJson['Countries'][108]['TotalConfirmed'],
          TotalDeathsIT: responseJson['Countries'][108]['TotalDeaths'],
        }),

        
        this.setState({
          TotalConfirmedCA: responseJson['Countries'][39]['TotalConfirmed'],
          TotalDeathsCA: responseJson['Countries'][39]['TotalDeaths'],
        });

      console.log(this.state.jsondata);
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <View>
        <MapView style={styles.mapStyle}
          Region={{
            latitude: 104,
            longitude: 104,
            latitudeDelta: 35,
            longitudeDelta: 104,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: 39,
            longitude: -97}}>
              <Callout>
              <Text style = {styles.title}>  United States</Text>
              <Text style = {styles.text}>Confirmed : {this.state.TotalConfirmedUS}</Text>
              <Text style = {styles.text}>Death: {this.state.TotalDeathsUS}</Text>
              
              </Callout>
            </MapView.Marker>


            <MapView.Marker
            coordinate={{latitude: 56,
            longitude: -106}}>
              <Callout>
              <Text style = {styles.title}>  Canada</Text>
              <Text style = {styles.text}>Confirmed: {this.state.TotalConfirmedCA}</Text>
              <Text style = {styles.text}>Death: {this.state.TotalDeathsCA}</Text>
              </Callout>
            </MapView.Marker>

            

            <MapView.Marker
            coordinate={{latitude: 51,
            longitude: 0}}>
              <Callout>
              <Text style = {styles.title}>  United Kingdom</Text>
              <Text style = {styles.text}>Confirmed: {this.state.TotalConfirmedUK}</Text>
              <Text style = {styles.text}>Death: {this.state.TotalDeathsUS}</Text>
              </Callout>
            </MapView.Marker>


            <MapView.Marker
            coordinate={{latitude: 25,
            longitude: -105}}>
              <Callout>
              <Text style = {styles.title}>  Mexico</Text>
              <Text style = {styles.text}>Confirmed: {this.state.TotalConfirmedMEX}</Text>
              <Text style = {styles.text}>Death: {this.state.TotalDeathsMEX}</Text>
              </Callout>
            </MapView.Marker>

            <MapView.Marker
            coordinate={{latitude: -25,
            longitude: 133}}>
              <Callout>
              <Text style = {styles.title}>  Australia</Text>
              <Text style = {styles.text}>Confirmed: {this.state.TotalConfirmedAU}</Text>
              <Text style = {styles.text}>Death: {this.state.TotalDeathsAU}</Text>
              </Callout>
            </MapView.Marker>


            <MapView.Marker
            coordinate={{latitude: 60,
            longitude: 105}}>
              <Callout>
              <Text style = {styles.title}>  Russia</Text>
              <Text style = {styles.text}>Confirmed: {this.state.TotalConfirmedRU}</Text>
              <Text style = {styles.text}>Death: {this.state.TotalDeathsRU}</Text>
              </Callout>
            </MapView.Marker>

            <MapView.Marker
            coordinate={{latitude: 40,
            longitude: 116}}>
              <Callout>
              <Text style = {styles.title}>  China</Text>
              <Text style = {styles.text}>Confirmed: {this.state.TotalConfirmedCHINA}</Text>
              <Text style = {styles.text}>Death: {this.state.TotalDeathsCHINA}</Text>
              </Callout>
            </MapView.Marker>

            <MapView.Marker
            coordinate={{latitude: 40,
            longitude: -3}}>
              <Callout>
              <Text style = {styles.title}>  Spain</Text>
              <Text style = {styles.text}>Confirmed: {this.state.TotalConfirmedES}</Text>
              <Text style = {styles.text}>Death: {this.state.TotalDeathsES}</Text>
              </Callout>
            </MapView.Marker>

            

            <MapView.Marker
            coordinate={{latitude: 43,
            longitude: 11}}>
              <Callout>
              <Text style = {styles.title}>  Italy</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.TotalConfirmedIT}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.TotalDeathsIT}</Text>
              </Callout>
            </MapView.Marker>

            <MapView.Marker
            coordinate={{latitude: -14,
            longitude: -51}}>
              <Callout>
              <Text style = {styles.title}>  SBrazil</Text>
              <Text style = {styles.text}>Total Confirmed Cases: {this.state.TotalConfirmedBR}</Text>
              <Text style = {styles.text}>Total Death Cases: {this.state.TotalDeathsBR}</Text>
              </Callout>
            </MapView.Marker>

            




         
      </MapView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text:{
    color: '#000',
    marginTop: 15,
    padding: 2,
    fontSize: 15,
    textAlign: 'center'

  }
});