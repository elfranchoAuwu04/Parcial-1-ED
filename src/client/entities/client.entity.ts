import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity()

export class Client {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    @Column()
    apellido:string;
    email:string;
    @Column()
    numero:number;

}
