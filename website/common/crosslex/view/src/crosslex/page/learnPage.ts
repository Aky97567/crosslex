import { ContentModules } from '../module';

export type ContentModule = {
  moduleType: 'content';
  modules: ContentModules[];
};

export type LearnPageContent = {
  content: ContentModule;
};
