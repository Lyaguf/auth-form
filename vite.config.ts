import { defineConfig, loadEnv } from 'vite';
import { checker } from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import path from 'path';
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
      svgr(),
      checker({
        typescript: true,
        eslint: {
          lintCommand:
            'eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0',
        },
      }),
    ],
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/app/shared/UI'),
        '@modules': path.resolve(__dirname, './src/app/modules'),
        '@pages': path.resolve(__dirname, './src/app/pages'),
        '@icons': path.resolve(__dirname, './src/app/assets/icons')
      }
    }
  };
});
