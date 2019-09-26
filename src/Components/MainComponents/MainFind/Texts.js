import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
export const TextPeople = props => {
  return (
    <View>
      {props.cidadeBusca === '' ? (
        <View
          style={{
            marginTop: 20,
            paddingLeft: 18,
            marginBottom: 24,
            justifyContent: 'center',
            backgroundColor: '#fcfcfc',
            maxHeight: 64,
            height: 62,
          }}>
          <Text style={{fontSize: 18}}>Ative sua busca por uma moradia</Text>
          <Text style={{fontSize: 12}}>
            Ativando sua busca outras pessoas poderão convidar você!
          </Text>
        </View>
      ) : (
        <View
          style={{
            marginTop: 20,
            paddingLeft: 18,
            marginBottom: 24,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#fcfcfc',
            maxHeight: 64,
            height: 62,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                flexWrap: 'wrap',
                maxWidth: 280,
              }}>
              Pessoas buscando vaga em {props.cidadeBusca}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('AllUsersFind')}>
            <View
              style={{
                marginRight: 20,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                height: 30,
              }}>
              <Text style={{fontSize: 16}}>Ver todos</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export const TextVacance = props => {
  return (
    <View
      style={{
        marginTop: 20,
        paddingLeft: 20,
        marginBottom: 28,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fcfcfc',
        maxHeight: 64,
        height: 62,
      }}>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            flexWrap: 'wrap',
            maxWidth: 280,
          }}>
          Vagas disponíveis em {props.cidadeBusca}
        </Text>
      </View>

      <TouchableOpacity>
        <View
          style={{
            marginRight: 20,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            height: 30,
          }}>
          <Text style={{fontSize: 16}}>Ver todos</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
