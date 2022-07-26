import { IRentalRepository } from "@/app/database/repositories";
import { RentalInput, RentalOutput } from "@/shared/types/interfaces/Rental";
import { Query } from "@/shared/types/query";
import { Model } from "sequelize-typescript";
import { inject, injectable } from "tsyringe";

@injectable()
class RentalService {
    constructor(
        @inject("RentalRepository")
        private readonly RentalRepository: IRentalRepository
    ) {}

    public async getAll(query: Query): Promise<RentalOutput[]> {
        return await this.RentalRepository.getAll(query)
    }
    
    public async getById(id: number): Promise<RentalOutput|unknown> {
        try { 
            return await this.RentalRepository.getById(id)
        } catch (error) {
            return error
        }
    }
    
    public async create(data: RentalInput): Promise<Model> {
        return await this.RentalRepository.create(data)
    }
    
    public async updateById(id: number,data: RentalInput): Promise<RentalOutput|unknown> {
        try {
            return await this.RentalRepository.updateById(id, data)
        } catch (error) {
            return error
        }
    }
    
    public async deleteById(id: number): Promise<boolean|unknown> {
        try {
            return await this.RentalRepository.deleteById(id)
        } catch (error) {
            return error   
        }
    }
}

export default RentalService