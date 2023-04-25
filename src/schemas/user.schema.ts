/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  name: String,
  password: String,
  
});