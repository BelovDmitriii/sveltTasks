import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/BelovDmitriii/sveltTasks/tree/main/task_2/',
  plugins: [svelte()],
})
