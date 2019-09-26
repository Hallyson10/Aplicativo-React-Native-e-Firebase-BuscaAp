import React, {Component} from 'react';

import {
  View,
  TextComponent,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import UserFindCard from './UserFindCard';
import {
  Banner,
  Avatar,
  Searchbar,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import {connect} from 'react-redux';
import FindVacance from './FindVacance';
import {TextPeople, TextVacance} from './Texts';
class Find extends Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <TextPeople
          cidadeBusca={
            this.props.cidadeBusca !== '' &&
            this.props.cidadeBusca !== this.props.buscandoEm.cidadeBusca
              ? this.props.cidadeBusca
              : this.props.buscandoEm.cidadeBusca
          }
          navigation={this.props.navigation}
        />
        <View style={{height: 280}}>
          {this.props.cidadeBusca === '' &&
          this.props.buscandoEm.cidadeBusca === '' ? (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('UsersFind')}>
              <View
                style={{
                  marginHorizontal: 16,
                  elevation: 1,
                  borderColor: '#000000',
                  height: 260,
                  justifyContent: 'center',
                  borderWidth: 0.8,
                  borderRadius: 6,
                  alignItems: 'center',
                }}>
                <Text>Ativar minha busca por moradia</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <UserFindCard navigation={this.props.navigation} />
          )}
        </View>
        <TextVacance
          navigation={this.props.navigation}
          cidadeBusca={this.props.buscandoEm.cidadeBusca}
        />
        <View style={{flex: 1, paddingVertical: 20}}>
          <FindVacance />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  buscandoEm: state.Profile.buscandoEm,
  cidadeBusca: state.FilterFind.cidadeBusca,
});
export default connect(
  mapStateToProps,
  {},
)(Find);
