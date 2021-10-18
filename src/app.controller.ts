import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello') // 里面可以输入路由
  getHello(): string {
    return this.appService.getHello();
  }
}
