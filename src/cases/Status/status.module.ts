import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from 'src/entities/status.entity';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

@Module({
  providers: [StatusService],
  controllers: [StatusController],
  imports: [TypeOrmModule.forFeature([Status])],
})
export class StatusModule {}
