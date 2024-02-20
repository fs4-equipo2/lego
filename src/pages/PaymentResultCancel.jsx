import Tipografia from "../components/Tipografia/Tipografia";
import { useStoreState, useStoreActions } from "../store";
import styles from "./PaymentResult.module.scss";

export const PaymentResultCancel = () => {
  const { user } = useStoreState((state) => state.user);
  const { setUser } = useStoreActions((actions) => actions.user);

  window.onload = function () {
    const valorAlmacenado = JSON.parse(
      sessionStorage.getItem("usuarioConectado")
    );
    if (valorAlmacenado) {
      setUser({ ...valorAlmacenado });
    }
  };

  return (
    <>
      <div className={styles.payResultCont}>
        <Tipografia texto="Ha ocurrido un error." color={"--red"} isTitleLarge isBoldWeight />

        <img
          className={styles.payResultImg}
          src="../../public/images/paymentResult/paymentError.png"
          alt="Lego icon happy"
        />
      </div>
    </>
  );
};
