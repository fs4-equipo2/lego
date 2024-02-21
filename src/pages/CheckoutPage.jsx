import { useStoreState } from "../store";
import styles from "./CheckoutPage.module.scss";
import Tipografia from "../components/Tipografia/Tipografia";

export const CheckoutPage = () => {
  const { productos, precioTotal } = useStoreState((state) => state.carrito);
  const { user } = useStoreState((state) => state.user);

  const handleFinalPayment = async (e) => {
    try{
        const res = await fetch('http://localhost:3001/create-checkout-session', { method: 'POST', headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productos }),
        });
        const data = await res.json();
        const valorSesion = JSON.stringify(user);
        sessionStorage.setItem('usuarioConectado', valorSesion);
        window.location.href = data.url;
    }catch(err){
        console.error("ERROR", err);
    }
  }


  return (
    <div className={styles.checkoutPageGeneral}>
      <div>
        {productos.length > 0 && (
          <>
            <div className={styles.checkoutPageProductsContainer}>
              <Tipografia
                color={"--grey-xtra"}
                texto={`Mi bolsa (${productos.length})`}
                isSubtitleXL
                isRegularWeight
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
                            </div>
                            <div className={styles.cardProductPrice}>
                              <Tipografia
                                color={"--grey-xtra"}
                                texto={`${producto.content}€`}
                                isSubtitleRegular
                                isBoldWeight
                              />

                              <div className={styles.cardProductBtns}>
                                <div id={styles.productCantidad}>
                                  <Tipografia
                                    color={"--grey-xtra"}
                                    texto={`Cantidad: ${producto.cantidad}`}
                                    isSubtitleXL
                                    isRegularWeight
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.checkoutPagePayContainer}>
          <Tipografia
            color={"--grey-xtra"}
            texto={`Total: ${precioTotal}€`}
            isSubtitleXL
            isBoldWeight
          />
        <button onClick={handleFinalPayment} className={styles.checkoutPagePayBtn}>
        <Tipografia
          color={"--white"}
          texto={"Confirmar pedido y efectuar pago"}
          isSubtitleRegular
          isMediumWeight
        />
        </button>
      </div>
    </div>

  );
};
