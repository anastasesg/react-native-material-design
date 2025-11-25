import React from 'react';
import { ScrollView, View } from 'react-native';
import type { MaterialSymbol } from 'react-native-material-design/ui/icon';
import { Tab, TabIcon, TabLabel, Tabs } from 'react-native-material-design/ui/tabs';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { ConfigPanel } from '../../components/demo/config-panel';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const TAB_ICONS: MaterialSymbol[] = ['stars', 'favorite', 'settings', 'home', 'search', 'person'];
const TAB_LABELS = ['Stars', 'Favorites', 'Settings', 'Home', 'Search', 'Profile'];

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['primary', 'secondary'],
    default: 'primary',
  },
  scrollable: { type: 'switch', label: 'Scrollable', default: false },
  tabCount: {
    type: 'number',
    label: 'Tab count',
    min: 2,
    max: 6,
    default: 3,
  },
  icons: { type: 'switch', label: 'Show icons', default: false },
} as const satisfies ConfigSchema;

export default function TabsScreen() {
  const config = useConfig(schema);
  const v = config.values;
  const [activeTab, setActiveTab] = React.useState('tab-0');

  // Reset active tab when tab count decreases below the current selection
  React.useEffect(() => {
    const idx = Number(activeTab.split('-')[1]);
    if (idx >= v.tabCount) {
      setActiveTab('tab-0');
    }
  }, [v.tabCount, activeTab]);

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text variant="headline" size="small">
          Tabs
        </Text>
        <Text variant="body" size="large" style={styles.description}>
          Organize content across different screens and views
        </Text>
      </View>

      <Tabs
        key={`${v.variant}-${v.scrollable}-${v.tabCount}-${v.icons}`}
        variant={v.variant}
        scrollable={v.scrollable}
        value={activeTab}
        onValueChange={setActiveTab}
      >
        {Array.from({ length: v.tabCount }, (_, i) => (
          <Tab key={i} value={`tab-${i}`}>
            {v.icons && <TabIcon name={TAB_ICONS[i]!} variant="outlined" />}
            <TabLabel>{TAB_LABELS[i]!}</TabLabel>
          </Tab>
        ))}
      </Tabs>

      <ConfigPanel schema={schema} config={config} />
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  root: {
    flex: 1,
    backgroundColor: theme.scheme.background,
  },
  content: {
    paddingBottom: rt.insets.bottom + 24,
  },
  header: {
    padding: 20,
    gap: 4,
  },
  description: {
    color: theme.scheme.onSurfaceVariant,
  },
}));
