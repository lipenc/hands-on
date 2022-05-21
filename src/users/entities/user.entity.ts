import {
    Column,
    CreateDateColumn,
    Entity,
    Exclusion,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity()
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;
    
    @Column()
    email: string;
  
    @Column()
    password: string;
  
    @CreateDateColumn({
      name: 'created_at',
    })
    created_at: Date;
  
    @UpdateDateColumn({
      name: 'updated_at',
    })
    updated_at: Date;
  }