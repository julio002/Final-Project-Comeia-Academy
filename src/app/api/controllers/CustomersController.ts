import CustomersService from "@/app/business/services/CustomersService"
import { Request, Response } from "express"
import { container } from "tsyringe"

class CustomersController {
    public async getAll(req: Request, res: Response): Promise<void> {

        const { size, page, sort, order, ...filters } = req.query

        const query = {
            size: parseInt(size as string),
            page: parseInt(page as string),
            sort: req.query.sort as string,
            order: req.query.order as string,
            ...filters
        }

        const customersService = container.resolve(CustomersService)

        const result = await customersService.getAll(query)

        res.status(200).send(result)
    }

    public async getById(req: Request, res: Response): Promise<void> {
        const customersService = container.resolve(CustomersService)

        const result = await customersService.getById(parseInt(req.params.id))

        res.status(200).send(result)
    }

    public async create(req: Request, res: Response): Promise<void> {
        const customersService = container.resolve(CustomersService)

        const result = await customersService.create(req.body)

        res.status(200).send(result)
    }

    public async updateById(req: Request, res: Response): Promise<void> {
        const customersService = container.resolve(CustomersService)

        const result = await customersService.updateById(parseInt(req.params.id), req.body)

        res.status(200).send(result)
    }

    public async deleteById(req: Request, res: Response): Promise<void> {
        const customersService = container.resolve(CustomersService)

        const result = await customersService.deleteById(parseInt(req.params.id))

        res.status(200).send(result)
    }

}

export default CustomersController