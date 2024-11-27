import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      // __APP_ENV__: env.APP_ENV,
    },
    server: {
      port: 3000,
      strictPort: true,
    },
  };
})
