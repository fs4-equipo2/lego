const express = require("express");
const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51OjIyELGvMNxGwCHh103wwAbfpquYb37J8bChffYfvn4TEnd6LjoGY6q73K8wtSMqkdrKk14IarSAn3nuZ33yRrV00ETrObTJj");

const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  // you can get more data to find in a database, and so on
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "EUR",
      description: "Lego products",
      payment_method: id,
      confirm: true, //confirm the payment at the same time

      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'always',
      },
      return_url: "http://localhost:5173/payment",

    });

    console.log(payment);

    return res.status(200).json({ message: "Successful Payment" });
  } catch (error) {
    console.log(error);
    return res.json({ message: error.raw.message });
  }
});


app.listen(3001, () => {
  console.log("Server on port", 3001);
});
