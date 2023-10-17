import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tenants')
export class TenantEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

}