import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import Schedule from "./schedule.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "boolean", default: false })
  admin: boolean;

  @Column({ type: "varchar" })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: Date | string;

  @DeleteDateColumn({ type: "date", nullable: true })
  deletedAt: Date | string | null;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedule: Schedule[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const rounds: number = getRounds(this.password);
    if (!rounds) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;
