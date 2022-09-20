import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTerminationInput } from './dto/create-termination.input';
import { UpdateTerminationInput } from './dto/update-termination.input';
import { Termination } from './entities/termination.entity';

@Injectable()
export class TerminationService {
  constructor(
    @InjectRepository(Termination)
    private terminationRepository: Repository<Termination>
  ) {}
  create(termination: CreateTerminationInput) {
    console.log('employeeid is', termination);
    let term = this.terminationRepository.create(termination);
    console.log('term', term);
    return this.terminationRepository.save(term);
  }

  async findAll(): Promise<Termination[]> {
    return this.terminationRepository.find({
      relations: ['employee'],
    });
  }

  async findOne(id: string): Promise<Termination> {
    return this.terminationRepository.findOne({
      where: { id: id },
      relations: ['employee'],
    });
  }

  update(id: string, updateTerminationInput: UpdateTerminationInput) {
    return `This action updates a #${id} termination`;
  }

  remove(id: string) {
    return `This action removes a #${id} termination`;
  }
}
