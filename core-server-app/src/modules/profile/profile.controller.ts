import { Controller } from '@nestjs/common';
import { BaseCRUDController } from 'share/base';
import { Routes } from 'share/consts';
import { Profile } from './profile.entity';
import { ProfileService } from './profile.service';

@Controller(Routes.Profile)
export class ProfileController extends BaseCRUDController<Profile> {
	constructor(private readonly profileService: ProfileService) {
		super(profileService);
	}
}
