const express = require("express");
const app = express();

const PORT = 3000;

const friends = [
  {
    id: 1,
    name: "Chris",
  },
  {
    id: 2,
    name: "SAeyi",
  },
  {
    id: 3,
    name: "Joshaua",
  },
];
app.get("/", (req, res) => {
  res.send();
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  // Or use the "+" to convert to number because URLs are always in string
  // const friendId = +req.params.friendId

  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "User not found",
    });
  }
});
app.get("/messages", (req, res) => {
  res.send("<ul><li>Heloooo Albert</li></ul>");
});
app.post("/messages", (req, res) => {
  console.log("updating messages");
});
app.listen(PORT, () => {
  console.log(`Listening to server running at port: ${3000}`);
});
