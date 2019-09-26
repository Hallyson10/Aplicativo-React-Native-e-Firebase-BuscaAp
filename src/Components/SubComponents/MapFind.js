import React, {PureComponent} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import TestMap from './TestMap';
import MapView, {AnimatedRegion, Animated} from 'react-native-maps';
import {connect} from 'react-redux';
const {height, width} = Dimensions.get('window');
class MapFind extends PureComponent {
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
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{margin: 20}}>
          <Text style={{fontSize: 24}}>
            Você quer uma moradia em qual cidade?
          </Text>
          <Text>Ex: São Paulo</Text>
        </View>
        <TestMap onPress={() => this.props.navigation.navigate('UsersFind')} />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  longitudeBusca: state.FilterFind.longitudeBusca,
  latitudeBusca: state.FilterFind.latitudeBusca,
  cidade: state.FilterFind.cidadeBusca,
});
export default connect(
  mapStateToProps,
  {},
)(MapFind);
const styles = StyleSheet.create({});
