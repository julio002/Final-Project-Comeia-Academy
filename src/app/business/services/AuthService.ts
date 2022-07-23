import { inject, injectable } from 'tsyringe';

import { EmailAlreadyInUseError, InvalidCredentialsError } from "@/shared/errors/";
import { PasswordFacade, TokenFacade } from "../facades/";
import { User } from "@/app/database/models/";
import { IUserRepository } from "@/app/database/repositories/";
import { AuthSignInReqDTO, AuthSignResDTO, AuthSignUpReqDTO } from '@/app/api/dtos/AuthDTO';

@injectable()
class AuthService {
    constructor(
        @inject("UserRepository")
        private readonly userRepository: IUserRepository
    ) {}

    public async signUp({ name, email, password }: AuthSignUpReqDTO): Promise<AuthSignResDTO> {
        if (await this.userRepository.emailExists(email)) {
            throw new EmailAlreadyInUseError();
        }

        const user = await this.userRepository.create({
            name,
            email,
            password: PasswordFacade.hash(password),
        }) as User;

        return AuthService.generateToken(user);
    }

    public async signIn({ email, password }: AuthSignInReqDTO): Promise<AuthSignResDTO> {
        const user = await this.userRepository.getByEmail(email);

        if (!user) {
            throw new InvalidCredentialsError();
        }

        const passwordMatches = PasswordFacade.compare(password, user.password);

        if (!passwordMatches) {
            throw new InvalidCredentialsError();
        }

        return AuthService.generateToken(user);
    }

    private static async generateToken(user: User): Promise<AuthSignResDTO> {
        const userData = {
            id: user.id,
            email: user.email,
            name: user.name,
        };

        const authData = {
            user: userData,
            token: await TokenFacade.sign(userData, {
                expiresIn: "24h",
            }),
        };

        return authData;
    }
}

export default AuthService;
