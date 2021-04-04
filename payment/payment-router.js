// endpoints for /api/pay
const express = require("express");
const router = express.Router();

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

const cors = require("cors");

router.post("/initial", cors(), async (req, res) => {
  let { amount, paymentMethodId, name, email, stripeId } = req.body;
  let customerInfo = { id: stripeId, name, email };

  const customerPromise = await stripe.customers.create(
    customerInfo,
    function (err, customer) {
      if (!err) {
        console.log("Stripe Customer", customer);
      } else {
        console.log(`Error:`, err);
        res.status(500).json({ err });
      }
    }
  );

  console.log("customerPromise: ", customerPromise.id);

  //   try {
  //     await stripe.customers.create(customerInfo, function (err, customer) {
  //       if (!err) {
  //         // res.status(201).json(customer);
  //         console.log("Stripe Customer", customer);
  //         console.log("Stripe customer ID: ", customer.id);
  //         try {
  //           stripe.setupIntents.create(
  //             {
  //               payment_method_types: ["card"],
  //               customer: customer.id,
  //               payment_method: paymentMethodId,
  //             },
  //             function (err, setupIntent) {
  //               if (!err) {
  //                 console.log(`client secret: ${setupIntent.client_secret}`);
  //                 stripe.setupIntents.confirm(
  //                   `${setupIntent.id}`,
  //                   { payment_method: paymentMethodId },
  //                   function (err, setupIntent) {
  //                     if (!err) {
  //                       console.log(`setup intent confirmed: ${setupIntent}`);
  //                       try {
  //                         stripe.paymentIntents.create({
  //                           amount,
  //                           currency: "USD",
  //                           customer: customer.id,
  //                           confirm: true,
  //                           payment_method: paymentMethodId,
  //                           description: "Farms to Communities Produce Basket",
  //                         });
  //                         console.log("Payment", payment);
  //                         res.json({
  //                           message: "Payment successful!",
  //                           success: true,
  //                         });
  //                       } catch (error) {
  //                         console.log("Error", error);
  //                         res.json({
  //                           message: "Payment failed!",
  //                           success: false,
  //                         });
  //                       }
  //                     } else {
  //                       console.log("Error", err);
  //                       res.status(500).json({ err });
  //                     }
  //                   }
  //                 );
  //               } else {
  //                 console.log(`Error:`, err);
  //               }
  //             }
  //           );
  //         } catch (error) {
  //           console.log(`Error:`, err);
  //           res.json({ message: "Could not setup intent", success: false });
  //         }
  //       } else {
  //         console.log(`Error:`, err);
  //         res.status(400).json({ err });
  //       }
  //     });
  //   } catch (error) {
  //     console.log("Error", error);
  //     res.json({ message: "Could not create customer", success: false });
  //   }
});

module.exports = router;
