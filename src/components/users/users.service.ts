import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeormOrderByEnum } from 'src/common/constants/sort.enum';
import { Repository } from 'typeorm';
import { CreateUsersDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUsersDto: CreateUsersDto) {
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
