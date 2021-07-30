export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { log: true, authKey: action.authKey };

    case "logout":
      return { log: false };

    default:
      return state;
  }
};
