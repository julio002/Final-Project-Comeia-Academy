import { UserInput, UserOutput } from '@/shared/types/interfaces/User';
import { User } from '../models';
import IBaseRepository from './IBaseRepository';

interface IUserRepository extends IBaseRepository<UserInput, UserOutput> {
  getByEmail(email: string): Promise<User | null>;

  emailExists(email: string): Promise<boolean>;
}

export default IUserRepository;