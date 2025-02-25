import { Controller } from '@nestjs/common';
import { Routes } from 'share/consts';
import { IBaseCRUDController } from 'share/interfaces';
import { FindManyOptions } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './report.entity';
import { ReportService } from './report.service';

@Controller(Routes.Reports)
export class ReportController
  implements IBaseCRUDController<Report, CreateReportDto, UpdateReportDto>
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
