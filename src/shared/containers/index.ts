import { ICategoryRepository, IFilmCategoryRepository, IUserRepository } from '@/app/database/repositories';
import { CategoryRepository, UserRepository } from '@/app/database/repositories/implementation';
import FilmCategoryRepository from '@/app/database/repositories/implementation/FilmCategoryRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository);
container.registerSingleton<IFilmCategoryRepository>("FIlmCategoryRepository", FilmCategoryRepository);
