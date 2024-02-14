import { action } from "easy-peasy";

export const CarritoModel = {
  productos: [],
  precioTotal: 0,


  addProducto: action((state, payload) => {
    const uid = payload.uid;
    let duplicado = state.productos.filter(producto => producto.uid === uid);
    if(duplicado.length == 1 ){
      duplicado[0].cantidad += 1;
    }else{
      state.productos.push({ ...payload, cantidad: 1 });
    }
  }),

  removeProducto: action((state, payload) => {
    const uid = payload.uid;
    let duplicado = state.productos.filter(producto => producto.uid === uid);
    if(duplicado.length == 1 && duplicado[0].cantidad > 0){
      duplicado[0].cantidad -= 1;
    }
  }),

  deleteProducto: action((state, payload) => {
    state.productos = state.productos.filter((producto) => producto.uid !== payload.uid);
  }),

  calcularPrecioTotal: action((state, payload) => {
    const preciosTotales = state.productos.map((producto) => {
      return producto.content * producto.cantidad
    });
    const sumaTotal = preciosTotales.reduce((total, producto) => total + producto, 0);
    state.precioTotal = sumaTotal.toFixed(2);
  }),
};
