import actionTypes from '../store/actionTypes';

const initialState = {
  data: [],
  userName: [],
};

const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case actionTypes.ADD_ARRAY: {
      let temp = { ...state };
      const {
        payload: { data },
      } = action;
      let finalArr = [...temp.data, data];
      return {
        ...temp,
        data: finalArr,
      };
    }
    case actionTypes.GET_USERNAME: {
      return {
        ...state,
        userName: action.payload.data,
      };
    }
    default:
      return state;
  }
};

export default homepageReducer;
