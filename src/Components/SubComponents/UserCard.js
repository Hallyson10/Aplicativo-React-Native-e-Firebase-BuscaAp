import React, {PureComponent} from 'react';
import {
  Text,
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {Container, Header, Content, Thumbnail} from 'native-base';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class UserCard extends PureComponent {
  state = {
    animatePress: new Animated.Value(1),
    nameUser: '',
    yearUser: '',
    fotoUser: '',
    numberUser: '',
    descriptionUser: '',
    CityOfFindUser: '',
    referenciaOfFind: '',
  };

  AnimateIn = () => {
    Animated.timing(this.state.animatePress, {
      toValue: 0.9,
      duration: 500,
    }).start();
  };

  AnimateOut = () => {
    Animated.timing(this.state.animatePress, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  render() {
    return (
      <View style={{marginRight: 20}}>
        <TouchableWithoutFeedback
          onPress={this.props.onPress}
          onPressIn={this.AnimateIn}
          onPressOut={this.AnimateOut}
          onLongPress={() => {}}>
          <Animated.View
            style={{
              borderRadius: 10,
              elavation: 2,
              height: 280,
              width: 154,
              backgroundColor: '#fff',
              transform: [
                {
                  scale: this.state.animatePress,
                },
              ],
            }}>
            {this.props.item.fotoUser != null ? (
              <ImageBackground
                imageStyle={{borderRadius: 6}}
                style={{
                  height: 190,
                  width: 154,
                  borderRadius: 10,
                  justifyContent: 'flex-end',
                }}
                source={{uri: this.props.item.fotoUser}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 4,
                    borderRadius: 10,
                    backgroundColor: 'rgba(52, 52, 52, 0.2)',
                  }}>
                  <View
                    style={{
                      marginLeft: 10,
                      maxWidth: 90,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text //apenas o p rimeiro nome de usuário
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 15,
                      }}>
                      {this.props.item.nameUser}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginRight: 6,
                      marginBottom: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {this.props.item.fotoUser != null ? (
                      <Thumbnail
                        small
                        source={{uri: this.props.item.fotoUser}}
                      />
                    ) : (
                      <Thumbnail
                        small
                        source={require('../../images/capa.jpg')}
                      />
                    )}
                  </View>
                </View>
              </ImageBackground>
            ) : (
              <ImageBackground
                imageStyle={{borderRadius: 6}}
                style={{
                  height: 190,
                  width: 158,
                  borderRadius: 10,
                  justifyContent: 'flex-end',
                }}
                source={require('../../images/capa.jpg')}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 4,
                    borderRadius: 10,
                    backgroundColor: 'rgba(52, 52, 52, 0.2)',
                  }}>
                  <View
                    style={{
                      marginLeft: 10,
                      maxWidth: 90,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text //apenas o p rimeiro nome de usuário
                      style={{
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 14.5,
                      }}>
                      {this.props.item.nameUser},{this.props.item.idadeUser}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginRight: 6,
                      marginBottom: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {this.props.item.fotoUser != null ? (
                      <Thumbnail
                        small
                        source={{uri: this.props.item.fotoUser}}
                      />
                    ) : (
                      <Thumbnail
                        small
                        source={require('../../images/capa.jpg')}
                      />
                    )}
                  </View>
                </View>
              </ImageBackground>
            )}
            <View
              style={{
                height: 60,
                borderRadius: 6,
                marginTop: 2,
                paddingStart: 4,
                backgroundColor: '#fafafafa',
              }}>
              <Text>Procuro vaga em</Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 16,
                    marginRight: 4,
                    Items: 'center',
                  }}>
                  {this.props.item.buscandoEm.cidadeBusca}
                </Text>
                <View style={{marginTop: 2}}>
                  <Icon name="search-location" size={18} color="blue" />
                </View>
              </View>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

//data do usuario
// <View style={{flex: 1, justifyContent: 'flex-start'}}>
//                   <Text style={{margin: 5}}>{this.props.item.dataBusca} </Text>
//                 </View>
