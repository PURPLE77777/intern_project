import {
	IsDateString,
	IsEnum,
	IsOptional,
	IsString,
	IsUUID,
} from 'class-validator';
import { OmitBaseEntityProperties } from 'share/lib';
import { Role, Sex } from '../const';
import { Profile } from '../profile.entity';

export class CreateProfileDto extends OmitBaseEntityProperties(Profile) {
	@IsUUID()
	userId: string;

	@IsDateString()
	birthday: Date;

	@IsString()
	name: string;

	@IsOptional()
	@IsEnum(Role)
	role: Role;

	@IsOptional()
	@IsEnum(Sex)
	sex: Sex;

	@IsString()
	surname: string;

	@IsString()
	username: string;
}
