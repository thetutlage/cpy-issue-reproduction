import copyFiles from 'cpy'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const BASE_PATH = fileURLToPath(new URL('./', import.meta.url))

await copyFiles(['resources/views/**/*.edge'], join(BASE_PATH, './build/'), {
	cwd: BASE_PATH,
})