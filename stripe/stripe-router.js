// endpoints associated with Stripe - /api/stripe

const express = require("express");
const router = express.Router();

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY_LIVE);

router.post("/customer", async (req, res) => {
  let { name, email, stripeId, paymentMethodId, shipping } = req.body;
  let customerInfo = {
    id: stripeId,
    name,
    email,
    shipping,
    payment_method: paymentMethodId,
    invoice_settings: {
      default_payment_method: paymentMethodId,
    },
  };

  stripe.customers.create(customerInfo, (err, customer) => {
    if (!err) {
      res.status(201).json(customer);
      console.log("new Stripe customer", customer);
    } else {
      console.log("Error", err);
      res.status(500).json({ err });
    }
  });
});

router.post("/intent", async (req, res) => {
  let { stripeCustomerId, paymentMethodId } = req.body;
  stripe.setupIntents.create(
    {
      payment_method_types: ["card"],
      customer: stripeCustomerId,
      payment_method: paymentMethodId,
    },
    (err, setupIntent) => {
      if (!err) {
        console.log(`client secret: ${setupIntent.client_secret}`);
        stripe.setupIntents.confirm(
          setupIntent.id,
          {
            payment_method: paymentMethodId,
          },
          (err, confirmedIntent) => {
            if (!err) {
              console.log(`setup intent confirmed: ${confirmedIntent}`);
              res.status(201).json(confirmedIntent);
            } else {
              console.log("Error", err);
              res.status(500).json({ err });
            }
          }
        );
      } else {
        console.log("Error", err);
        res.status(500).json({ err });
      }
    }
  );
});

// router.post("/payment", (req, res) => {
//   let { stripeCustomerId, paymentMethodId, amount } = req.body;

//   stripe.paymentIntents.create(
//     {
//       amount,
//       currency: "USD",
//       customer: stripeCustomerId,
//       confirm: true,
//       payment_method: paymentMethodId,
//       description: "Farms to Communities Produce Basket",
//     },
//     (err, payment) => {
//       if (!err) {
//         res.status(201).json(payment);
//       } else {
//         console.log(err);
//         res.status(500).json({ err });
//       }
//     }
//   );
// });

router.post("/subscription", (req, res) => {
  let { stripeCustomerId, stripePriceId } = req.body;
  stripe.subscriptions.create(
    {
      customer: stripeCustomerId,
      items: [{ price: stripePriceId }],
      expand: ["latest_invoice.payment_intent"],
    },
    (err, subscription) => {
      if (!err) {
        res.status(201).json(subscription);
      } else {
        console.log(err);
        res.status(500).json({ err });
      }
    }
  );
});

router.post("/donate", async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Donation",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({ message: "Payment successful!", success: true });
  } catch (error) {
    console.log("Error", error);
    res.json({ message: "Payment failed!", success: false });
  }
});

router.get("/subscription/:subscriptionId", (req, res) => {
  let { subscriptionId } = req.params;

  stripe.subscriptions.retrieve(subscriptionId, (err, subscription) => {
    if (!err) {
      res.status(200).json(subscription);
    } else {
      console.log(err);
      res.status(500).json({ err });
    }
  });
});

module.exports = router;
