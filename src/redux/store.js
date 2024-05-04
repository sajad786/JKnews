import reducer from './reducers';
import { configureStore } from '@reduxjs/toolkit'
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

// const middleWare = [thunk];

export default configureStore({reducer:reducer});
