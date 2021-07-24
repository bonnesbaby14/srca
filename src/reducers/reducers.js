export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { log: true };

    case "logout":
      return { log: false };

    default:
      return state;
  }
};
