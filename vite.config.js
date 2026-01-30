import {defineConfig} from 'vite';
import sugarcube from '@sugarcube-org/vite';

export default defineConfig({
  root: './src',
  plugins: [sugarcube()]
});
