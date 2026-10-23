// src/controllers/product.controller.js
// HTTP request/response layer.
// Tidak boleh ada SQL di sini.

import {
  getAllProducts,
  getProductById,
  createProduct,
  replaceProduct,
  removeProduct,
} from '../services/product.service.js';
import { successResponse } from '../utils/product-response.js';

/** GET /api/products */
export async function listProducts(req, res, next) {
  try {
    const { data, total } = await getAllProducts();
    res
      .status(200)
      .setHeader('Content-Type', 'application/json; charset=utf-8')
      .json(successResponse(data, { total }));
  } catch (err) {
    next(err);
  }
}

/** GET /api/products/:id */
export async function getProduct(req, res, next) {
  try {
    const product = await getProductById(req.productId);
    res
      .status(200)
      .setHeader('Content-Type', 'application/json; charset=utf-8')
      .json(successResponse(product));
  } catch (err) {
    next(err);
  }
}

/** POST /api/products */
export async function createProductHandler(req, res, next) {
  try {
    const product = await createProduct(req.validatedBody);
    res
      .status(201)
      .setHeader('Content-Type', 'application/json; charset=utf-8')
      .setHeader('Location', `/api/products/${product.id}`)
      .json(successResponse(product));
  } catch (err) {
    next(err);
  }
}

/** PUT /api/products/:id */
export async function replaceProductHandler(req, res, next) {
  try {
    const product = await replaceProduct(req.productId, req.validatedBody);
    res
      .status(200)
      .setHeader('Content-Type', 'application/json; charset=utf-8')
      .json(successResponse(product));
  } catch (err) {
    next(err);
  }
}

/** DELETE /api/products/:id */
export async function deleteProductHandler(req, res, next) {
  try {
    await removeProduct(req.productId);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}
