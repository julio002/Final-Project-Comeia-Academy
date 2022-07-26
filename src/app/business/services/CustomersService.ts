import { inject, injectable } from 'tsyringe'

import { ICustomersRepository } from "@/app/database/repositories/"
import { CustomersInput, CustomersOutput } from '@/shared/types/interfaces/Customers'
import { Model } from 'sequelize-typescript'
import { Query } from '@/shared/types/query'

@injectable()
class CustomersService {
    constructor(
        @inject("CustomersRepository")
        private readonly CustomersRepository: ICustomersRepository
    ) {}

    public async getAll(query: Query): Promise<CustomersOutput[]> {
        return await this.CustomersRepository.getAll(query)  
    }

    public async getById(id: number): Promise<CustomersOutput|unknown> {
        try {
            return await this.CustomersRepository.getById(id)  
        } catch (error) {
            return error
        }
    }

    public async create(data: CustomersInput): Promise<Model> {
        return await this.CustomersRepository.create(data)  
    }

    public async updateById(id: number, data: CustomersInput): Promise<CustomersOutput|unknown> {
        try {
            return await this.CustomersRepository.updateById(id, data)  
        } catch (error) {
            return error
        }
    }

    public async deleteById(id: number): Promise<boolean|unknown> {
        try {
            return await this.CustomersRepository.deleteById(id)  
        } catch (error) {
            return error
        }
    }
}

export default CustomersService
