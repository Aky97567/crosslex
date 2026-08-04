import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProgressService } from './progress.service';
import { RecordExerciseResultInput } from './dto/record-exercise-result.input';
import { WordProgress } from './models/word-progress.model';

@UseGuards(JwtAuthGuard)
@Resolver()
export class ProgressResolver {
  constructor(private readonly progressService: ProgressService) {}

  @Mutation(() => WordProgress)
  async recordExerciseResult(
    @Args('input') input: RecordExerciseResultInput,
    @CurrentUser() user: { userId: string },
  ): Promise<WordProgress> {
    return this.progressService.recordExerciseResult(user.userId, input);
  }

  @Query(() => [WordProgress])
  async myProgress(
    @CurrentUser() user: { userId: string },
  ): Promise<WordProgress[]> {
    return this.progressService.getMyProgress(user.userId);
  }
}
