// import { dispatch } from '../index';

const SET_NAME = `SET_NAME`;

export const setName = data => ({
  type: SET_NAME,
  data,
});
const initialState = {
  name: 'fattah',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.data }
    default:
      return state;
  }
}
