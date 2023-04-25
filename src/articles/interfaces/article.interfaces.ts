/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Article extends Document {
  
  readonly name: String,
  readonly description: String,
  readonly size: Number,
  readonly price: Number,
  readonly condition: String,
  readonly publication_date: Date,
  readonly picture: String,
}