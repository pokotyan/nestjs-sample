import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { SampleModule } from './module/sample';
import { Sample } from './entity/sample';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SampleModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'rem',
      entities: [Sample],
      synchronize: false,
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
