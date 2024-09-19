import express from "express";
import sqlite3 from "sqlite3";
const db = new sqlite3.Database("good_corner.sqlite");

const app = express();
const port = 3000;

app.use(express.json());

let ads = [
  {
    id: 1,
    title: "Bike to sell",
    description:
      "My bike is blue, working fine. I'm selling it because I've got a new one",
    owner: "bike.seller@gmail.com",
    price: 100,
    picture:
      "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
    location: "Paris",
    createdAt: "2023-09-05T10:13:14.755Z",
  },
  {
    id: 2,
    title: "Car to sell",
    description:
      "My car is blue, working fine. I'm selling it because I've got a new one",
    owner: "car.seller@gmail.com",
    price: 10000,
    picture:
      "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
    location: "Paris",
    createdAt: "2023-10-05T10:14:15.922Z",
  },
];

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
  ads = ads.map((ad) => {
    if (ad.id !== Number.parseInt(req.params.id)) {
      return ad;
    } else {
      return req.body;
    }
  });
  res.send("The ad was updated");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
