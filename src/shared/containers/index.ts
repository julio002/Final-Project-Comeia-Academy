import { IAddressRepository, ICustomersRepository,ICityRepository, ICountryRepository, IInventoryRepository, IPaymentsRepository, IStaffRepository, IStoreRepository, IUserRepository } from '@/app/database/repositories';
import { AddressRepository, InventoryRepository, CityRepository, CountryRepository, CustomersRepository, PaymentsRepository, StaffRepository, StoreRepository, UserRepository } from '@/app/database/repositories/implementation';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository)
container.registerSingleton<IInventoryRepository>("InventoryRepository", InventoryRepository);
container.registerSingleton<ICustomersRepository>("CustomersRepository", CustomersRepository)
container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository)
container.registerSingleton<ICityRepository>("CityRepository", CityRepository)
container.registerSingleton<ICountryRepository>("CountryRepository", CountryRepository)
container.registerSingleton<IStaffRepository>("StaffRepository", StaffRepository)
container.registerSingleton<IStoreRepository>("StoreRepository", StoreRepository)
container.registerSingleton<IPaymentsRepository>("PaymentsRepository", PaymentsRepository)