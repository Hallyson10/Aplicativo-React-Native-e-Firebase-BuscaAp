const INITIAL_STATE = {
  cidadeBusca: '',
  latitudeBusca: -5.179976,
  longitudeBusca: -40.6601917,
  resulbusca: [],
};

export default FilterFind = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BUSCAR':
      return {
        ...state,
        resulbusca: action.payload,
      };
    case 'TESTERET':
      return {
        ...state,
      };
    case 'CidadeBusca':
      //alert(action.payload);
      return {
        ...state,
        cidadeBusca: action.payload,
      };
    case 'LongLat':
      return {
        ...state,
        longitudeBusca: action.payload.longitude,
        latitudeBusca: action.payload.latitude,
      };
    //modifica nome
    case 'LIMPABUSCA':
      //alert(action.payload);
      return {
        ...state,
        cidadeBusca: '',
        resulbusca: [],
      };
    default:
      return state;
  }
};
