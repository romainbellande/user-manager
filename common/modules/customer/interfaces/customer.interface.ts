import { CustomerProfile } from '../customer-profile.enum';

export interface ICustomer {
  id: number;
  name: string;
  email: string;
  profile: CustomerProfile;
}
