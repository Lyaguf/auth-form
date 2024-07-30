import { defineConfig, loadEnv } from 'vite';
import { checker } from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';
import path from 'path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import postCssNested from 'postcss-nested';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VAR');

  return {
    server: {
      port: env?.VAR_PORT ? Number(env?.VAR_PORT) : 8080 ,
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
    css: {
      postcss: {
        plugins: [autoprefixer(), postCssNested()]
      }
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/app/shared/UI'),
        '@modules': path.resolve(__dirname, './src/app/modules'),
        '@pages': path.resolve(__dirname, './src/app/pages'),
        '@icons': path.resolve(__dirname, './src/app/assets/icons'),
        '@utils': path.resolve(__dirname, './src/app/shared/utils'),
        '@consts': path.resolve(__dirname, './src/app/shared/constants'),
        '@hooks': path.resolve(__dirname, './src/app/shared/hooks'),
      }
    }
  };
});
