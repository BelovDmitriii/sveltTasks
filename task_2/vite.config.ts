import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  base: 'https://github.com/BelovDmitriii/sveltTasks/tree/main/task_2'
})
