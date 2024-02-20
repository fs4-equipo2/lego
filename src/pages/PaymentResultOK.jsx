import { Link } from "react-router-dom";
import Tipografia from "../components/Tipografia/Tipografia";
import { useStoreState, useStoreActions } from "../store";
import styles from "./PaymentResult.module.scss";

export const PaymentResultOK = () => {
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
    <div className={styles.payGeneral}>
      <div className={styles.payResultCont}>
        <Tipografia
          texto="¡Tu compra ha sido exitosa!"
          color={"--green"}
          isTitleLarge
          isBoldWeight
        />

        <img
          className={styles.payResultImg}
          src="../../public/images/paymentResult/paymentOk.png"
          alt="Lego icon happy"
        />
      </div>
      <div>
        <button className={styles.checkoutPagePayBtn}>
          <Link to="/">
            <Tipografia
              color={"--white"}
              texto={"Volver a la página principal"}
              isSubtitleRegular
              isMediumWeight
            />
          </Link>
        </button>
      </div>
    </div>
  );
};
