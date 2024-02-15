import { useStoreState } from "../store";

export const PaymentResult = () => {

  const { user } = useStoreState((state) => state.user);

  return (
    <div>Resultado de la compra</div>
  )
}
