import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Routes } from 'share/consts';
import { IBaseCRUD } from 'share/interfaces';
import { FindManyOptions } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';

@Controller(Routes.Profile)
export class ProfileController
  implements IBaseCRUD<Profile, CreateProfileDto, UpdateProfileDto>
{
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getAll(@Query() query: FindManyOptions<Profile>) {
    return this.profileService.findAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.profileService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateProfileDto) {
    return this.profileService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProfileDto) {
    return this.profileService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profileService.remove(id);
  }
}
