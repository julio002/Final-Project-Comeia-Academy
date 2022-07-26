import { Query } from "@/shared/types/query"
import { Model } from "sequelize-typescript"

interface IBaseRepository<Input, Output> {
    getAll(query: Query,attributes?: string[]): Promise<Output[]>

    getById(id: number, attributes?: string[]): Promise<Output>

    create(data: Input): Promise<Model>

    updateById(id: number, data: Input): Promise<Output>

    deleteById(id: number): Promise<boolean>
}

export default IBaseRepository
