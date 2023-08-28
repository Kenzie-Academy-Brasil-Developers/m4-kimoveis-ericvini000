import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("realEstates")
class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type:"boolean", default:false})
    sold: boolean;

    @Column({type:"decimal", default:0})
    value:number;

    @Column({type: "float"})
    size:number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}


export default RealEstate