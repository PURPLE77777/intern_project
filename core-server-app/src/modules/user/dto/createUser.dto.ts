import {
	IsEmail,
	IsString,
	MaxLength,
	MinLength,
	IsPhoneNumber,
} from 'class-validator';
import { OmitBaseEntityProperties } from 'share/lib';
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from '../const';
import { User } from '../user.entity';

export class CreateUserDto extends OmitBaseEntityProperties(User) {
	@IsEmail()
	email: string;

	@IsString()
	@MaxLength(PASSWORD_MAX_LENGTH)
	@MinLength(PASSWORD_MIN_LENGTH)
	password: string;

	@IsPhoneNumber()
	phone: string;
}
