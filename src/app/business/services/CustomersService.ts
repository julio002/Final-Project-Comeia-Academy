import { inject, injectable } from 'tsyringe';

import {
    EmailAlreadyInUseError,
    InvalidCredentialsError,
    ResourceNotFoundError
} from "@/shared/errors/";
import { IBaseRepository } from "@/app/database/repositories/";
import { CustomersOutput } from "@/app/database/models/CustomersModel";

@injectable()
class CustomersService {
    constructor(
        @inject("BaseRepository")
        private readonly CustomersRepository: IBaseRepository
    ) {}

    public async getAll(): Promise<{rows:CustomersOutput[], count: number}> => {
        if (await this.const.emailExists(email)) {
            throw new EmailAlreadyInUseError()
        }

        return await CustomersRepository.getAll()
        
    }
}

export default CustomersService;
