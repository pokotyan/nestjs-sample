/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { SampleRepository } from '../../repository/sample';
import { Sample } from '../../entity/sample';
import { CreateParams } from '../../controller/samples/dto';

@Injectable()
export class SampleService {
  constructor(private sampleRepository: SampleRepository, private connection: Connection) {}

  async findById(sampleId: number): Promise<Sample> {
    return this.sampleRepository.findById(sampleId);
  }

  findAll(): Promise<Sample[]> {
    return this.sampleRepository.find();
  }

  create(params: CreateParams): Promise<Sample> {
    return this.connection.transaction(async (manager) => {
      const sampleRepository = manager.getCustomRepository(SampleRepository);

      return sampleRepository.save({
        ...params,
        created_at: new Date(),
        updated_at: new Date(),
      });
    });
  }
}
