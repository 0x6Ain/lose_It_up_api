import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { EntitiyRepository } from 'src/database/entity.repository';

import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserRepository extends EntitiyRepository<UserDocument> {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    super(userModel);
  }
}
