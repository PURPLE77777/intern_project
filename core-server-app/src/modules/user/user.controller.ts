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
import { ApiBody } from '@nestjs/swagger';
import { IBaseCRUD } from 'share/interfaces';
import { FindManyOptions } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController
  implements IBaseCRUD<User, CreateUserDto, UpdateUserDto>
{
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(@Query() query: FindManyOptions<User>) {
    return this.userService.findAll(query);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @ApiBody({ type: UpdateUserDto, description: 'UpdateUserDto description' })
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
