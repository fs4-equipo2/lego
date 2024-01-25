import { action } from "easy-peasy";

export const CarritoModel = {
  productos: [],
  precioTotal: 0,

  
  addProducto: action((state, payload) => {
    state.productos.push({ ...payload });
  }),

  calcularPrecioTotal: action((state, payload) => {
    state.precioTotal += payload;
  }),
};
