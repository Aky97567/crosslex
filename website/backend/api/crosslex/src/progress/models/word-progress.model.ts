import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WordProgress {
  @Field()
  id: string;

  @Field()
  wordId: string;

  @Field()
  wordKey: string;

  @Field(() => Int)
  seenCount: number;

  @Field(() => Int)
  correctCount: number;

  @Field()
  lastSeenAt: Date;
}
