import { Category } from "../entities/Category";
import { Ad } from "../entities/Ad";
import { DataSource } from "typeorm";
import { Tag } from "../entities/Tag";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "good_corner.sqlite",
  entities: [Ad, Category, Tag],
  synchronize: true,
  logging: ["query", "error"],
});
