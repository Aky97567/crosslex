import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

@InputType()
export class SignupInput {
  @Field()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @Field()
  @IsString()
  @MinLength(12, { message: 'Password must be at least 12 characters' })
  @MaxLength(128, { message: 'Password must be at most 128 characters' })
  password: string;
}
