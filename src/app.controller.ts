import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async sendMail(): Promise<any> {
    return await this.appService.sendEmail()
  }

  @Get('mailgun-webhook')
  recieveWebHook() {
    return this.appService.recieveWebHook();
  }
}
