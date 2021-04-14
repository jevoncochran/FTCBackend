const express = require("express");
const cors = require("cors");

const authRouter = require("../auth/auth-router");
const productRouter = require("../products/product-router");
const customerRouter = require("../customers/customer-router");
const orderRouter = require("../orders/order-router");
const paymentRouter = require("../payment/payment-router");
const stripeRouter = require("../stripe/stripe-router");
const accountRouter = require("../accounts/account-router");
const subscriptionRouter = require("../subscriptions/subscription-router");

const server = express();

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use("/api/auth", authRouter);
server.use("/api/products", productRouter);
server.use("/api/customers", customerRouter);
server.use("/api/orders", orderRouter);
server.use("/api/pay", paymentRouter);
server.use("/api/stripe", cors(), stripeRouter);
server.use("/api/accounts", accountRouter);
server.use("/api/subscriptions", subscriptionRouter);

module.exports = server;
