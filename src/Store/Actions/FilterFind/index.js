import firebase from 'firebase';
export const FilterCidade = cidade => {
  return {
    type: 'CidadeBusca',
    payload: cidade,
  };
};
export const FilterLongLat = longlat => {
  return {
    type: 'LongLat',
    payload: longlat,
  };
};
export const FiltroSexo = arrayPeople => {
  for (let item of arrayPeople) {
    if (item.buscandoEm.cidadeBusca === 'Quixadá' && item.sexo == 'F') {
      //pego o item objt e adiciono em um novo array
    }
  }
};
export const Buscar = cidade => {
  alert('buscando..');
  return dispatch => {
    dispatch({
      type: 'CidadeBusca',
      payload: cidade,
    });
    if (cidade !== '') {
      firebase
        .database()
        .ref('/Timeline/UsersProcurando')
        .child(cidade)
        .on('value', snapshot => {
          let items = [];
          snapshot.forEach(dataSnapshot => {
            let item = dataSnapshot.val();
            item['key'] = dataSnapshot.key;
            items.push(item);
          });
          //Filtro por nome da cidade e apenas mulheres

          //alert(JSON.stringify(items));
          dispatch({
            type: 'BUSCAR',
            payload: items,
          });
        });
    }
  };
};
export const LimpaBusca = () => {
  return {
    type: 'LIMPABUSCA',
  };
};
