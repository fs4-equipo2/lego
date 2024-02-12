import { MdOutlineShoppingBag } from "react-icons/md";
import { useStoreState } from "../store";
import { Link } from "react-router-dom";
import { Modal } from "../components/Modal/Modal";
import { LogInModal } from "../components/LogInModal/LogInModal";
import Tipografia from "../components/Tipografia/Tipografia";
import styles from "./CartPage.module.scss";
import { useModal } from "../hooks/useModal";
import { BlogRecomendados } from "../components/BlogRecomendados/BlogRecomendados";

export const CartPage = () => {
  const { user } = useStoreState((state) => state.user);
  const { productos, precioTotal } = useStoreState((state) => state.carrito);

  const [isOpenLogIn, openModalLogIn, closeModalLogIn] = useModal(false);

  return (
    <>
      {productos.length === 0 && (
        <>
          <div className={styles.cartPageNoProductsContainer}>
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
            {!user.isLoggedIn && (
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
              </>
            )}
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
      {productos.length > 0 && (
        <>
          <div className={styles.cartPageProductsContainer}>
            <Tipografia
              color={"--grey-xtra"}
              texto={`Mi bolsa (${productos.length})`}
              isSubtitleXL
              isRegularWeight
            />
            <div className={styles.cartPageProductsResumen}>
              <div className={styles.detallesProductosContainer}>
                <Tipografia
                  color={"--green"}
                  texto={"Ya disponible"}
                  isSubtitleRegular
                  isBoldWeight
                />
                <div className={styles.cardsProductsCont}>
                  <ul className={styles.cardsProductsList}>
                    {productos.map((producto, index) => {
                      return (
                        <li key={index}>
                          <div className={styles.cardProductCont}>
                            <img className={styles.cardProductImg} src={producto.src} />
                            <Tipografia
                              color={"--grey-xtra"}
                              texto={`${producto.title}`}
                              subtitleXL
                              isRegularWeight
                            />
                            <Tipografia
                              color={"--grey-xtra"}
                              texto={`${producto.content}€`}
                              subtitleXL
                              isRegularWeight
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className={styles.detallesPedidoContainer}>
                <Tipografia
                  color={"--grey-xtra"}
                  texto={"Resumen del pedido"}
                  subtitleXL
                  isRegularWeight
                />
                <Tipografia
                  color={"--grey-xtra"}
                  texto={"Importe total"}
                  isSubtitleRegular
                  isBoldWeight
                />
                <Tipografia
                  color={"--grey-xtra"}
                  texto={`${precioTotal}€`}
                  isSubtitleRegular
                  isBoldWeight
                />
              </div>
            </div>
          </div>
        </>
      )}
      <BlogRecomendados />
    </>
  );
};
