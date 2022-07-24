import { inject, injectable } from 'tsyringe'

import { ICustomersRepository } from "@/app/database/repositories/"
import { CustomersInput, CustomersOutput } from '@/shared/types/interfaces/Customers'
import { Model } from 'sequelize-typescript'

@injectable()
class CustomersService {
    constructor(
        @inject("CustomersRepository")
        private readonly CustomersRepository: ICustomersRepository
    ) {}

    public async getAll(): Promise<CustomersOutput[]> {
        return await this.CustomersRepository.getAll()  
    }

    public async getById(id: number): Promise<CustomersOutput> {
        return await this.CustomersRepository.getById(id)  
    }

    public async create(data: CustomersInput): Promise<Model> {
        return await this.CustomersRepository.create(data)  
    }

    public async updateById(id: number, data: CustomersInput): Promise<CustomersOutput> {
        return await this.CustomersRepository.updateById(id, data)  
    }

    public async deleteById(id: number): Promise<boolean> {
        return await this.CustomersRepository.deleteById(id)  
    }
}

export default CustomersService
