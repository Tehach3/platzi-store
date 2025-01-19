import { Controller, Get, Param, Post, Query, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //para que no se solapen las rutas de los endpoits se debe colocar primero el endpoint de la ruta no dinamica
  @Get('filter')
  productsFilter() {
    return {
        message: 'Soy un filter'
    }
}
@Get('productsList')
getProductList(
  @Query('limit') limit: number = 100, //le agregamos a estos parametros un valor por defecto en caso de que no le pasemos parametros (no es necesario definir el tipo porque ts ya lo interpreta pero para que sea mas legible lo dejamos)
  @Query('offset') offset: number = 0,
  @Query('brand') brand: string,
) {
  return {
      message:'Se obtuvo la lista',
      limit: `${limit}`,
      offset: `${offset}`,
      brand: `${brand}`
  }
}
  //uso de parametros: se debe importar Param para poder usar el decorador que define el uso de parametros
  //se define la ruta y el parametro con el nombre que se debe recibir en el endpoint
  //con el decorador @Param se define el tipo de parametro que se esta recibiendo en este caso seria any (cualquiera)
  @Get(':productsId')
  getProduct(@Param('productsId') productsId: BigInteger) {
    return {
        message:'se obtuvo el producto',
        id: `${productsId}`
    }
  }
  //Para los metodos post: crear el cuerpo del request se usa body, se puede agregar como parametro una firma para agregar correctamente el json pero para 
  //json mas robustos es ineficiente 
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload
    };
  }
}
