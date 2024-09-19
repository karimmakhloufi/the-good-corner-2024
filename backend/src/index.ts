import express from "express";
import sqlite3 from "sqlite3";
const db = new sqlite3.Database("good_corner.sqlite");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/ads", (_req, res) => {
  db.all("SELECT * FROM ad", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred");
    } else {
      res.send(rows);
    }
  });
});

app.post("/ads", (req, res) => {
  console.log(req.body);
  const stmt = db.prepare(
    "INSERT INTO ad (title, description, author, price, img_url, city, creation_date) VALUES (?, ?, ?, ?, ?, ?, ?)"
  );
  stmt.run([
    req.body.title,
    req.body.description,
    req.body.author,
    req.body.price,
    req.body.img_url,
    req.body.city,
    req.body.createdAt,
  ]);
  res.send("Request received, check the backend terminal");
});

app.delete("/ads/:id", (req, res) => {
  const stmt = db.prepare("DELETE FROM ad WHERE id = ?");
  stmt.run(req.params.id);
  res.send("The ad was deleted");
});

app.put("/ads/:id", (req, res) => {
  const stmt = db.prepare(
    "UPDATE ad SET title = ?, description = ?, author = ?, price = ?, img_url = ?, city = ?, creation_date = ? WHERE id = ?"
  );
  stmt.run([
    req.body.title,
    req.body.description,
    req.body.author,
    req.body.price,
    req.body.img_url,
    req.body.city,
    req.body.createdAt,
    req.params.id,
  ]);
  res.send("The ad was updated");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
