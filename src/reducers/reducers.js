export const AuthReducer = (state, action) => {
  switch (action) {
    case "login":
      return { log: true };

    case "logout":
      return { log: false };

    default:
      return state;
  }
};
