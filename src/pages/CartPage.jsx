import { MdOutlineShoppingBag } from "react-icons/md";
import { useStoreState } from "../store";
import { Link } from "react-router-dom";
import { Modal } from "../components/Modal/Modal";
import { LogInModal } from "../components/LogInModal/LogInModal";
import Tipografia from "../components/Tipografia/Tipografia";
import styles from "./CartPage.module.scss";
import { useModal } from "../hooks/useModal";

export const CartPage = () => {
  const { user } = useStoreState((state) => state.user);
  const { productos } = useStoreState((state) => state.carrito);

  const [isOpenLogIn, openModalLogIn, closeModalLogIn] = useModal(false);

  return (
    <>
      {productos.length === 0 && (
        <>
          <div className={styles.cartPageContainer}>
            <MdOutlineShoppingBag className={styles.bagIcon} />
            <Tipografia
              color={"--grey-xtra"}
              texto={"Su bolsa está vacía"}
              isTitleMedium
              isMediumWeight
            />
            <Tipografia
              color={"--grey-xtra"}
              texto={"Inicie sesión para ver su bolsa y efectuar una compra."}
              isBodyMedium
              isRegularWeight
            />
            {!user.isLoggedIn &&
            <>
            <button id={styles.logInSubmitBtn} onClick={openModalLogIn}>
              <Tipografia
                color={"--white"}
                texto={"Inicia sesión"}
                isSubtitleRegular
                isMediumWeight
              />
            </button>
            <Modal
              isOpen={user.isLoggedIn ? false : isOpenLogIn}
              closeModal={closeModalLogIn}
            >
              <LogInModal />
            </Modal>
            </>}
            <Link to="/">
              <div className={styles.iniciarCompraLink}>
                <Tipografia
                  color={"--grey-xtra"}
                  texto={"Iniciar compra"}
                  isBodyMedium
                  isRegularWeight
                />
                <svg
                  width="18"
                  height="28"
                  viewBox="0 0 18 28"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Icon__StyledSVG-lm07h6-0 kNvokt"
                >
                  <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </>
      )}
      {productos.length > 0 && <h3>Productos</h3>}
    </>
  );
};
