import { IAddressRepository, IInventoryRepository, IUserRepository } from '@/app/database/repositories';
import ICustomersRepository from '@/app/database/repositories/ICustomersRepository';
import { AddressRepository, CustomersRepository, UserRepository } from '@/app/database/repositories/implementation';
import InventoryRepository from '@/app/database/repositories/implementation/InventoryRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository)
container.registerSingleton<IInventoryRepository>("InventoryRepository", InventoryRepository);
container.registerSingleton<ICustomersRepository>("CustomersRepository", CustomersRepository)
container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository)