import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { SampleService } from '../../service/sample/service';
import { FindByIdParams, CreateParams } from './dto';

@Controller('sample')
export class SampleController {
  constructor(private sampleService: SampleService) {}

  @Get(':sample_id')
  findById(@Param() params: FindByIdParams) {
    return this.sampleService.findById(params.sample_id);
  }

  @Get()
  findAll() {
    return this.sampleService.findAll();
  }

  @Post()
  create(@Body() params: CreateParams) {
    return this.sampleService.create(params);
  }
}
