// src/routes/product.routes.js
// Pemetaan lima endpoint produk.

import { Router } from 'express';
import { validateId } from '../middlewares/validate-id.js';
import { validateProductBody } from '../middlewares/validate-request.js';
import {
  listProducts,
  getProduct,
  createProductHandler,
  replaceProductHandler,
  deleteProductHandler,
} from '../controllers/product.controller.js';

export const productRouter = Router();

productRouter.get('/', listProducts);
productRouter.get('/:id', validateId, getProduct);
productRouter.post('/', validateProductBody, createProductHandler);
productRouter.put('/:id', validateId, validateProductBody, replaceProductHandler);
productRouter.delete('/:id', validateId, deleteProductHandler);
