import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    apellido:string;
    @Column()
    email:string;
    @Column()
    numero:number;
    
}
