/**
 * Loads the fonts for use in the library.
 * This function works with both Expo and bare React Native projects.
 * Fonts are already bundled by react-native-builder-bob.
 *
 * @returns Promise that resolves when fonts are loaded
 */
export async function loadFonts(): Promise<void> {
  try {
    // Try to use expo-font if available (Expo projects)
    const expoFont = require('expo-font');
    if (expoFont && expoFont.loadAsync) {
      await expoFont.loadAsync({
        'MaterialSymbolsOutlined-Regular': require('../assets/icons/MaterialSymbolsOutlined-Regular.ttf'),
        'MaterialSymbolsRounded-Regular': require('../assets/icons/MaterialSymbolsRounded-Regular.ttf'),
        'MaterialSymbolsSharp-Regular': require('../assets/icons/MaterialSymbolsSharp-Regular.ttf'),
        'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf'),
        'Roboto-BlackItalic': require('../assets/fonts/Roboto-BlackItalic.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-BoldItalic': require('../assets/fonts/Roboto-BoldItalic.ttf'),
        'Roboto-ExtraBold': require('../assets/fonts/Roboto-ExtraBold.ttf'),
        'Roboto-ExtraBoldItalic': require('../assets/fonts/Roboto-ExtraBoldItalic.ttf'),
        'Roboto-ExtraLight': require('../assets/fonts/Roboto-ExtraLight.ttf'),
        'Roboto-ExtraLightItalic': require('../assets/fonts/Roboto-ExtraLightItalic.ttf'),
        'Roboto-Italic': require('../assets/fonts/Roboto-Italic.ttf'),
        'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
        'Roboto-LightItalic': require('../assets/fonts/Roboto-LightItalic.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-MediumItalic': require('../assets/fonts/Roboto-MediumItalic.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-SemiBold': require('../assets/fonts/Roboto-SemiBold.ttf'),
        'Roboto-SemiBoldItalic': require('../assets/fonts/Roboto-SemiBoldItalic.ttf'),
        'Roboto-Thin': require('../assets/fonts/Roboto-Thin.ttf'),
        'Roboto-ThinItalic': require('../assets/fonts/Roboto-ThinItalic.ttf'),
      });
      return;
    }
  } catch {
    // expo-font not available, continue with fallback
  }

  // For bare React Native projects, fonts are already bundled by bob
  // They need to be linked to native projects via react-native.config.js
  // Run: npx react-native-asset (or the fonts will be auto-linked on install)
  // The fonts will be available after linking without additional loading
}
