import { IAddressRepository, ICityRepository, IInventoryRepository, IUserRepository } from '@/app/database/repositories';
import ICountryRepository from '@/app/database/repositories/ICountryRepository';
import ICustomersRepository from '@/app/database/repositories/ICustomersRepository';
import { AddressRepository, CityRepository, CountryRepository, CustomersRepository, UserRepository } from '@/app/database/repositories/implementation';
import InventoryRepository from '@/app/database/repositories/implementation/InventoryRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository)
container.registerSingleton<IInventoryRepository>("InventoryRepository", InventoryRepository);
container.registerSingleton<ICustomersRepository>("CustomersRepository", CustomersRepository)
container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository)
container.registerSingleton<ICityRepository>("CityRepository", CityRepository)
container.registerSingleton<ICountryRepository>("CountryRepository", CountryRepository)