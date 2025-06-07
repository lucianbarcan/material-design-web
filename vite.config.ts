import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/main.ts',
            formats: ['es'],
            fileName: 'material-design-web',
        },
        rollupOptions: {
            output: {
                entryFileNames: `material-design-web.js`,
            },
        },
    },
});