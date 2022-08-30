import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createHello(): string {
    console.log('hello');
    return this.appService.getHello();
  }

  @Post('22222')
  createHello22222(): string {
    console.log('hello');
    return this.appService.getHello();
  }
}
