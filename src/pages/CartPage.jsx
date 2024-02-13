import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { useStoreState, useStoreActions } from "../store";
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

  const { deleteProducto, addProducto, removeProducto, calcularPrecioTotal } =
    useStoreActions((actions) => actions.carrito);

  const [isOpenLogIn, openModalLogIn, closeModalLogIn] = useModal(false);

  const handleDeleteProducto = (producto) => {
    deleteProducto(producto);
    calcularPrecioTotal();
  };

  const handleAddProducto = (producto) => {
    addProducto(producto);
    calcularPrecioTotal();
  };

  const handleRemoveProducto = (producto) => {
    removeProducto(producto);
    calcularPrecioTotal();
  };

  return (
    <div className={styles.cartPageContainer}>
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
                            <img
                              className={styles.productImg}
                              src={producto.src}
                            />
                            <div className={styles.cardProductDetails}>
                              <div className={styles.cardProductFirstRow}>
                                <Tipografia
                                  color={"--grey-xtra"}
                                  texto={`${producto.title}`}
                                  isBodyXL
                                  isBoldWeight
                                />
                                <button
                                  onClick={() => handleDeleteProducto(producto)}
                                >
                                  <FaRegTrashCan id={styles.productDeleteBtn} />
                                </button>
                              </div>
                              <div className={styles.cardProductPrice}>
                                <Tipografia
                                  color={"--grey-xtra"}
                                  texto={`${producto.content}€`}
                                  isSubtitleRegular
                                  isBoldWeight
                                />

                                <div className={styles.cardProductBtns}>
                                  <button
                                    onClick={() =>
                                      handleRemoveProducto(producto)
                                    }
                                    id={styles.productBtn}
                                  >
                                    <Tipografia
                                      color={"--grey-xtra"}
                                      texto={"-"}
                                      isTitleRegular
                                      isRegularWeight
                                    />
                                  </button>
                                  <div id={styles.productCantidad}>
                                    <Tipografia
                                      color={"--grey-xtra"}
                                      texto={`${producto.cantidad}`}
                                      isSubtitleXL
                                      isRegularWeight
                                    />
                                  </div>
                                  <button
                                    onClick={() => handleAddProducto(producto)}
                                    id={styles.productBtn}
                                  >
                                    <Tipografia
                                      color={"--grey-xtra"}
                                      texto={"+"}
                                      isTitleRegular
                                      isRegularWeight
                                    />
                                  </button>
                                </div>

                                <button className={styles.cardProductDeseos}>
                                  <FaRegHeart id={styles.productHeartBtn} />
                                  <Tipografia
                                    color={"--grey-xtra"}
                                    texto={"Añadir a la lista"}
                                    isBodyRegular
                                    isBigWeight
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className={styles.detallesPedidoContainer}>
                <div className={styles.detallesPedidoTitle}>
                  <Tipografia
                    color={"--grey-xtra"}
                    texto={"Resumen del pedido"}
                    subtitleXL
                    isRegularWeight
                  />
                </div>
                <div className={styles.detallesPedidoImporte}>
                  <Tipografia
                    color={"--grey-xtra"}
                    texto={"Importe total:"}
                    isSubtitleRegular
                    isBoldWeight
                  />
                  <Tipografia
                    color={"--grey-xtra"}
                    texto={`${precioTotal}€`}
                    isSubtitleXL
                    isBoldWeight
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <BlogRecomendados />
    </div>
  );
};
