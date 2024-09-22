import "reflect-metadata";
import express from "express";
import { dataSource } from "./config/db";
import { Ad } from "./entities/Ad";
import { Category } from "./entities/Category";

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

app.post("/ads", async (req, res) => {
  await Ad.create(req.body).save();
  console.log(req.body);
  res.send("Ad created");
});

app.delete("/ads/:id", async (req, res) => {
  await Ad.delete(req.params.id);
  res.send("The ad was deleted");
});

app.put("/ads/:id", async (req, res) => {
  await Ad.update({ id: parseInt(req.params.id) }, req.body);
  res.send("The ad was updated");
});

app.get("/categories", async (_req, res) => {
  const result = await Category.find();
  res.send(result);
});

app.post("/categories", async (req, res) => {
  await Category.create(req.body).save();
  console.log(req.body);
  res.send("Category created");
});

app.delete("/categories/:id", async (req, res) => {
  await Category.delete(req.params.id);
  res.send("The ad was deleted");
});

app.put("/categories/:id", async (req, res) => {
  await Category.update({ id: parseInt(req.params.id) }, req.body);
  res.send("The category was updated");
});

app.listen(port, async () => {
  await dataSource.initialize();
  console.log(`Example app listening on port ${port}`);
});
