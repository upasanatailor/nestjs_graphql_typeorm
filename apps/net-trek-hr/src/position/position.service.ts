import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePositionInput } from './dto/create-position.input';
import { UpdatePositionInput } from './dto/update-position.input';
import { Position } from './entities/position.entity';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private positionRepository: Repository<Position>
  ) {}
  create(position: CreatePositionInput) {
    let pos = this.positionRepository.create(position);
    return this.positionRepository.save(pos);
  }

  async findAll(): Promise<Position[]> {
    return this.positionRepository.find({
      relations: ['employee'],
    });
  }

  async findOne(id: string): Promise<Position> {
    return this.positionRepository.findOne({
      where: { id: id },

      relations: ['employee'],
    });
  }

  update(id: string, updatePositionInput: UpdatePositionInput) {
    return `This action updates a #${id} position`;
  }

  remove(id: string) {
    return `This action removes a #${id} position`;
  }
}
