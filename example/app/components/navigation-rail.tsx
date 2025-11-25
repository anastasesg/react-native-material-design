import React from 'react';
import { ScrollView, View } from 'react-native';
import type { MaterialSymbol } from 'react-native-material-design/ui/icon';
import {
  NavigationRail,
  NavigationRailIcon,
  NavigationRailItem,
  NavigationRailLabel,
} from 'react-native-material-design/ui/navigation-rail';
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
];

const schema = {
  mode: {
    type: 'select',
    label: 'Mode',
    options: ['standard', 'modal'],
    default: 'standard',
  },
  alignItems: {
    type: 'select',
    label: 'Align items',
    options: ['top', 'center'],
    default: 'top',
  },
} as const satisfies ConfigSchema;

export default function NavigationRailScreen() {
  const config = useConfig(schema);
  const v = config.values;
  const [active, setActive] = React.useState('home');

  return (
    <View style={styles.container}>
      <NavigationRail mode={v.mode} value={active} onValueChange={setActive} alignItems={v.alignItems}>
        {ITEMS.map((item) => (
          <NavigationRailItem key={item.value} value={item.value}>
            <NavigationRailIcon name={item.icon} />
            <NavigationRailLabel>{item.label}</NavigationRailLabel>
          </NavigationRailItem>
        ))}
      </NavigationRail>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text variant="headline" size="small">
            Navigation Rail
          </Text>
          <Text variant="body" size="large" style={styles.description}>
            Navigation rails let people switch between UI views on mid-sized devices
          </Text>
        </View>

        <ConfigPanel schema={schema} config={config} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    flexDirection: 'row',
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
