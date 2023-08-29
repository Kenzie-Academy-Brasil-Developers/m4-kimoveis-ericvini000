import {
  BeforeInsert,
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
  date: string | Date;

  @Column({ type: "date" })
  hour: string | Date;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.id)
  realEstate: RealEstate;

  @ManyToOne(() => User, (user) => user.schedule)
  user: User;

  @BeforeInsert()
  getTime() {
    this.date = new Date();
    this.hour = new Date();
  }
}

export default Schedule;
