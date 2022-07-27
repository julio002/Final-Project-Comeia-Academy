import { IFilmRepository } from "@/app/database/repositories";
import { FilmInput, FilmOutput } from "@/shared/types/interfaces/Film";
import { Model } from "sequelize-typescript";
import { inject, injectable } from "tsyringe";

@injectable()
class FilmService {
  constructor(
    @inject("FilmRepository")
    private readonly FilmRepository: IFilmRepository
  ) {}
  public async getAll(): Promise<FilmOutput[]> {
    return await this.FilmRepository.getAll();
  }
  public async getById(id: number): Promise<FilmOutput> {
    return await this.FilmRepository.getById(id);
  }
  public async create(data: FilmInput): Promise<Model> {
    return await this.FilmRepository.create(data);
  }
  public async updateById(id: number, data: FilmInput): Promise<FilmOutput> {
    return await this.FilmRepository.updateById(id, data);
  }
  public async deleteById(id: number): Promise<boolean> {
    return await this.FilmRepository.deleteById(id);
  }
}
export default FilmService;
