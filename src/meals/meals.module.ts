import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { MealRepository } from './meals.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Meal, MealSchema } from './entities/meal.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Meal.name, schema: MealSchema }]),
  ],
  controllers: [MealsController],
  providers: [MealsService, MealRepository],
})
export class MealsModule {}
