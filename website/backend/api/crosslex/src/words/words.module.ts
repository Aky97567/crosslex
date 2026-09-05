import { Module } from '@nestjs/common';
import { WordsService } from './words.service';
import { WordsResolver } from './words.resolver';

@Module({
  providers: [WordsService, WordsResolver]
})
export class WordsModule {}
