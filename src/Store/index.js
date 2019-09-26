import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './Reducers/index';
export default Store = createStore(reducers, applyMiddleware(ReduxThunk));
