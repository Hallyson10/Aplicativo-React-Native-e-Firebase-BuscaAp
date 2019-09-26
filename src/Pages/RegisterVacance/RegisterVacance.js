import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  View,
  Modal,
} from 'react-native';
import AlertPro from 'react-native-alert-pro';
import {FluidNavigator, Transition} from 'react-navigation-fluid-transitions';
import TopUser from '../../Components/RegisterVagas/TopUserProperties';
import AboutLocation from '../../Components/RegisterVagas/AboutLocation';
import AddPostsToPosts from '../../Components/RegisterVagas/AddPostsToPost';
import AboutProperty from '../../Components/RegisterVagas/AboutProperty';
import ButtonsComodies from '../../Components/RegisterVagas/ButtonsComodies';
import DescriptionProperty from '../../Components/RegisterVagas/DescriptionProperty';
import FullProperty from '../../Components/RegisterVagas/FullProperty';
import AboutTheVacancy from '../../Components/RegisterVagas/AboutTheVacancy';
export default class RegisterVacance extends Component {
  close = async () => {
    await this.AlertPro.close();
    this.props.navigation.goBack();
    //this.AlertPro.open() abrir modal
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView>
          <TopUser />
          <AddPostsToPosts navigation={this.props.navigation} />
          <AboutLocation />
          <AboutProperty />
          <AboutTheVacancy />
          <ButtonsComodies />
          <FullProperty />
          <DescriptionProperty />

          <View style={{flex: 1, marginLeft: 20, marginTop: 30}}>
            <TouchableOpacity onPress={() => this.AlertPro.open()}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 26}}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
          <AlertPro
            ref={ref => {
              this.AlertPro = ref;
            }}
            onConfirm={this.close}
            onCancel={() => this.AlertPro.close()}
            title="Cancelar Publicação"
            message="Você tem certeza que deseja sair?"
            textCancel="Não"
            textConfirm="Sim"
            customStyles={{
              mask: {
                backgroundColor: 'transparent',
              },
              container: {
                borderWidth: 1,
                borderColor: '#fcfcfc',
                shadowColor: '#000000',
                shadowOpacity: 0.5,
                shadowRadius: 10,
              },
              buttonCancel: {
                backgroundColor: '#4da6ff',
              },
              buttonConfirm: {
                backgroundColor: '#ffa31a',
              },
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    marginTop: 120,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#4EB151',
    paddingVertical: 11,
    paddingHorizontal: 17,
    borderRadius: 3,
    marginBottom: 15,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
