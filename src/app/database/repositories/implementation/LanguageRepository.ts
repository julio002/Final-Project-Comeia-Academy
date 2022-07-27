import {
  LanguageInput,
  LanguageOutPut,
} from "@/shared/types/interfaces/Language";
import { BaseRepository } from ".";
import { Language } from "../../models";
import ILanguageRepository from "../ILanguageRepository";

class LanguageRepository
  extends BaseRepository<LanguageInput, LanguageOutPut>
  implements ILanguageRepository
{
  constructor() {
    super(Language);
  }
}
export default LanguageRepository;
