import { container } from 'tsyringe';
import { AuthService } from '@/app/business/services';
import { Request, Response } from 'express';

class AuthController {
  public async signUp(req: Request, res: Response): Promise<void> {   
    const authService = container.resolve(AuthService);
    
    const result = await authService.signUp(req.body);
    
    res.status(200).send(result);
  }

  public async signIn(req: Request, res: Response): Promise<void> {
    const authService = container.resolve(AuthService);

    const result = await authService.signIn(req.body);
    
    res.status(200).send(result);
  }
}

export default AuthController;