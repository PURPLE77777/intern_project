import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from 'modules/user/user.service';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { ProfileErrorMessages } from './const';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './profile.entity';
import { PROFILE_REPOSITORY_TOKEN } from './profile.providers';

@Injectable()
export class ProfileService extends BaseCRUDService<
  Profile,
  CreateProfileDto,
  UpdateProfileDto
> {
  constructor(
    @Inject(PROFILE_REPOSITORY_TOKEN)
    private readonly profileRepository: Repository<Profile>,
    private readonly userService: UserService
  ) {
    super(profileRepository);
  }

  async create(dto: CreateProfileDto) {
    const { userId, username } = dto;

    await this.userService.findOrError(userId);

    const oldProfile = await this.profileRepository.findOne({
      where: { username },
    });

    if (oldProfile) {
      throw new BadRequestException(ProfileErrorMessages.ProfileExists);
    }

    return super.create(dto);
  }

  async findOrError(id: string, errorMessage?: string) {
    const profile = await super.findOne(id);
    if (!profile) {
      throw new NotFoundException(
        errorMessage || ProfileErrorMessages.ProfileNotFound
      );
    }
    return profile;
  }
}
