import CustomersService from "@/app/business/services/CustomersService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class CustomersController {
    public async getAll(req: Request, res: Response): Promise<void> {
        const customersService = container.resolve(CustomersService)

        const result = await customersService.getAll()

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