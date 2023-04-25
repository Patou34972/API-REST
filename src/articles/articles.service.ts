/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Article } from './interfaces/article.interfaces';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';



@Injectable()
export class ArticlesService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateArticleDto: UpdateArticleDto) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @Inject('ARTICLE_MODEL')
    private articleModel: Model<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async findOne(id: number): Promise<Article> {
    return this.articleModel.findById(id).exec();
  }
}