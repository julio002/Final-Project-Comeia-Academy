import { LanguageInput, LanguageOutPut } from "@/shared/types/interfaces/Language";
import IBaseRepository from "./IBaseRepository";

interface ILanguageRepository extends IBaseRepository<LanguageInput, LanguageOutPut>{}

export default ILanguageRepository