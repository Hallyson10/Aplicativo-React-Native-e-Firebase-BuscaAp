import React, {PureComponent} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Modal,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Geolocation from '@react-native-community/geolocation';

import {StackActions, NavigationActions} from 'react-navigation';
import firebase from 'firebase';
import b64 from 'base-64';
import {User} from '../Store/Actions/Usuario/Profile';
import {connect} from 'react-redux';
class VerificationUser extends PureComponent {
  state = {
    modalVisible: false,
    text: 'Carregando...',
    isConnected: true,
    initialPosition: 'unknown',
    lastPosition: 'unknown',
  };
  UNSAFE_componentWillMount = async () => {
    try {
      await firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          //alert(user.email); ok
          var emailb64 = await b64.encode(user.email);
          //alert(emailb64);ok
          await firebase
            .database()
            .ref('Users/')
            .child(emailb64)
            .on('value', async snapshot => {
              await this.props.User(snapshot.val());
              if (snapshot.val() !== null) {
                //this.setState({modalVisible: false});
                this.props.navigation.navigate('Main');
              } else {
                //this.setState({modalVisible: true});
              }
            });
        } else {
          this.props.navigation.navigate('Initial');
        }
      });
    } catch (error) {
      alert('Ocorreu um erro inesperado!');
    }
  };
  handleConnectivityChange = isConnected => {
    this.setState({isConnected});
  };
  componentDidMount = async () => {
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
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#6a51ae',
        }}>
        <Text style={styles.text}>Carregando...</Text>
        <Modal
          animationType={'slide'}
          transparent
          visible={this.state.modalVisible}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.modal}>
              <Text style={styles.text}>Carregando...</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  {
    User,
  },
)(VerificationUser);

const styles = StyleSheet.create({
  modal: {
    height: '20%',
    borderRadius: 30,
    width: '80%',
    backgroundColor: '#6a51ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fafafa',
  },
});
