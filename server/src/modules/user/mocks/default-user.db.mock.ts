import { getConnection } from 'typeorm';
import { User } from '../models';

export const defaultUserDbMock = async () => await getConnection()
  .createQueryBuilder()
  .insert()
  .into(User)
  .values({
    username: 'superadmin',
    email: 'superadmin@example.com',
    password: 'superadmin',
  })
  .execute();
