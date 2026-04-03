import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {

    return {

        plugins: [react()],

        // Production → Custom domain
        // Development → localhost root
        base: command === 'build'
            ? '/thinkraft/'   // Custom domain path
            : '/',             // localhost must use root

    };

});
