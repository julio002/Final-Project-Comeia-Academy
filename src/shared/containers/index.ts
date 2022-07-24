import { ICategoryRepository, IFilmCategoryRepository, IUserRepository } from '@/app/database/repositories';
import IFilmRepository from '@/app/database/repositories/IFilmRepository';
import ILanguageRepository from '@/app/database/repositories/ILanguageRepository';
import { CategoryRepository, UserRepository } from '@/app/database/repositories/implementation';
import FilmCategoryRepository from '@/app/database/repositories/implementation/FilmCategoryRepository';
import FilmRepository from '@/app/database/repositories/implementation/FilmRepository';
import LanguageRepository from '@/app/database/repositories/implementation/LanguageRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository);
container.registerSingleton<IFilmCategoryRepository>("FIlmCategoryRepository", FilmCategoryRepository);
container.registerSingleton<IFilmRepository>("FilmRepository", FilmRepository);
container.registerSingleton<ILanguageRepository>("LanguageRepository", LanguageRepository);

