import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,DeleteDateColumn} from 'typeorm'

@Entity({name:'author'}) 
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({name: 'first_name'})
    firstName:string;

    @Column({name: 'last_name'})
    lastName:string;

    @CreateDateColumn({name: 'created_At'})
    createdAt:Date;

    @UpdateDateColumn({name: 'updated_name'})
    updatedAt:Date;

    @DeleteDateColumn({name: 'deleted_name'})
    deletedAt:Date;
}