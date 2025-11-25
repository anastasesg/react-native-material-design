import React from 'react';
import { ScrollView, View } from 'react-native';
import type { MaterialSymbol } from 'react-native-material-design/ui/icon';
import {
  NavigationBar,
  NavigationBarIcon,
  NavigationBarItem,
  NavigationBarLabel,
} from 'react-native-material-design/ui/navigation-bar';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { ConfigPanel } from '../../components/demo/config-panel';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const ITEMS: { value: string; icon: MaterialSymbol; label: string }[] = [
  { value: 'home', icon: 'home', label: 'Home' },
  { value: 'explore', icon: 'explore', label: 'Explore' },
  { value: 'saved', icon: 'bookmark', label: 'Saved' },
  { value: 'profile', icon: 'person', label: 'Profile' },
  { value: 'search', icon: 'search', label: 'Search' },
];

const schema = {
  itemLayout: {
    type: 'select',
    label: 'Item layout',
    options: ['vertical', 'horizontal'],
    default: 'vertical',
  },
  itemCount: {
    type: 'number',
    label: 'Item count',
    min: 3,
    max: 5,
    default: 4,
  },
  icons: { type: 'switch', label: 'Icons', default: true },
} as const satisfies ConfigSchema;

export default function NavigationBarScreen() {
  const config = useConfig(schema);
  const v = config.values;
  const [active, setActive] = React.useState('home');

  const items = ITEMS.slice(0, v.itemCount);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text variant="headline" size="small">
            Navigation Bar
          </Text>
          <Text variant="body" size="large" style={styles.description}>
            Navigation bars let people switch between UI views on smaller devices
          </Text>
        </View>

        <ConfigPanel schema={schema} config={config} />
      </ScrollView>

      <NavigationBar value={active} onValueChange={setActive} itemLayout={v.itemLayout}>
        {items.map((item) => (
          <NavigationBarItem key={item.value} value={item.value}>
            {v.icons && <NavigationBarIcon name={item.icon} />}
            <NavigationBarLabel>{item.label}</NavigationBarLabel>
          </NavigationBarItem>
        ))}
      </NavigationBar>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.scheme.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  header: {
    padding: 20,
    gap: 4,
  },
  description: {
    color: theme.scheme.onSurfaceVariant,
  },
}));
