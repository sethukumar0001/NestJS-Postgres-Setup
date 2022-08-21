import { EntityRepository, Repository } from 'typeorm';
import { UserEntities } from '../entities/users.entities';

@EntityRepository(UserEntities)
export class UsersRepository extends Repository<UserEntities> {}
