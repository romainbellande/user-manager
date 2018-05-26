import { getConnection } from 'typeorm';
import { User } from '../models/user.entity';
import { userCreateMock } from './user-create.mock';

export const userDbMock = async () => await getConnection()
  .createQueryBuilder()
  .insert()
  .into(User)
  .values(userCreateMock)
  .execute();

export class UserDbMock {
  private id: number;

  static async create() {
    return await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values(userCreateMock)
    .execute();
  }

  static async remove() {
    return await getConnection().createQueryBuilder()
    .delete()
    .from(User)
    .where('username = :username', { username: userCreateMock.username })
    .execute();
  }
}
