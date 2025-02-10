import { Optional } from '@nestjs/common';
import { IsEnum, IsString, IsUUID } from 'class-validator';
import { OmitProperties } from 'share/lib';
import { ReportCategory } from '../const';
import { Report } from '../report.entity';

export class CreateReportDto extends OmitProperties(Report) {
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
