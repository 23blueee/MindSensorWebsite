import react from '@vitejs/plugin-react';

export default {
  root: '.',
  server: {
    open: true,
    port: 5173,
  },
  plugins: [react()]
}; 