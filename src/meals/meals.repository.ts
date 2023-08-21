import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { EntitiyRepository } from 'src/database/entity.repository';
import { Meal, MealDocument } from './entities/meal.entity';

@Injectable()
export class MealRepository extends EntitiyRepository<MealDocument> {
  constructor(@InjectModel(Meal.name) private userModel: Model<MealDocument>) {
    super(userModel);
  }
}
