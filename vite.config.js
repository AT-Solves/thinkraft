import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: "/thinkraft/",
    server: {
        open: "/thinkraft/",
    },
    build: {
        // Optimize chunk splitting for better caching
        rollupOptions: {
            output: {
                // Let vite handle automatic chunk splitting
                manualChunks(id) {
                    // Split vendor code
                    if (id.includes('node_modules')) {
                        if (id.includes('react')) {
                            return 'vendor-react';
                        }
                        return 'vendor-common';
                    }
                    // Split thinkraft modules
                    if (id.includes('modules/thinkraft/pages')) {
                        return 'thinkraft-pages';
                    }
                    if (id.includes('modules/thinkraft/components')) {
                        return 'thinkraft-components';
                    }
                    // Split shared utilities
                    if (id.includes('shared/')) {
                        return 'shared-utils';
                    }
                }
            }
        },
        // Optimize minification
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // Remove console logs in production
            },
        },
        // Source maps for debugging
        sourcemap: false,
        // CSS code splitting
        cssCodeSplit: true,
        // Chunk size warnings
        chunkSizeWarningLimit: 500,
    }
});


