import { action } from "easy-peasy";

export const UserModel = {
  user: {
    isLoggedIn: false,
    username: "",
  },

  setUser: action((state, payload) => {
    state.user = { ...payload };
  }),
};
