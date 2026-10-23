/**
 * @typedef {{ colorOrSize: string[], quantity: number }} ProductVariants
 * @typedef {{ id: number, name: string, price: number, image: string, variants: ProductVariants, description: string }} Product
 * @typedef {{ data: Product, meta: object }} ProductResponse
 * @typedef {{ data: Product[], meta: { total: number } }} ProductListResponse
 * @typedef {{ type?: string, title?: string, status?: number, detail?: string, instance?: string, errors?: Array<{field: string, message: string}> }} ProblemDetails
 */

export {};
