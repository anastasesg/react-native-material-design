import React from 'react';
import { View } from 'react-native';
import {
  Search,
  SearchContent,
  SearchInput,
  SearchLeadingIcon,
  SearchTrailingIcon,
} from 'react-native-material-design/ui/search';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const SUGGESTIONS = ['Suggested result 1', 'Suggested result 2', 'Suggested result 3'];

const schema = {
  layout: {
    type: 'select',
    label: 'Layout',
    options: ['full-screen', 'docked'],
    default: 'full-screen',
  },
  disabled: { type: 'switch', label: 'Disabled', default: false },
} as const satisfies ConfigSchema;

export default function SearchScreen() {
  const config = useConfig(schema);
  const v = config.values;
  const [expanded, setExpanded] = React.useState(false);

  return (
    <DemoPage
      title="Search"
      description="Search allows users to enter a keyword or phrase to find relevant content"
      schema={schema}
      config={config}
      preview={() => (
        <View style={{ alignSelf: 'stretch' }}>
          <Search
            key={`${v.layout}-${v.disabled}`}
            layout={v.layout}
            open={expanded}
            onOpenChange={setExpanded}
            disabled={v.disabled}
          >
            <SearchLeadingIcon name="search" />
            <SearchInput placeholder="Search" />
            <SearchTrailingIcon name="mic" onPress={() => {}} />
            <SearchContent>
              <View style={styles.suggestions}>
                {SUGGESTIONS.map((item) => (
                  <View key={item} style={styles.suggestionItem}>
                    <Text variant="body" size="large">
                      {item}
                    </Text>
                  </View>
                ))}
              </View>
            </SearchContent>
          </Search>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create(() => ({
  suggestions: {
    paddingVertical: 8,
  },
  suggestionItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
}));
