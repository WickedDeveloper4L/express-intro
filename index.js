const express = require("express");
const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "Chris",
  },
  {
    id: 1,
    name: "SAeyi",
  },
  {
    id: 2,
    name: "Joshaua",
  },
];

// First Middleware
app.use((req, res, next) => {
  const start = Date.now();
  next();
  // Last chance to create any actions, this is aftewr the middleware has gotten responses from the endpoint
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to My first Express Server");
});

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "incorrect or empty name value",
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);
  res.json(newFriend);
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
