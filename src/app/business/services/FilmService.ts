import { IFilmRepository } from "@/app/database/repositories";
import { FilmInput, FilmOutput } from "@/shared/types/interfaces/Film";
import { Model } from "sequelize-typescript";
import { inject, injectable } from "tsyringe";
import { Query } from "@/shared/types/query"

@injectable()
class FilmService {
  constructor(
    @inject("FilmRepository")
    private readonly FilmRepository: IFilmRepository
  ) {}
  public async getAll(query: Query): Promise<FilmOutput[]> {
    return await this.FilmRepository.getAll(query);
  }
  public async getById(id: number): Promise<FilmOutput|unknown> {
    try {
        return await this.FilmRepository.getById(id);
    } catch (error) {
        return error
    }
  }
  public async create(data: FilmInput): Promise<Model> {
    return await this.FilmRepository.create(data);
  }
  public async updateById(id: number, data: FilmInput): Promise<FilmOutput|unknown> {
    try {
        return await this.FilmRepository.updateById(id, data);
    } catch (error) {
        return error
    }
  }
  public async deleteById(id: number): Promise<boolean|unknown> {
    try {
        return await this.FilmRepository.deleteById(id);
    } catch (error) {
        return error
    }
  }
}
export default FilmService;
