import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RealEstate, User } from "../entities";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn({ type: "date" })
  date: Date;

  @Column({ type: "timestamp" })
  hour: string;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.id)
  realEstate: RealEstate[];

  @ManyToOne(() => User, (user) => user.id)
  user: User[];
}

export default Schedule;
