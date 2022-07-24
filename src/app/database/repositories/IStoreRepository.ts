import { StoreInput, StoreOutput } from "@/shared/types/interfaces/Store";
import IBaseRepository from "./IBaseRepository";

interface StoreRepository extends IBaseRepository<StoreInput, StoreOutput> {}

export default StoreRepository