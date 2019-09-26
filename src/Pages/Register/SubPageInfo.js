import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Content, DatePicker, Text, Radio} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RadioButton} from 'react-native-paper';
import Header from '../../Components/Register/Header';
import {connect} from 'react-redux';
import {
  modificaSexo,
  modificaData,
  modificaIdade,
} from '../../Store/Actions/Usuario/Profile';
class SubPageInfo extends Component {
  state = {
    chosenDate: new Date(1996, 1, 1),
    Masculino: false,
    Feminino: false,
  };
  idade = () => {
    var ano_aniversario = this.props.dataNascUser.ano;
    var mes_aniversario = this.props.dataNascUser.mes + 1;
    var dia_aniversario = this.props.dataNascUser.dia;
    var d = new Date(),
      ano_atual = d.getFullYear(),
      mes_atual = d.getMonth() + 1,
      dia_atual = d.getDate(),
      ano_aniversario = +ano_aniversario,
      mes_aniversario = +mes_aniversario,
      dia_aniversario = +dia_aniversario,
      quantos_anos = ano_atual - ano_aniversario;

    if (
      mes_atual < mes_aniversario ||
      (mes_atual == mes_aniversario && dia_atual < dia_aniversario)
    ) {
      quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
  };
  setDate = newDate => {
    //this.setState({chosenDate: newDate});
    const date = {
      ano: newDate.getFullYear(),
      mes: newDate.getMonth(),
      dia: newDate.getDate(),
    };
    this.props.modificaData(date);
  };
  setSexoMas = async () => {
    if (this.state.Masculino) {
      this.setState({Feminino: true, Masculino: false});
      await this.props.modificaSexo('F');
    } else {
      this.setState({Feminino: false, Masculino: true});
      await this.props.modificaSexo('M');
    }
  };
  setSexoFem = async () => {
    if (this.state.Feminino) {
      this.setState({Feminino: false, Masculino: true});
      await this.props.modificaSexo('M');
    } else {
      this.setState({Feminino: true, Masculino: false});
      await this.props.modificaSexo('F');
    }
  };

  render() {
    var idade = this.idade();
    this.props.modificaIdade(idade);
    const {Feminino, Masculino} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header
          back="#fcfcfc"
          color="#6a51ae"
          onPressL={() => {
            this.props.navigation.goBack();
          }}
          nameR="Próximo"
          onPressR={() => {
            this.props.navigation.navigate('AddPhoto');
          }}
        />
        <View style={{flex: 1}}>
          <View style={{marginTop: 20, marginBottom: 20}}>
            <Text
              style={{alignSelf: 'flex-start', marginLeft: 22, fontSize: 20}}>
              Quando você nasceu?
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <DatePicker
              defaultDate={new Date(1998, 1, 1)}
              minimumDate={new Date(1900, 1, 31)}
              maximumDate={new Date(20100, 1, 31)}
              locale={'br'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'calendar'}
              placeHolderText={<Icon name="calendar-alt" size={20} />}
              textStyle={{color: 'green', fontSize: 28}}
              placeHolderTextStyle={{color: '#d3d3d3'}}
              onDateChange={this.setDate}
              disabled={false}
            />
            <View style={{width: '100%', alignItems: 'center'}}>
              <Text>Sua idade é: {this.props.idadeUser} </Text>
            </View>
          </View>
          <View style={{marginLeft: 20, marginTop: 40}}>
            <Text style={{fontSize: 20}}> Sexo </Text>
            <TouchableOpacity onPress={() => this.setSexoFem()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  marginBottom: 10,
                }}>
                <Radio
                  style={{marginEnd: 8}}
                  selected={this.props.sexo === 'F'}
                  uncheckedColor="blue"
                  status={Feminino === true ? 'checked' : 'unchecked'}
                  onPress={() => this.setSexoFem()}
                />
                <Text>Feminino</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setSexoMas()}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Radio
                  style={{marginEnd: 8}}
                  selected={this.props.sexo === 'M'}
                  onPress={() => this.setSexoMas()}
                />
                <Text>Masculino</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  dataNascUser: state.Profile.dataNascUser,
  idadeUser: state.Profile.idadeUser,
  sexo: state.Profile.sexo,
});
export default connect(
  mapStateToProps,
  {
    modificaSexo,
    modificaData,
    modificaIdade,
  },
)(SubPageInfo);
const styles = StyleSheet.create({});
