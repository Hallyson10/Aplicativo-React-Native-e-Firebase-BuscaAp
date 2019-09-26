import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {TextInput, HelperText} from 'react-native-paper';

export default class Map extends Component {
  render() {
    return (
      <View style={{height: 188, maxHeight: 400, backgroundColor: '#ffffff'}}>
        <GooglePlacesAutocomplete
          placeholder="Ex: Rio de Janeiro"
          minLength={2} // minimum length of text to search
          autoFocus={false}
          powered={null}
          style={{
            backgroundColor: '#fcfcfc',
            shadowColor: 'black',
            padding: 5,
            maxHeight: 180,
            marginLeft: 20,
            marginRight: 20,
          }}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            //.address_components[0].long_name) cidade
            const lat = details.geometry.location.lat;
            const long = details.geometry.location.lng;
            const cidade = details.address_components[0].long_name;
            alert(cidade);
          }}
          getDefaultValue={() => ''}
          query={{
            key: 'AIzaSyDxDgoVgEgGD-GoheR8YYguquuhxl6fsJY',
            language: 'pt-BR',
            location: 'lat, Lon',
            radius: '4850 ', //4 km
            components: 'country:br',
            //strictbounds: true,
          }}
          styles={{
            textInputContainer: {
              marginTop: 16,
              alignItems: 'center',
              height: 54,
              marginRight: 10,
              marginLeft: 10,
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth: 0,
            },
            textInput: {
              marginLeft: 10,
              marginRight: 10,
              padding: 5,
              elevation: 3,
              shadowColor: 'black',
              height: 54,
              color: '#5d5d5d',
              fontSize: 16,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
          currentLocationLabel="Current location"
          nearbyPlacesAPI="AIzaSyDxDgoVgEgGD-GoheR8YYguquuhxl6fsJY" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          GoogleReverseGeocodingQuery={
            {
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }
          }
          GooglePlacesSearchQuery={{
            // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
            rankby: 'distance',
            type: 'cafe',
          }}
          GooglePlacesDetailsQuery={{
            // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
            fields: 'formatted_address',
          }}
          filterReverseGeocodingByTypes={[
            'locality',
            'administrative_area_level_3',
          ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
          debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          // renderLeftButton={() => (
          //   <Text style={{marginLeft: 10, marginRight: 10, fontSize: 16}}>
          //     Voltar
          //   </Text>
          // )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
