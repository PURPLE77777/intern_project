import { IsNumber, IsOptional } from 'class-validator';

export abstract class BaseFindManyDto {
  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsOptional()
  @IsNumber()
  take?: number;
}
