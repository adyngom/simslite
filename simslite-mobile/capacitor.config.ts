import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'simslite-mobile',
  webDir: '../dist/simslite-mobile',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https',
  },
};

export default config;
