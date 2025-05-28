import { IsNotEmpty, IsNumber, IsString, IsDateString, IsBoolean } from 'class-validator';

export class AddJobDto {
  @IsNotEmpty()
  @IsNumber()
  company_id!: number;

  @IsNotEmpty()
  @IsString()
  job_title!: string;

  @IsNotEmpty()
  @IsString()
  company_name!: string;

  @IsNotEmpty()
  @IsString()
  location!: string;

  @IsNotEmpty()
  @IsString()
  job_type!: string;

  @IsNotEmpty()
  @IsString()
  salary_range!: string;

  @IsNotEmpty()
  @IsDateString()
  application_deadline!: string;

  @IsNotEmpty()
  @IsString()
  job_description!: string;

  @IsBoolean()
  status!: boolean;

  @IsBoolean()
  is_draft!: boolean;
}
