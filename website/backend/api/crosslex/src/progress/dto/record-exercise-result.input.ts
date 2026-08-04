import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsUUID } from 'class-validator';

@InputType()
export class RecordExerciseResultInput {
  @Field()
  @IsUUID()
  exerciseId: string;

  @Field()
  @IsBoolean()
  correct: boolean;
}
