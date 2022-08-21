import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeormOrderByEnum } from 'src/common/constants/sort.enum';
import { CreateUsersDto } from './dto/create-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async create(createUsersDto: CreateUsersDto, user: any) {
    const createUsersData: any = {
      ...createUsersDto,
    };
    const pharmacy = await this.usersRepository.save(createUsersData);
    return pharmacy.id;
  }

  listAll() {
    return this.usersRepository
      .createQueryBuilder('users')
      .select(['users.id', 'users.name'])
      .orderBy('users.name', TypeormOrderByEnum.ASCENDING)
      .getMany();
  }
}
