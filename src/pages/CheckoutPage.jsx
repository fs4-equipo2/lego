import { useStoreState } from "../store";
import styles from "./CheckoutPage.module.scss";
import Tipografia from "../components/Tipografia/Tipografia";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OjIyELGvMNxGwCHxbnPhsfEdIYMbTZLoSuFH4zxBMxPJf0aiC2t3Xr6fq78PQAka6q9R0ME8cw1I0FTOv4kCi4n00lbQ3OXCk"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefaul();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button>Buy</button>
    </form>
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
};

export const CheckoutPage = () => {
  const { productos } = useStoreState((state) => state.carrito);

  return (
    <>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
      <div>
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
                                        texto={`${producto.cantidad}`}
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
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};