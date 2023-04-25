/* eslint-disable prettier/prettier */
import { Connection } from 'mongoose';
import { ArticleSchema } from 'src/schemas/article.schema';

export const articlesProviders = [
  {
    provide: 'ARTICLE_MODEL',
    useFactory: (connection: Connection) => connection.model('Article', ArticleSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];