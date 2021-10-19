import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('status')
export class Status {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column({ length: 30 })
  name: string;
}
