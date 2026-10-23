// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    // Integration test membutuhkan DB — jalankan serial
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: false,
      },
    },
    // Timeout lebih panjang untuk integration test
    testTimeout: 15000,
    hookTimeout: 30000,
    globalSetup: ['tests/integration/vitest.setup.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/**'],
      exclude: ['src/server.js'],
    },
  },
});
