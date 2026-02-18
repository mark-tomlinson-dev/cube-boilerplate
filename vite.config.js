import {defineConfig} from 'vite';
import sugarcube from '@sugarcube-sh/vite';

export default defineConfig({
  root: './src',
  plugins: [sugarcube()]
});
