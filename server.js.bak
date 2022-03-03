const app = require("express")();
const express = require("express");
const login = require("./routes/login");
const signup = require("./routes/signup");
const userCode = require("./routes/userCode")
const logout = require('./routes/logout')
const codeSave = require('./routes/codeSave')
const shareCode = require('./routes/shareCode')
const runCode = require('./routes/runCode')
const mongoose = require("mongoose");
const path = require('path')
const problemStatement = require("./routes/problemStatement");
const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/storage");
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));


if (true) {
  app.use(express.static(path.join(__dirname, '/frontendStatic')))

  app.get('/', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontendStatic', 'index.html'))
  )
}

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//routes
app.use("/signup", signup);
app.use("/login", login);
app.use("/codesave", codeSave);
app.use("/usercode", userCode);
app.use("/logout",logout);
app.use("/runcode",runCode);
app.use("/share",shareCode);
app.use("/ps", problemStatement);

app.listen(process.env.PORT||5000, () => {
  console.log("Server running on 5000");
});
