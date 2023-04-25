/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { articlesProviders } from './articles.providers';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports: [DatabaseModule],
  controllers: [ArticlesController],
  providers: [
    ArticlesService,
    ...articlesProviders,
  ],
})
export class ArticlesModule {}

