import RentalService from "@/app/business/services/RentalService"
import { Query } from "@/shared/types/query"
import { Request, Response } from "express"
import { container } from "tsyringe"

class RentalController {
    public async getAll(req: Request, res: Response): Promise<void> {
        
        const { size, page, sort, order, ...filters } = req.query

        const query = {
            size: parseInt(size as string),
            page: parseInt(page as string),
            sort: req.query.sort as string,
            order: req.query.order as string,
            ...filters
        }
        
        const rentalService = container.resolve(RentalService)

        const result = await rentalService.getAll(query)

        res.status(200).send(result)
    }

    public async getById(req: Request, res: Response): Promise<void> {
        const rentalService = container.resolve(RentalService)

        const result = await rentalService.getById(parseInt(req.params.id))

        res.status(200).send(result)
    }

    public async create(req: Request, res: Response): Promise<void> {
        const rentalService = container.resolve(RentalService)

        const result = await rentalService.create(req.body)

        res.status(200).send(result)
    }
    
    public async updateById(req: Request, res: Response): Promise<void> {
        const rentalService = container.resolve(RentalService)

        const result = await rentalService.updateById(parseInt(req.params.id), req.body)

        res.status(200).send(result)
    }

    public async deleteById(req: Request, res: Response): Promise<void> {
        const rentalService = container.resolve(RentalService)

        const result = await rentalService.deleteById(parseInt(req.params.id))

        res.status(200).send(result)
    }
}

export default RentalController