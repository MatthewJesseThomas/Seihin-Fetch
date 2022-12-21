import { createStore } from "vuex";

export default createStore({
  state: {
    products: null
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  
  actions: {
    fetchAllProducts(context) {
      return fetch("https://matthewjessethomas.github.io/Seihin_API/data.json")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setProducts", data.products);
        })
        .catch((err) => console.error(err));
    },
  },
  modules: {

  },
});
