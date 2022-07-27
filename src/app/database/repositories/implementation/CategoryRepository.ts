import ICategoryRepository from "../ICategoryRepository";
import BaseRepository from "./BaseRepository";
import { CategoryInput, CategoryOutput } from "@/shared/types/interfaces/Category";
import { Category } from "../../models";

class CategoryRepository extends BaseRepository<CategoryInput, CategoryOutput> implements ICategoryRepository{
    constructor(){
        super(Category)
    }
}
export default CategoryRepository;