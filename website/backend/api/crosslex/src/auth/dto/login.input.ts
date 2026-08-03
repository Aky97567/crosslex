import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

@InputType()
export class LoginInput {
  @Field()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @Field()
  @IsString()
  password: string;
}
