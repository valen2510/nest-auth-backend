import { User } from '../entities/user.entity';

export class LoginResponse {
  user: User;
  token: string;
}
