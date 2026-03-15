/**
 * Side-effect-only module. Configures unistyles with M3 defaults and loads fonts.
 *
 * Usage:
 *   import 'react-native-material-design/init';
 *
 * For custom configuration, use configure() from the main entry instead:
 *   import { configure } from 'react-native-material-design';
 *   configure({ sourceColor: '#1B6B52' });
 */
import { configure } from './configure';

configure();
