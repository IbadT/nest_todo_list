import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  };

  @Get('test')
  getNumber(): number {
    return this.appService.getNumber();
  };

  @Get('s')
  sum(): string {
    return '1' + this.appService.getHello();
  }
}
