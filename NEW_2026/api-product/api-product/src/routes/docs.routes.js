// src/routes/docs.routes.js
// Swagger UI di /api-docs dan OpenAPI JSON di /openapi.json

import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { parse } from 'yaml';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Muat dan parse YAML sekali saat startup
const yamlPath = join(__dirname, '../../openapi.yaml');
let openapiDocument;
try {
  openapiDocument = parse(readFileSync(yamlPath, 'utf8'));
} catch (err) {
  console.error('[docs] Failed to load openapi.yaml:', err.message);
  throw err; // Gagal saat startup — bukan saat request
}

export const docsRouter = Router();

docsRouter.get('/openapi.json', (_req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8').json(openapiDocument);
});

docsRouter.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(openapiDocument, {
    explorer: true,
    customSiteTitle: 'Product API Docs',
  }),
);
