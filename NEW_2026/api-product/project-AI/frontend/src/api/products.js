import './types.js';

const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL;
export const API_BASE_URL = (configuredBaseUrl || 'http://localhost:3000').replace(/\/$/, '');

export class ApiError extends Error {
  constructor(problem, fallbackStatus = 0) {
    super(problem.title || 'Permintaan tidak dapat diproses');
    this.name = 'ApiError';
    this.problem = problem;
    this.status = problem.status || fallbackStatus;
  }
}

export function unwrapProduct(envelope) {
  if (!envelope || !envelope.data || Array.isArray(envelope.data)) {
    throw new ApiError({ title: 'Respons API tidak valid', status: 502 });
  }
  return envelope.data;
}

export function unwrapProductList(envelope) {
  if (!envelope || !Array.isArray(envelope.data) || !envelope.meta || !Number.isInteger(envelope.meta.total)) {
    throw new ApiError({ title: 'Respons API tidak valid', status: 502 });
  }
  return { products: envelope.data, total: envelope.meta.total };
}

async function request(path, { method = 'GET', body, signal } = {}) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      signal,
      headers: body ? { 'Content-Type': 'application/json' } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch (error) {
    if (error.name === 'AbortError') throw error;
    throw new ApiError({ title: 'Tidak dapat terhubung ke server. Periksa koneksi Anda lalu coba lagi.' });
  }

  if (response.status === 204) return undefined;

  const contentType = response.headers.get('content-type') || '';
  let payload = null;
  try {
    payload = contentType.includes('json') ? await response.json() : null;
  } catch {
    // Respons invalid akan ditangani sebagai error aman di bawah.
  }

  if (!response.ok) {
    const problem = contentType.includes('application/problem+json') && payload
      ? payload
      : { status: response.status, title: 'Terjadi kesalahan saat memproses permintaan' };
    throw new ApiError(problem, response.status);
  }
  return payload;
}

export const productApi = {
  async list({ signal } = {}) {
    return unwrapProductList(await request('/api/products', { signal }));
  },
  async get(id, { signal } = {}) {
    return unwrapProduct(await request(`/api/products/${encodeURIComponent(id)}`, { signal }));
  },
  async create(input, { signal } = {}) {
    return unwrapProduct(await request('/api/products', { method: 'POST', body: input, signal }));
  },
  async update(id, input, { signal } = {}) {
    return unwrapProduct(await request(`/api/products/${encodeURIComponent(id)}`, { method: 'PUT', body: input, signal }));
  },
  async remove(id, { signal } = {}) {
    await request(`/api/products/${encodeURIComponent(id)}`, { method: 'DELETE', signal });
  },
};
