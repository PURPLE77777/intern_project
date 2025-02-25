import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { PostService } from 'modules/post/post.service';
import { ProfileService } from 'modules/profile/profile.service';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './report.entity';
import { REPORT_REPOSITORY_TOKEN } from './report.providers';

@Injectable()
export class ReportService extends BaseCRUDService<
  Report,
  CreateReportDto,
  UpdateReportDto
> {
  constructor(
    @Inject(REPORT_REPOSITORY_TOKEN)
    private readonly reportRepository: Repository<Report>,
    private readonly postService: PostService,
    private readonly profileService: ProfileService
  ) {
    super(reportRepository);
  }

  async create(dto: CreateReportDto) {
    const { postId, profileId } = dto;

    if (postId && profileId) {
      throw new BadRequestException();
    }

    if (postId) {
      await this.postService.findOrError(postId);
      return super.create(dto);
    }

    if (profileId) {
      await this.profileService.findOrError(profileId);
      return super.create(dto);
    }

    throw new BadRequestException();
  }
}
