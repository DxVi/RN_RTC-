export const initialState = {
  user: null,
  fullname: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
        fullname: action.fullname,
      };

    default:
      return state;
  }
};

export default reducer;
