const { json } = require("express");
const express = require("express");
const db = require(".\\database");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// app.get("/main.css", (req, res) => {
//   res.sendFile(__dirname + "\\user_interface\\main.css");
// });

// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + "\\user_interface\\login.html");
// });

app.post("/login", async (req, res) => {
  const accountID = req.body;

  const result = await db
    .promise()
    .query(`select * from users where name="${accountID.name}"`);

  if (result[0].length > 0) {
    res.status(200).send("login succesfully");
  } else {
    res.status(404).send("you are not logged in");
  }
});

// app.get("/register", async (req, res) => {
//   res.sendFile(__dirname + "\\user_interface\\register.html");
// });

app.post("/register", async (req, res) => {
  const accountID = req.body;

  const result = await db
    .promise()
    .query(
      `insert into users values('${accountID.name}','${accountID.password}') `
    );
  if (result.length > 0) {
    res.status(200).send("user has created");
  } else {
    console.log("user has not created");
  }
});

app.listen(3000, () => {
  console.log("server is running on Port 3000");
});
