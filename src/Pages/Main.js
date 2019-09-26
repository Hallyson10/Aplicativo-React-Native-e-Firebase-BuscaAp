import React, {Component} from 'react';
import {
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  View,
  ScrollView,
  BackHandler,
} from 'react-native';
import Find from '../Components/MainComponents/MainFind/Find';
import {SearchBar} from 'react-native-elements';

import {
  Banner,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import {Buscar, LimpaBusca} from '../Store/Actions/FilterFind/index';
import UserFindCard from '../Components/MainComponents/MainFind/UserFindCard';

import {FluidNavigator, Transition} from 'react-navigation-fluid-transitions';
import firebase from 'firebase';
import {connect} from 'react-redux';
class Main extends Component {
  static navigationOptions = {
    title: 'BuscaAp',
    headerStyle: {
      backgroundColor: '#7D44FF',
    },
    headerTintColor: '#7D44FF',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  state = {
    items: [],
    visible: true,
    verify: true,
    firstQuery: '',
  };
  Redirect = async () => {
    this.props.navigation.navigate('ConfirmEmail');
  };
  // UNSAFE_componentWillMount = async () => {
  //   await this.setState({items: []});
  //   await firebase
  //     .database()
  //     .ref('/Timeline/UsersProcurando')
  //     .on('value', snapshot => {
  //       let items = [];
  //       snapshot.forEach(dataSnapshot => {
  //         let item = dataSnapshot.val();
  //         item['key'] = dataSnapshot.key;
  //         items.push(item);
  //         //this.props.UsersFind(item);
  //       });
  //       //alert(JSON.stringify(items));
  //       this.setState({items});
  //     });
  // };
  componentDidMount = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      if (user.emailVerified) {
        this.setState({verify: false});
      }
    }
  };
  propaganda = () => {
    let imgs = [
      {uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4'},
    ];
    setInterval(() => {
      return <Image source={imgs[0]} />;
    }, 3000);
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
          }}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          {!this.state.user ? (
            <Banner
              visible={this.state.verify}
              actions={[
                {
                  label: 'Ignorar',
                  onPress: () => this.setState({verify: false}),
                },
                {
                  label: 'Confirmar email',
                  onPress: this.Redirect,
                },
              ]}
              image={({size}) => (
                <Image
                  source={{
                    uri:
                      'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
                  }}
                  style={{
                    width: size,
                    height: size,
                  }}
                />
              )}>
              Confirme seu email agora para utilizar as funcionalidades
              principais do BuscaAp
            </Banner>
          ) : null}

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                height: 120,
                backgroundColor: '#fafafafa',
              }}>
              <Image
                // resizeMode="contain"
                style={{height: 120, width: '100%'}}
                source={require('../images/prop.jpg')}
              />
            </View>
            <SearchBar
              inputContainerStyle={{
                backgroundColor: '#fff',
                margin: 10,
                elevation: 1.2,
                borderColor: '#fff',
                height: 54,
              }}
              containerStyle={{
                backgroundColor: '#fcfcfc',
                borderColor: '#fff',
                borderWidth: 0,
              }}
              placeholder="Buscar por Cidade"
              onClear={this.props.LimpaBusca}
              onFocus={() =>
                this.props.navigation.navigate('Map', () =>
                  this.props.navigation.navigate('Nav'),
                )
              }
              value={this.props.cidade}
            />
            <Find navigation={this.props.navigation} />
            <View
              style={{
                height: 140,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={{marginBottom: 40}}>@GranSoftwares</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  userFind: state.UsersFind.userFind,
  emailUser: state.Profile.emailUser,
  cidadeBusca: state.Profile.buscandoEm.cidadeBusca,
  resulbusca: state.FilterFind.resulbusca,
  cidade: state.FilterFind.cidadeBusca,
  oldFind: state.Profile.oldFind,
});
export default connect(
  mapStateToProps,
  {
    Buscar,
    LimpaBusca,
  },
)(Main);
const styles = StyleSheet.create({});
