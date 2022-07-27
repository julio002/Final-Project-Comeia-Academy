import FilmService from "@/app/business/services/FilmService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class FilmController {
  public async getAll(req: Request, res: Response): Promise<void> {

    const { size, page, sort, order, ...filters } = req.query

    const query = {
        size: parseInt(size as string),
        page: parseInt(page as string),
        sort: req.query.sort as string,
        order: req.query.order as string,
        ...filters
    }

    const filmService = container.resolve(FilmService);

    const result = await filmService.getAll(query);

    res.status(200).send(result);
  }
  public async getById(req: Request, res: Response): Promise<void> {
    const filmService = container.resolve(FilmService);

    const result = await filmService.getById(parseInt(req.params.id));

    res.status(200).send(result);
  }
  public async create(req: Request, res: Response): Promise<void> {
    const filmService = container.resolve(FilmService);

    const result = await filmService.create(req.body);

    res.status(200).send(result);
  }
  public async updateById(req: Request, res: Response): Promise<void> {
    const filmService = container.resolve(FilmService);

    const result = await filmService.updateById(parseInt(req.params.id),req.body);

    res.status(200).send(result);
  }
  public async deleteById(req: Request, res: Response): Promise<void> {
    const filmService = container.resolve(FilmService);

    const result = await filmService.deleteById(parseInt(req.params.id));
    
    res.status(200).send(result);
  }
}
export default FilmController;
