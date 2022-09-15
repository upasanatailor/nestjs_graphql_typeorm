import { Module } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionResolver } from './position.resolver';
import { Position } from './entities/position.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PositionResolver, PositionService],
  imports: [TypeOrmModule.forFeature([Position])],
  exports: [PositionService],
})
export class PositionModule {}
