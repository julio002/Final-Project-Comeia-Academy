<<<<<<< HEAD
import { ICategoryRepository, IFilmActorRepository, IFilmCategoryRepository, IUserRepository } from '@/app/database/repositories';
import IFilmRepository from '@/app/database/repositories/IFilmRepository';
import ILanguageRepository from '@/app/database/repositories/ILanguageRepository';
import { CategoryRepository, FilmActorRepository, UserRepository } from '@/app/database/repositories/implementation';
import FilmCategoryRepository from '@/app/database/repositories/implementation/FilmCategoryRepository';
import FilmRepository from '@/app/database/repositories/implementation/FilmRepository';
import LanguageRepository from '@/app/database/repositories/implementation/LanguageRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository);
container.registerSingleton<IFilmCategoryRepository>("FIlmCategoryRepository", FilmCategoryRepository);
container.registerSingleton<IFilmRepository>("FilmRepository", FilmRepository);
container.registerSingleton<ILanguageRepository>("LanguageRepository", LanguageRepository);
container.registerSingleton<IFilmActorRepository>("FilmActorRepository", FilmActorRepository);

=======
import { IAddressRepository, ICustomersRepository,ICityRepository, ICountryRepository, IInventoryRepository, IPaymentsRepository, IStaffRepository, IStoreRepository, IUserRepository, IRentalRepository } from '@/app/database/repositories'
import { AddressRepository, InventoryRepository, CityRepository, CountryRepository, CustomersRepository, PaymentsRepository, StaffRepository, StoreRepository, UserRepository, RentalRepository } from '@/app/database/repositories/implementation'
import { container } from 'tsyringe'

container.registerSingleton<IUserRepository>("UserRepository", UserRepository)
container.registerSingleton<IInventoryRepository>("InventoryRepository", InventoryRepository)
container.registerSingleton<ICustomersRepository>("CustomersRepository", CustomersRepository)
container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository)
container.registerSingleton<ICityRepository>("CityRepository", CityRepository)
container.registerSingleton<ICountryRepository>("CountryRepository", CountryRepository)
container.registerSingleton<IStaffRepository>("StaffRepository", StaffRepository)
container.registerSingleton<IStoreRepository>("StoreRepository", StoreRepository)
container.registerSingleton<IPaymentsRepository>("PaymentsRepository", PaymentsRepository)
container.registerSingleton<IRentalRepository>("RentalRepository", RentalRepository)
>>>>>>> 68dd63e468b8b918ec496ff23d46a0abdb86522c
