import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type MealDocument = Meal & Document;

@Schema()
export class Meal {
  // @Prop({ type: mongoose.Schema.Types.ObjectId })
  // _id: string;
  @Prop({ required: true, unique: true }) //번호
  number: number;
  @Prop()
  name: string; //식품이름
  @Prop()
  maker: string; //제조사명
  @Prop()
  sampling_region: string;
  @Prop()
  serving_size: number | null; //총내용량
  @Prop()
  calories: number | null; //열량(kcal)
  @Prop()
  carbs: number | null; //탄수화물(g)
  @Prop()
  protein: number | null; //단백질(g)
  @Prop()
  fat: number | null; //지방(g)
  @Prop()
  sugars: number | null; //당류(g)
  @Prop()
  natrium: number | null; //나트륨(mg)
  @Prop()
  cholesterol: number | null; //콜레스테롤(mg)
  @Prop()
  saturated_fat: number | null; //포화지방산(g)
  @Prop()
  transfat: number | null; //트랜스지방(g)
}

export const MealSchema = SchemaFactory.createForClass(Meal);
