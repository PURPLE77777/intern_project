import { Type } from '@nestjs/common';
import { OmitType } from '@nestjs/mapped-types';
import { BaseEntity } from 'share/base';

export const OmitProperties = <T extends BaseEntity>(Entity: Type<T>) =>
  OmitType(Entity, ['id', 'createdAt', 'updatedAt']);
