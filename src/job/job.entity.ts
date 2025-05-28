import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  company!: string;

  @Column()
  location!: string;

  @Column()
  job_type!: string;

  @Column()
  salary_range!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'text' })
  requirements!: string;

  @Column({ type: 'text' })
  responsibilities!: string;

  @Column({ type: 'date' })
  application_deadline!: string;

  @Column({ type: 'int', default: 1 })
  status!: number;

  @Column({ default: false })
  is_draft!: boolean;
}
