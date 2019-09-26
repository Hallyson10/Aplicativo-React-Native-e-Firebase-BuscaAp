import React from 'react';

import {View, Image} from 'react-native';

import {Avatar} from 'react-native-paper';

const ProfileUser = props => {
  return (
    <View>
      <Avatar.Image
        style={{backgroundColor: '#fff'}}
        size={120}
        source={{uri: props.fotoUser}}
      />
    </View>
  );
};

export default ProfileUser;
