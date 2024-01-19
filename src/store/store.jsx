import { createStore, action } from "easy-peasy";
export const store = createStore({
  todos: ["Create store", "Wrap application", "Use store"],

  user: {
    isLoggedIn: false,
    username: "",
  },

  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),

  setUser: action((state, payload) => {
    state.user = { ...payload };
  }),
});
