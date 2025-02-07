import { Controller } from '@nestjs/common';
import { BaseCRUDController } from 'share/base';
import { Routes } from 'share/consts';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller(Routes.User)
export class UserController extends BaseCRUDController<User> {
	constructor(private readonly userService: UserService) {
		super(userService);
	}
}
