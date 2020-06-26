const initialState = {
  loading: false,
  user: {email: 'test@test.com', password: '123456', authenticated: false},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_ASYNC':
      return {...state, authenticated: true};
    default:
      return state;
  }
};
