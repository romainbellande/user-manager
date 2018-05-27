import { CustomerProfile } from '../customer-profile.enum';

export interface ICustomerCreate {
  readonly name: string;
  readonly email: string;
  readonly profile: CustomerProfile;
}
