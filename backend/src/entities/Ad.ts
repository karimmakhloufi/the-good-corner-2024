import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  author: string;

  @Column()
  price: number;

  @Column()
  creation_date: Date;

  @Column()
  img_url: string;

  @Column()
  city: string;

  @ManyToOne(() => Category, (category) => category.ads, { eager: true })
  category: Category;
}
