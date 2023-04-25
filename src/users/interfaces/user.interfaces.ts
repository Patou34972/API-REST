/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface User extends Document {
  
  readonly name: String,
  readonly password: String,
}