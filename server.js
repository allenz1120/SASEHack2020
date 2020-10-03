const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors");

app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

const ToneAnalyzerV3 = require("ibm-watson/tone-analyzer/v3");
const { IamAuthenticator } = require("ibm-watson/auth");

const toneAnalyzer = new ToneAnalyzerV3({
  version: "2017-09-21",
  authenticator: new IamAuthenticator({
    apikey: "0ElAfANDGaue9dFMsTMutYaxAMO6l1_OwvON9tE-yxl3",
  }),
  serviceUrl:
    "https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/a7465f8e-2d06-40ab-9eb4-f31f9b1deb83",
});

// const text =
//   "Team, I know that times are tough! Product " +
//   "sales have been disappointing for the past three " +
//   "quarters. We have a competitive product, but we " +
//   "need to do a better job of selling it!";

// const toneParams = {
//   toneInput: { text: text },
//   contentType: "application/json",
// };

// toneAnalyzer
//   .tone(toneParams)
//   .then((toneAnalysis) => {
//     console.log(JSON.stringify(toneAnalysis, null, 2));
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });

app.get("/mood/:text", function (req, res) {
  let text = req.params.text;
  let toneParams = {
    toneInput: { text: text },
    contentType: "application/json",
  };
  toneAnalyzer
    .tone(toneParams)
    .then((toneAnalysis) => {
      res.send(toneAnalysis.result);
    })
    .catch((err) => {
      console.log("error:", err);
    });
});

app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});
