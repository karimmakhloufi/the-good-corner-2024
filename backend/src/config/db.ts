import { Ad } from "../entities/Ad";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "good_corner.sqlite",
  entities: [Ad],
  synchronize: true,
  logging: ["query", "error"],
});
