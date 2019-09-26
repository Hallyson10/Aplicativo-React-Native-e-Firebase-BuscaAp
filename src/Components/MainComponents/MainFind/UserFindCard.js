import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
  View,
  FlatList,
  Platform,
  Text,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import UserCard from '../../SubComponents/UserCard';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {UsersFind} from '../../../Store/Actions/UsuarioProcurando/index';

class UserFindCard extends Component {
  state = {
    items: [],
    ito: [],
    limite: 10,
    loading: false,
    refreshing: false,
    longitude: 0,
    latitude: 0,
    error: '',
  };
  UNSAFE_componentWillMount = () => {
    try {
      if (
        this.props.cidade === '' &&
        this.props.buscandoEm.cidadeBusca !== ''
      ) {
        firebase
          .database()
          .ref('/Timeline/UsersProcurando')
          .child(this.props.buscandoEm.cidadeBusca)
          .on('value', snapshot => {
            let items = [];
            snapshot.forEach(dataSnapshot => {
              let item = dataSnapshot.val();
              item['key'] = dataSnapshot.key;
              items.push(item);
            });
            this.setState({items});
          });
      }
    } catch (error) {
      alert(error);
    }
  };
  ViewProfile = (navigation, item) => {
    if (this.props.emailUser === item.emailUser) {
    } else {
      navigation.navigate('FrontProfileUser', {item});
    }
  };

  render() {
    const {navigation} = this.props;
    return (
      <FlatList
        style={{paddingVertical: 10, paddingLeft: 10}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={
          this.props.cidade !== '' ? this.props.resulbusca : this.state.items
        }
        renderItem={({item}) => (
          <UserCard
            item={item}
            onPress={() => this.ViewProfile(navigation, item)}
          />
        )}
      />
    );
  }
}
const mapStateToProps = state => ({
  userFind: state.UsersFind.userFind,
  cidadeBusca: state.Profile.buscandoEm.cidadeBusca,
  resulbusca: state.FilterFind.resulbusca,
  emailUser: state.Profile.emailUser,
  cidade: state.FilterFind.cidadeBusca,
  buscandoEm: state.Profile.buscandoEm,
});
export default connect(
  mapStateToProps,
  {
    UsersFind,
  },
)(UserFindCard);

const styles = StyleSheet.create({});
