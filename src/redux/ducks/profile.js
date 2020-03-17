// import { dispatch } from '../index';

const SET_NAME = `SET_NAME`;

export const setName = data => ({
  type: SET_NAME,
  data,
});

const initialState = {
  name: 'fattah',
  number: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.data }
    case 'zzzz':
      return state;
    default:
      return state;
  }
}
