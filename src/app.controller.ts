import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('with-trace')
  async withTrace(): Promise<string | void> {
    return await this.appService.withTrace();
  }

  @Get('without-trace')
  async withoutTrace(): Promise<string | void> {
    return this.appService.withoutTrace();
  }
}
