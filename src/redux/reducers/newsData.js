import types from '../types';

const initial_state = {
  newsData: [],
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.NEWSDATAHEADING:
      return {
        ...state,
        newsData: [...state.newsData, ...action.payload],
      };
    default:
      return {...state};
  }
}
