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
import { CreateProfileDto } from './dto/createProfile.dto';
import { Profile } from './profile.entity';
import { PROFILE_REPOSITORY_TOKEN } from './profile.providers';
import { UserErrorMessages } from 'modules/user/const';

@Injectable()
export class ProfileService extends BaseCRUDService<Profile> {
	constructor(
		@Inject(PROFILE_REPOSITORY_TOKEN)
		private readonly profileRepository: Repository<Profile>,
		private readonly userService: UserService
	) {
		super(profileRepository);
	}

	async create(dto: CreateProfileDto) {
		const { userId, username } = dto;

		const user = await this.userService.findOne(userId);

		if (!user) {
			throw new NotFoundException(UserErrorMessages.UserNotFound);
		}

		const oldProfile = await this.profileRepository.findOne({
			where: { username },
		});

		if (oldProfile) {
			throw new BadRequestException(ProfileErrorMessages.ProfileExists);
		}

		return this.profileRepository.save(dto);
	}
}
