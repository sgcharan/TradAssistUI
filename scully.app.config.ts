import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'app',
  distFolder: './dist/ionic/www', // output directory of your Angular build artifacts
  outDir: './www', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};
