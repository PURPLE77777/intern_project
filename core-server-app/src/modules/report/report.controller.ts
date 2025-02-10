import { Controller } from '@nestjs/common';
import { Routes } from 'share/consts';
import { IBaseCRUD } from 'share/interfaces';
import { FindManyOptions } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './report.entity';
import { ReportService } from './report.service';

@Controller(Routes.Report)
export class ReportController
  implements IBaseCRUD<Report, CreateReportDto, UpdateReportDto>
{
  constructor(private readonly reportService: ReportService) {}

  getAll(query: FindManyOptions<Report>) {
    return this.reportService.findAll(query);
  }

  getOne(id: string) {
    return this.reportService.findOne(id);
  }

  create(dto: CreateReportDto) {
    return this.reportService.create(dto);
  }

  update(id: string, dto: UpdateReportDto) {
    return this.reportService.update(id, dto);
  }

  remove(id: string) {
    return this.remove(id);
  }
}
