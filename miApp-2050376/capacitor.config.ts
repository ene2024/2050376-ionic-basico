import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miApp.miApp2050376',
  appName: 'miApp-2050376',
  webDir: 'www', // Directorio de salida correcto
  bundledWebRuntime: false,
  plugins: {
    Camera: {
      permissions: {
        camera: 'Allow $(PRODUCT_NAME) to access your camera.',
        photos: 'Allow $(PRODUCT_NAME) to access your photos.'
      }
    }
  }
};

export default config;
