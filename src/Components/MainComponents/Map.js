import React, {PureComponent} from 'react';
import {Text, StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import MapView, {AnimatedRegion, Animated} from 'react-native-maps';
import {PermissionsAndroid} from 'react-native';
import TestMap from '../SubComponents/TestMap';
const {height, width} = Dimensions.get('window');
import {connect} from 'react-redux';
class Mapi extends PureComponent {
  state = {
    error: '',
  };
  UNSAFE_componentWillMount = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message:
            'Maps App needs access to your map ' + 'so you can be navigated.',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {}
  };

  componentDidMount = () => {
    const {latitudeBusca, longitudeBusca} = this.props;
    this.mapView.animateCamera(
      {
        latitude: latitudeBusca,
        longitude: longitudeBusca,
      },
      0,
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <MapView
          ref={map => (this.mapView = map)}
          style={styles.mapView}
          rotateEnabled={true}
          showsCompass
          showsScale
          scrollEnabled={true}
          showsMyLocationButton
          zoomEnabled={true}
          showsPointsOfInterest={false}
          showsBuildings={false}
          region={{
            latitude: this.props.latitudeBusca,
            longitude: this.props.longitudeBusca,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          initialRegion={{
            latitude: this.props.latitudeBusca,
            longitude: this.props.longitudeBusca,
            latitudeDelta: 0.09,
            longitudeDelta: 0.05,
          }}>
          <MapView.Marker
            key={this.props.longitudeBusca}
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={{
              longitude: this.props.longitudeBusca,
              latitude: this.props.latitudeBusca,
              latitudeDelta: 0.1005,
              longitudeDelta: 0.1005,
            }}
          />
        </MapView>
        <TestMap onPress={() => this.props.navigation.navigate('Nav')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  placesContainer: {
    maxHeight: 220,
    marginBottom: 8,
    width: '100%',
  },
  place: {
    maxHeight: 220,
    backgroundColor: '#fcfcfc',
    width: width - 40,
    maxHeight: 220,
    marginHorizontal: 20,
  },
  testeplace: {
    width: width - 10,
    maxHeight: 220,
    height: 220,
    backgroundColor: 'blue',
    marginHorizontal: 6,
  },
});
const mapStateToProps = state => ({
  longitudeBusca: state.FilterFind.longitudeBusca,
  latitudeBusca: state.FilterFind.latitudeBusca,
  cidade: state.FilterFind.cidadeBusca,
});
export default connect(
  mapStateToProps,
  {},
)(Mapi);
