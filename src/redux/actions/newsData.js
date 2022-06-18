import {API_BASE_URL} from '../../config/urls';
import {apiGet} from '../../utils/utils';
import types from '../types';
import store from '../store';
const {dispatch} = store;
export const newsDataHeading = async data => {
  let res = await apiGet(API_BASE_URL);
  console.log(res, 'ressss>>>');
  // dispatch({
  //   type: types.NEWSDATAHEADING,
  //   payload: res,
  // });
};
