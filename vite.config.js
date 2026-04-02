import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {

    return {

        plugins: [react()],

        // Production → GitHub Pages
        // Development → localhost root
        base: command === 'build'
            ?'/Thinkraft/'   // MUST match GitHub repo name exactly
            : '/',            // localhost must use root

    };

});
