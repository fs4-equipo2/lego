import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '../config.js';


const stripe = new Stripe(STRIPE_SECRET_KEY);

export const createSession = async (req, res) => {
  try {
    const { productos } = req.body;
    const session = await stripe.checkout.sessions.create({
      line_items: productos.map(producto => {
        return ({
            price_data: {
                product_data: {
                  name: producto.title,
                },
                currency: "EUR",
                unit_amount: Math.trunc(producto.content*100),
              },
              quantity: producto.cantidad,
        })}),
      mode: "payment",
      success_url: "http://localhost:3001/success",
      cancel_url: "http://localhost:3001/cancel",
    });
    return res.json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
