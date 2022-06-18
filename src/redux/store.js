import reducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// console.log(thunk, 'thunk');

const middleWare = [thunk];

export default createStore(reducer, applyMiddleware(...middleWare));
