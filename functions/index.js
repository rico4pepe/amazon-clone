/* eslint-disable max-len */
// eslint-disable-next-line no-unused-vars
const functions = require("firebase-functions");
// eslint-disable-next-line no-unused-vars
const express = require("express");
// eslint-disable-next-line no-unused-vars
const Cors = require("cors");
const { async } = require("@firebase/util");

const bodyParser  = require("body-parser")
// eslint-disable-next-line no-unused-vars
const stripe = require("stripe")("sk_test_nTlFFDagZPaY7xXMHVYu2hqM");

// API Setup

// App Config
const app = express();

// Middleware
// app.use(({origin: true}));
// app.use(express.json());


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(Cors())

// Api routes
 app.get("/", (req, res)=> res.status(200).send("Hello World"));
// app.get("/", (req, res, next)=> res.status(200).send("Hello World"));
// app.get("/", (req, res) => {
//   const date = new Date();
//   const hours = (date.getHours() % 12) + 1; // London is UTC + 1hr;
//   res.send(`
//       <!doctype html>
//       <head>
//         <title>Time</title>
//         <link rel="stylesheet" href="/style.css">
//         <script src="/script.js"></script>
//       </head>
//       <body>
//         <p>In London, the clock strikes:
//           <span id="bongs">${"BONG ".repeat(hours)}</span></p>
//         <button onClick="refresh(this)">Refresh</button>
//       </body>
//     </html>`);
//});

app.post("/payments/create", async(req, res)=>{
    const total = req.query.total;

    console.log("Payment Request Boom ....", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",

    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

 // app.use(({origin: true}));
// app.use(express.json());

// Listener Command
exports.api = functions.https.onRequest(app);

// api : http://localhost:5001/clone-5cea2/us-central1/api