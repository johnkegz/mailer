import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  sendMail(): string {
    return this.appService.sendMail();
  }

  @Post("mailgun-webhook")
  recieveWebHook(@Body() mailGunData: any) {
    return this.appService.recieveWebHook(mailGunData);
  }
}
