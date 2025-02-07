import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { HashService } from 'modules/hash/hash.service';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { UserErrorMessages } from './const';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './user.entity';
import { USER_REPOSITORY_TOKEN } from './user.providers';

@Injectable()
export class UserService extends BaseCRUDService<User> {
	constructor(
		@Inject(USER_REPOSITORY_TOKEN)
		private readonly userRepository: Repository<User>,
		private readonly hashService: HashService
	) {
		super(userRepository);
	}

	async create(dto: CreateUserDto) {
		const { email, password } = dto;

		const oldUser = await this.userRepository.findOne({
			where: { email },
		});

		if (oldUser) {
			throw new BadRequestException(UserErrorMessages.UserExists);
		}

		dto.password = await this.hashService.encrypt(password);

		return this.userRepository.save(dto);
	}
}
