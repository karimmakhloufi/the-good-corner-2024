import "reflect-metadata";
import express from "express";
import cors from "cors";
import { dataSource } from "./config/db";
import { Ad } from "./entities/Ad";
import { Category } from "./entities/Category";
import { Tag } from "./entities/Tag";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.get("/ads", async (req, res) => {
  let result: Ad[] = [];
  console.log(req.query);
  if (req.query.category) {
    result = await Ad.find({
      where: { category: { name: req.query.category as string } },
    });
  } else {
    result = await Ad.find();
  }
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
  let adToUpdate = await Ad.findOneByOrFail({
    id: Number.parseInt(req.params.id),
  });
  adToUpdate = Object.assign(adToUpdate, req.body);
  adToUpdate.save();
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

app.get("/tags", async (_req, res) => {
  const result = await Tag.find();
  res.send(result);
});

app.post("/tags", async (req, res) => {
  await Tag.create(req.body).save();
  console.log(req.body);
  res.send("Tag created");
});

app.delete("/tags/:id", async (req, res) => {
  await Tag.delete(req.params.id);
  res.send("The tag was deleted");
});

app.put("/tags/:id", async (req, res) => {
  await Tag.update({ id: parseInt(req.params.id) }, req.body);
  res.send("The tag was updated");
});

app.listen(port, async () => {
  await dataSource.initialize();
  console.log(`Example app listening on port ${port}`);
});
