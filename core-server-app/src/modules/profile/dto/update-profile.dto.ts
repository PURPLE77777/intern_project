import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Role, Sex } from '../const';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @IsOptional()
  @IsUUID()
  userId: string;

  @IsOptional()
  @IsDateString()
  birthday: Date;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsEnum(Sex)
  sex?: Sex;

  @IsOptional()
  @IsString()
  surname: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsBoolean()
  isBlocked?: boolean;
}
