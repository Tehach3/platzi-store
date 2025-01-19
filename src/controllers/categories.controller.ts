import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    //endpoint con mas de un parametro
      @Get(':categoriesId/products/:productsId/')
      getcategories(
          @Param('categoriesId') categoriesId: string,
          @Param('productsId') productsId: string,
      ) {
        return `El id del producto es: ${productsId} y la categoria es ${categoriesId}`;
      }
}
