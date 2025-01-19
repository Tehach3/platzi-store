import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Se define un metodo get sin ruta para accederse desde la raiz (Mala practica tener sin modularizar)
  @Get()
  getHello(): string {
    return 'Hola mundo';
  }
  //se define la ruta para acceder al endpoint
  @Get('nuevo')
  newEndpoint() {
    return 'soy nuevo';
  }
}
