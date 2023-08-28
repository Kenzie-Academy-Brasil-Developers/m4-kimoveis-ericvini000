import { getRounds, hashSync } from "bcryptjs";
import {
  AfterSoftRemove,
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

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

  @UpdateDateColumn({ type: "date", nullable: true })
  deletedAt: Date | string | null;

  @BeforeInsert()
  insertCreatedAt() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  hashPassword() {
    const rounds: number = getRounds(this.password);
    if (!rounds) {
      this.password = hashSync(this.password, 10);
    }
  }

  @BeforeUpdate()
  insertUpdatedAt() {
    this.updatedAt = new Date();
  }

  @AfterSoftRemove()
  insertDeletedAt() {
    this.deletedAt = new Date();
  }
}

export default User;
