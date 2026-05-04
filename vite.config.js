import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {

    return {

        plugins: [react()],

        // Production → subdirectory deployment
        // Development → localhost root
        base: command === 'build'
            ? '/thinkraft/'   // Subdirectory path
            : '/',            // localhost must use root

    };

});
