import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  console.log('USE_PUBLISHED_PACKAGES:', env.USE_PUBLISHED_PACKAGES)

  return {
    plugins: [react()],
    resolve: {
      ...(env.USE_PUBLISHED_PACKAGES !== 'true' && {
        alias: {
          '@emberai/ember-widget': path.resolve(__dirname, '../../packages/ember-widget'),
        },
      }),
    },
  }
})
