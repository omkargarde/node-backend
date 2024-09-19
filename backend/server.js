import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("server");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, c: "1" },
    { id: 2, c: "2" },
    { id: 3, c: "3" },
    { id: 4, c: "4" },
    { id: 5, c: "5" },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
