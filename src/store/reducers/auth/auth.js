const initialState = {
  loading: false,
  user: {email: 'test@test.com', password: '123456'},
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
