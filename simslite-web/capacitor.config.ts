import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'simslite-web',
  webDir: '../dist/simslite-web',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
