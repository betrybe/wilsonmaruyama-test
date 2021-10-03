// Esse reducer será responsável por tratar as informações da pessoa usuária

const userReducer = (state, action) => {
  switch (action.type) {
  case 'login':
    state.value = action.payload;
    return state.value;
  case 'logout':
    state.value = null;
    return state.value;
  default:
    return state;
  }
};

export default userReducer;
