import { Body, Controller, Get,Post,Patch,Param,Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/')
  logBody(@Body() body:any): any {
    return body;
  }

  @Patch(':id')
  logUpdateId(@Param('id') id:number):number {
    return id;
  }

  @Delete(':id')
  delete(@Param('id') id:number): number{
    return id;
  }


}
