import { Profile } from 'modules/profile/profile.entity';
import { BaseEntity } from 'share/base';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
  })
  phone: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @OneToMany(() => Profile, profile => profile.user)
  profiles: Profile[];
}
