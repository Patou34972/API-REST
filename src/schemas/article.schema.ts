/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  name: String,
  description: String,
  size: Number,
  price: Number,
  condition: String,
  publication_date: Date,
  picture: String,
});