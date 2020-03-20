import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Header('X-Ac-Api-Revision', 'todo SHA1')
  @Get('status')
  getStatus(): string {
    return this.appService.getStatus();
  }
}
