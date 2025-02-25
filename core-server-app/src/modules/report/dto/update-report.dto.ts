import { Optional } from '@nestjs/common';
import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsString, IsUUID } from 'class-validator';
import { ReportCategory } from '../const';
import { CreateReportDto } from './create-report.dto';

export class UpdateReportDto extends PartialType(CreateReportDto) {
  @Optional()
  @IsEnum(ReportCategory)
  category: ReportCategory;

  @Optional()
  @IsString()
  description?: string;

  @Optional()
  @IsUUID()
  postId?: string;

  @Optional()
  @IsUUID()
  profileId?: string;
}
