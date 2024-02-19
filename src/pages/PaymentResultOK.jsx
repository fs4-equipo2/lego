import { useStoreState, useStoreActions } from "../store";

export const PaymentResultOK = () => {

  const { user } = useStoreState((state) => state.user);
  const { setUser } = useStoreActions((actions) => actions.user);

  window.onload = function() {
    const valorAlmacenado = JSON.parse(sessionStorage.getItem('usuarioConectado'));
    if (valorAlmacenado) {
        setUser({...valorAlmacenado});
    }
  };

  return (
    <div>Resultado OK de la compra</div>
  )
}
