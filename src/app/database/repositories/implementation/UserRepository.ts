import BaseRepository from './BaseRepository'
import { User } from '@/app/database/models'
import IUserRepository from '../IUserRepository'
import { UserInput, UserOutput } from '@/shared/types/interfaces/User'

class UserRepository extends BaseRepository<UserInput, UserOutput> implements IUserRepository {
  constructor() {
    super(User)
  }

  public async getByEmail(email: string): Promise<User | null> {
    const user = await User.findOne({
      where: { email },
    })
    
    return user
  }

  public async emailExists(email: string): Promise<boolean> {
    const user = await this.getByEmail(email)

    return user !== null
  }
}

export default UserRepository