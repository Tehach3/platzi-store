import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    //endpoint con mas de un parametro
      @Get(':categoriesId/products/:productsId/')
      getcategories(
          @Param('categoriesId') categoriesId: string,
          @Param('productsId') productsId: string,
      ) {
        return {
            message:'se obtuvo las categorias',
            categorieId:`${categoriesId}`,
            productId:`${productsId}`
        }
        
      }
}
