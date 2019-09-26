import React, {PureComponent, Fragment} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class CameraRoll extends PureComponent {
  //   upload = async () => {
  //     const storage = firebase.storage();
  //     var count;
  //     var tam;

  //     var chave1 = firebase
  //       .database()
  //       .ref()
  //       .push().key;
  //     for (i = 0; i < this.state.images.length; i++) {
  //       var imge = await fetch(this.state.images[i]);
  //       var blobi = await imge.blob();
  //       var chave = firebase
  //         .database()
  //         .ref()
  //         .push().key;
  //       var ref = storage.ref('imagesImovel/').child(chave + blobi.data.name);
  //       await ref.put(blobi);

  //       storage
  //         .ref('imagesImovel/')
  //         .child(chave + blobi.data.name)
  //         .getDownloadURL()
  //         .then(res => {
  //           this.setState({image: res});
  //           var bname = b64.encode(blobi.data.name);
  //           firebase
  //             .database()
  //             .ref('Imoveis/' + chave1)
  //             .child(chave + bname)
  //             .set(res);
  //         });

  //       alert('publicado');
  //     }
  //   };

  //   delete = async image => {
  //     const imga = await fetch(image);
  //     const blobi = await imga.blob();
  //     storage
  //       .ref('images/' + 'homi')
  //       .child('profile/')
  //       .delete()
  //       .then(res => {
  //         alert('excluida');
  //       });
  //   };
  //   busca = () => {
  //     storage
  //       .ref('images/')
  //       .getDownloadURL()
  //       .then(resp => {
  //         this.setState({images: this.state.images.concat(resp)});
  //       })
  //       .catch(error => {
  //         alert('eros' + JSON.stringify(error));
  //       });
  //   };
  //   imp = () => {
  //     var mo = b64.decode(this.state.images);
  //     alert(mo);
  //   };

  //   batePhoto = () => {
  //     ImagePicker.showImagePicker(options, response => {
  //       console.log('Response = ', response);

  //       if (response.didCancel) {
  //         console.log('User cancelled image picker');
  //       } else if (response.error) {
  //         console.log('ImagePicker Error: ', response.error);
  //       } else if (response.customButton) {
  //         console.log('User tapped custom button: ', response.customButton);
  //       } else {
  //         const source = {uri: response.uri};
  //         let sourc = {
  //           uri: 'data:image/jpeg;base64,' + response.data,
  //         };
  //         // You can also display the image using data:
  //         console.log(response.data);
  //         this.setState({
  //           images: this.state.images.concat(response.uri),
  //         });
  //         //this.setState({ image: { uri: response.uri, base64: response.data } })
  //       }
  //     });
  //   };
  getSelectedImages = images => {
    //pego um vetor de imagens selecionadas
  };
  render() {
    return (
      <Fragment>
        <CameraRollPicker callback={this.getSelectedImages} />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({});
