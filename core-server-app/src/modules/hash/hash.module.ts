import { Module } from '@nestjs/common';
import { hash, verify } from 'argon2';
import { HashService } from './hash.service';

@Module({
	providers: [
		{
			provide: HashService,
			useValue: new HashService({ hash, verify }),
		},
	],
	exports: [HashService],
})
export class HashModule {}
