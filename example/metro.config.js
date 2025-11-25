const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const libraryRoot = path.resolve(projectRoot, '..');

// Peer dependencies that must resolve to a single copy (from example/node_modules)
const peerDeps = [
  'react',
  'react-native',
  'react-native-gesture-handler',
  'react-native-unistyles',
  'react-native-reanimated',
  'react-native-nitro-modules',
  'react-native-worklets',
  '@react-navigation/native',
  '@react-navigation/core',
  '@react-navigation/routers',
  'expo-router',
];

const config = getDefaultConfig(projectRoot);

// Watch the parent library directory for changes (picks up ../lib/module)
config.watchFolders = [libraryRoot];

// Ensure peer deps always resolve from example's node_modules (single instance)
config.resolver.extraNodeModules = Object.fromEntries(
  peerDeps.map((dep) => [dep, path.resolve(projectRoot, 'node_modules', dep)]),
);

// Alias the library itself to the parent root (so exports map resolves from ../package.json)
config.resolver.extraNodeModules['react-native-material-design'] = libraryRoot;

// Block peer deps in the parent's node_modules (avoid duplicate instances)
// but allow non-peer deps like @material/material-color-utilities to resolve
config.resolver.blockList = peerDeps.map(
  (dep) => new RegExp(path.resolve(libraryRoot, 'node_modules', dep).replace(/[/\\]/g, '[/\\\\]') + '(/.*)?$'),
);

// Resolve from both example's and library's node_modules (example takes priority)
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(libraryRoot, 'node_modules'),
];

module.exports = config;
