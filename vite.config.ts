import { defineConfig, loadEnv } from 'vite';
import { checker } from 'vite-plugin-checker';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VAR');

  console.log(env);

  return {
    server: {
      port: Number(env?.VAR_PORT),
    },
    plugins: [
      react(),
      checker({
        typescript: true,
        eslint: {
          lintCommand:
            'eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
        },
      }),
    ],
  };
});
