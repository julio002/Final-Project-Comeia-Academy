import BaseRepository from "./BaseRepository";
import { Query } from "@/shared/types/query"
import { FilmInput, FilmOutput } from "@/shared/types/interfaces/Film";
import IFilmRepository from "../IFilmRepository";
import {Film} from "../../models";
import { getPagination } from "@/shared/utils/getPagination"

class FilmRepository extends BaseRepository<FilmInput, FilmOutput> implements IFilmRepository{
    constructor(){
        super(Film)
    }

    public async getAll(query: Query, attributes?: string[]): Promise<FilmOutput[]> {

        let { size, page, sort, order, ...filters } = query

        const id = "film_id"
        const {...pagination} = getPagination(id, query)

        // @ts-ignore
        return this.model.findAndCountAll({
            where: {
                ...filters
            },
            include: { all: true },
            attributes,
            ...pagination
        })
    }

}
export default FilmRepository;