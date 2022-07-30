/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
const functions = require("firebase-functions");
// eslint-disable-next-line no-unused-vars
const express = require("express");
// eslint-disable-next-line no-unused-vars
const cors = require("cors");

// eslint-disable-next-line no-unused-vars
const stripe = require("stripe")("sk_test_nTlFFDagZPaY7xXMHVYu2hqM");

// API Setup

// App Config
const app = express();

// Middleware
app.use(({origin: true}));
app.use(express.json());

// Api routes
app.get("/", (req, res)=> res.status(200).send("Hello World"));

// Listener Command
