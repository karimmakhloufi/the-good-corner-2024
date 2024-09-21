import "reflect-metadata";
import express from "express";
import sqlite3 from "sqlite3";
import { dataSource } from "./config/db";
import { Ad } from "./entities/Ad";
const db = new sqlite3.Database("good_corner.sqlite");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/ads", async (_req, res) => {
  const result = await Ad.find();
  res.send(result);
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

app.listen(port, async () => {
  await dataSource.initialize();
  console.log(`Example app listening on port ${port}`);
});
