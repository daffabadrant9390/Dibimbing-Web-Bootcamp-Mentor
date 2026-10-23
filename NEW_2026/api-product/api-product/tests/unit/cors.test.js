import { describe, expect, it } from 'vitest';
import { cors } from '../../src/middlewares/cors.js';

function runCors({ origin, method = 'GET' } = {}) {
  const headers = {};
  const response = {
    setHeader(name, value) { headers[name.toLowerCase()] = value; },
    sendStatus(status) { this.statusCode = status; return this; },
  };
  let nextCalled = false;
  cors({ headers: { origin }, method }, response, () => { nextCalled = true; });
  return { headers, response, nextCalled };
}

describe('CORS middleware', () => {
  it('allows the local UI origin', async () => {
    const { headers, nextCalled } = runCors({ origin: 'http://localhost:5500' });

    expect(headers['access-control-allow-origin']).toBe('http://localhost:5500');
    expect(nextCalled).toBe(true);
  });

  it('answers an allowed preflight request', async () => {
    const { headers, response, nextCalled } = runCors({ origin: 'http://localhost:5500', method: 'OPTIONS' });

    expect(response.statusCode).toBe(204);
    expect(headers['access-control-allow-methods']).toContain('GET');
    expect(nextCalled).toBe(false);
  });

  it('does not allow unlisted origins', async () => {
    const { headers, nextCalled } = runCors({ origin: 'https://untrusted.example' });

    expect(headers['access-control-allow-origin']).toBeUndefined();
    expect(nextCalled).toBe(true);
  });
});
