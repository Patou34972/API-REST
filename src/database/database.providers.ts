/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://Team-rocket:One34piece@cluster0.7fughys.mongodb.net/?retryWrites=true&w=majority'),
  },
];