import React from 'react';
import { View } from 'react-native';
import {
  Appbar,
  AppbarAction,
  AppbarActions,
  AppbarHeader,
  AppbarSearch,
  AppbarTitle,
} from 'react-native-material-design/ui/app-bar';
import type { MaterialSymbol } from 'react-native-material-design/ui/icon';
import { IconButtonIcon } from 'react-native-material-design/ui/icon-button';
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

const TRAILING_ICONS: MaterialSymbol[] = ['attach_file', 'today', 'more_vert'];

const schema = {
  variant: {
    type: 'select',
    label: 'Variant',
    options: ['small', 'medium-flexible', 'large-flexible', 'search'],
    default: 'small',
  },
  elevation: {
    type: 'select',
    label: 'Elevation',
    options: ['flat', 'on-scroll'],
    default: 'flat',
  },
  textAlignment: {
    type: 'select',
    label: 'Text alignment',
    options: ['leading', 'centered'],
    default: 'leading',
  },
  title: { type: 'text', label: 'Title', default: 'Page title' },
  subtitle: { type: 'text', label: 'Subtitle', default: '' },
  leadingIcon: { type: 'switch', label: 'Leading icon', default: true },
  trailingCount: {
    type: 'number',
    label: 'Trailing actions',
    min: 0,
    max: 3,
    default: 2,
  },
} as const satisfies ConfigSchema;

export default function AppBarsScreen() {
  const config = useConfig(schema);
  const v = config.values;
  const [searchExpanded, setSearchExpanded] = React.useState(false);

  const isSearch = v.variant === 'search';

  return (
    <DemoPage
      title="App Bars"
      description="Display labels and navigation controls at the top of the page"
      schema={schema}
      config={config}
      preview={() => (
        <View style={styles.mockScreen}>
          {isSearch ? (
            <Appbar variant="search" elevation={v.elevation}>
              <AppbarSearch>
                <Search open={searchExpanded} onOpenChange={setSearchExpanded} layout="docked">
                  <SearchLeadingIcon name="search" />
                  <SearchInput placeholder="Search" />
                  <SearchTrailingIcon name="mic" />
                  <SearchContent>
                    <View style={styles.searchPlaceholder}>
                      <Text variant="body" size="medium" style={styles.muted}>
                        Search suggestions appear here
                      </Text>
                    </View>
                  </SearchContent>
                </Search>
              </AppbarSearch>
              {v.trailingCount > 0 && (
                <AppbarActions>
                  {TRAILING_ICONS.slice(0, v.trailingCount).map((icon) => (
                    <AppbarAction key={icon} accessibilityLabel={icon}>
                      <IconButtonIcon name={icon} />
                    </AppbarAction>
                  ))}
                </AppbarActions>
              )}
            </Appbar>
          ) : (
            <AppbarHeader variant={v.variant} elevation={v.elevation} textAlignment={v.textAlignment}>
              {v.leadingIcon && (
                <AppbarAction accessibilityLabel="Back">
                  <IconButtonIcon name="arrow_back" />
                </AppbarAction>
              )}
              <AppbarTitle title={v.title} supportingText={v.subtitle || undefined} />
              {v.trailingCount > 0 && (
                <AppbarActions>
                  {TRAILING_ICONS.slice(0, v.trailingCount).map((icon) => (
                    <AppbarAction key={icon} accessibilityLabel={icon}>
                      <IconButtonIcon name={icon} />
                    </AppbarAction>
                  ))}
                </AppbarActions>
              )}
            </AppbarHeader>
          )}

          <View style={styles.mockBody} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create((theme) => ({
  mockScreen: {
    alignSelf: 'stretch',
    height: 360,
    backgroundColor: theme.scheme.surface,
    borderRadius: theme.shape.large,
    overflow: 'hidden',
  },
  mockBody: {
    flex: 1,
  },
  muted: {
    color: theme.scheme.onSurfaceVariant,
  },
  searchPlaceholder: {
    padding: 16,
  },
}));
