import React, {PureComponent} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {
  FilterCidade,
  FilterLongLat,
  Buscar,
} from '../../Store/Actions/FilterFind/index';

import {connect} from 'react-redux';

class TestInput extends PureComponent {
  Repasse = async (data, details) => {
    const latitude = details.geometry.location.lat;
    const longitude = details.geometry.location.lng;
    const cidade = details.address_components[0].long_name;
    await this.props.Buscar(cidade);
    await this.props.FilterLongLat({latitude, longitude});
    this.props.onPress();
  };
  render() {
    return (
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Cidade"
          minLength={2} // minimum length of text to search
          autoFocus={true}
          powered={null}
          style={{
            backgroundColor: '#fcfcfc',
            marginTop: 20,
            elevation: 3,
            shadowColor: 'black',
            padding: 5,
            maxHeight: 180,
            marginLeft: 10,
            marginRight: 10,
          }}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
          listViewDisplayed="auto" // true/false/undefined
          fetchDetails={true}
          renderDescription={row => row.description} // custom description render
          onPress={(data, details) =>
            setTimeout(() => {
              this.Repasse(data, details);
            }, 0)
          }
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
              marginTop: 30,
              alignItems: 'center',
              height: 54,
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth: 0,
            },
            textInput: {
              marginLeft: 10,
              padding: 5,
              elevation: 3,
              shadowColor: 'black',
              marginRight: 10,
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
          //   <TouchableOpacity onPress={this.props.onPress}>
          //     <View
          //       style={{
          //         marginLeft: 10,
          //         marginRight: 5,
          //         alignItems: 'center',
          //         justifyContent: 'center',
          //       }}>
          //       <Text style={{fontSize: 16}}>Voltar</Text>
          //     </View>
          //   </TouchableOpacity>
          // )}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  {
    FilterCidade,
    Buscar,
    FilterLongLat,
  },
)(TestInput);
