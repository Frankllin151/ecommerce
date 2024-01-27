import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin'; 
import vue from "@vitejs/plugin-vue" // inport plugin vue

export default defineConfig({
    plugins: [
        vue(), // adicionar função vue
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve:{ // 
        alias:{
            vue:"vue/dist/vue.esm-bundler.js" // caminho da dist do vite 
        }
    }
});
