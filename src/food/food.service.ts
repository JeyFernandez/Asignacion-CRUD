import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>
  ){}


  async create(createFoodDto: CreateFoodDto) {
    const food = await this.foodRepository.create(createFoodDto)
    await this.foodRepository.save(food)

    return food;
  }

  findAll() {
    return this.foodRepository.find();
  }

  findOne(id: string) {
    return this.foodRepository.findOneBy({id});
  }

  async update(id: string, updateFoodDto: CreateFoodDto) {
    const findFood = await this.findOne(id);
    const updateFood = await this.foodRepository.merge(
      findFood,
      updateFoodDto
    )
    return this.foodRepository.save(updateFood);
  }

  async remove(id: string) {
    const food = await this.findOne(id);
    await this.foodRepository.remove(food);
    return'Food is removed successfully';
  }
}
