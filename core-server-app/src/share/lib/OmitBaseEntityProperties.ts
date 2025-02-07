import { OmitType } from '@nestjs/mapped-types';
import { BaseEntity } from 'share/base';

export const OmitBaseEntityProperties = <T extends BaseEntity>(
	Entity: {
		new (): T;
	},
	fields?: (keyof Omit<T, 'id' | 'createdAt' | 'updatedAt'>)[]
) => OmitType(Entity, ['id', 'createdAt', 'updatedAt', ...fields]);
