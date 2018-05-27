import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsAlphanumeric, IsEmail, MinLength, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

import { ICustomer, CustomerProfile } from '../../common';

@Entity()
export class Customer implements ICustomer {
  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column('text', { unique: true })
  name: string;

  @ApiModelProperty()
  @Column('text', { unique: true })
  @IsEmail()
  email: string;

  @ApiModelProperty()
  @Column('integer')
  @IsNumber()
  profile: CustomerProfile;
}
