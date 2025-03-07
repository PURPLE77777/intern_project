import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { HashService } from 'modules/hash/hash.service';
import { BaseCRUDService } from 'share/base';
import { Repository } from 'typeorm';
import { UserErrorMessages } from './const';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { USER_REPOSITORY_TOKEN } from './user.providers';

@Injectable()
export class UserService extends BaseCRUDService<
  User,
  CreateUserDto,
  UpdateUserDto
> {
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

    return super.create(dto);
  }

  async findOrError(id: string) {
    const user = await super.findOne(id);
    if (!user) {
      throw new NotFoundException(UserErrorMessages.UserNotFound);
    }
    return user;
  }
}
