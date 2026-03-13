/// Material Design App Bar
/// Overview: https://m3.material.io/components/app-bars/overview
/// Specs: https://m3.material.io/components/app-bars/specs
/// Guidelines: https://m3.material.io/components/app-bars/guidelines
/// Accessibility: https://m3.material.io/components/app-bars/accessibility

import React from 'react';
import { type StyleProp, type TextStyle, View, type ViewProps, type ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { childGuard, createComponentContext, getDisplayName } from '../../utilities';
import { IconButton, type IconButtonProps } from './icon-button';
import type { SearchProps } from './search';
import { Text } from './text';

// =============================================================================
// Types
// =============================================================================

type AppbarVariant = 'search' | 'small' | 'medium-flexible' | 'large-flexible';
type AppbarElevation = 'flat' | 'on-scroll';
type AppbarTextAlignment = 'leading' | 'centered';

type AppbarActionPosition = 'leading' | 'trailing';

// =============================================================================
// Context
// =============================================================================

type AppbarContextValue = {
  variant: AppbarVariant;
  elevation: AppbarElevation;
  textAlignment: AppbarTextAlignment;
};

const [AppbarProvider, useAppbar] = createComponentContext<AppbarContextValue>('Appbar');

// =============================================================================
// Display name constants
// =============================================================================

const APPBAR_ACTION = 'AppbarAction';
const APPBAR_ACTIONS = 'AppbarActions';
const APPBAR_TITLE = 'AppbarTitle';
const APPBAR_SEARCH = 'AppbarSearch';

// =============================================================================
// Appbar (root container)
// =============================================================================

type AppbarProps = ViewProps & {
  variant?: AppbarVariant;
  elevation?: AppbarElevation;
  textAlignment?: AppbarTextAlignment;
};

function Appbar({
  style,
  variant = 'small',
  elevation = 'flat',
  textAlignment = 'leading',
  children,
  ...props
}: AppbarProps) {
  styles.useVariants({ variant, elevation });

  const ctx = React.useMemo<AppbarContextValue>(
    () => ({ variant, elevation, textAlignment }),
    [variant, elevation, textAlignment],
  );

  const childArray = React.Children.toArray(children);

  // Search variant: leading actions + search component + trailing actions
  if (variant === 'search') {
    let searchSlot: React.ReactNode = null;
    const leadingActions: React.ReactNode[] = [];
    const trailingActions: React.ReactNode[] = [];

    childArray.forEach((child) => {
      if (!React.isValidElement(child)) return;
      const displayName = getDisplayName(child);
      if (displayName === APPBAR_SEARCH) {
        searchSlot = child;
      } else if (displayName === APPBAR_ACTIONS) {
        trailingActions.push(child);
      } else if (isAppbarAction(child)) {
        // Actions before the search slot are leading, after are trailing
        if (searchSlot == null) {
          leadingActions.push(React.cloneElement(child, { position: 'leading' }));
        } else {
          trailingActions.push(React.cloneElement(child, { position: 'trailing' }));
        }
      }
    });

    return (
      <AppbarProvider value={ctx}>
        <View style={[styles.root, style]} {...props}>
          {leadingActions}
          {searchSlot}
          {trailingActions}
        </View>
      </AppbarProvider>
    );
  }

  // Small variant
  if (variant === 'small') {
    if (textAlignment === 'centered') {
      let titleElement: React.ReactNode = null;
      const leadingActions: React.ReactNode[] = [];
      const trailingActions: React.ReactNode[] = [];

      childArray.forEach((child) => {
        if (!React.isValidElement(child)) return;
        const displayName = getDisplayName(child);
        if (displayName === APPBAR_TITLE) {
          titleElement = child;
        } else if (displayName === APPBAR_ACTIONS) {
          trailingActions.push(child);
        } else if (isAppbarAction(child)) {
          leadingActions.push(React.cloneElement(child, { position: 'leading' }));
        }
      });

      return (
        <AppbarProvider value={ctx}>
          <View style={[styles.root, style]} {...props}>
            <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
              {titleElement}
            </View>
            {leadingActions}
            <View style={styles.topRowSpacer} />
            {trailingActions}
          </View>
        </AppbarProvider>
      );
    }

    {
      let foundTitle = false;
      const smallLeadingChildren = childArray.map((child) => {
        if (!React.isValidElement(child)) return child;
        const displayName = getDisplayName(child);
        if (displayName === APPBAR_TITLE) {
          foundTitle = true;
          return child;
        }
        if (displayName === APPBAR_ACTIONS) return child;
        if (isAppbarAction(child)) {
          return React.cloneElement(child, { position: foundTitle ? 'trailing' : 'leading' });
        }
        return child;
      });

      return (
        <AppbarProvider value={ctx}>
          <View style={[styles.root, style]} {...props}>
            {smallLeadingChildren}
          </View>
        </AppbarProvider>
      );
    }
  }

  // Medium-flexible / large-flexible: two-section layout
  // Top row: leading action + spacer + trailing actions
  // Bottom section: headline + subtitle
  const flexLeadingActions: React.ReactNode[] = [];
  const flexTrailingActions: React.ReactNode[] = [];
  let flexTitleElement: React.ReactNode = null;
  let hasSubtitle = false;

  childArray.forEach((child) => {
    if (!React.isValidElement(child)) return;
    const displayName = getDisplayName(child);
    if (displayName === APPBAR_TITLE) {
      flexTitleElement = child;
      hasSubtitle = !!(child.props as AppbarTitleProps).supportingText;
    } else if (displayName === APPBAR_ACTIONS) {
      flexTrailingActions.push(child);
    } else {
      flexLeadingActions.push(child);
    }
  });

  return (
    <AppbarProvider value={ctx}>
      <View style={[styles.root, hasSubtitle && styles.rootWithSubtitle, style]} {...props}>
        <View style={styles.topRow}>
          {flexLeadingActions.map((child) =>
            React.isValidElement(child) && isAppbarAction(child)
              ? React.cloneElement(child, { position: 'leading' })
              : child)}
          <View style={styles.topRowSpacer} />
          {flexTrailingActions}
        </View>
        {flexTitleElement}
      </View>
    </AppbarProvider>
  );
}
Appbar.displayName = 'Appbar';

// =============================================================================
// AppbarHeader (safe area wrapper)
// =============================================================================

type AppbarHeaderProps = ViewProps & {
  variant?: AppbarVariant;
  elevation?: AppbarElevation;
  textAlignment?: AppbarTextAlignment;
};

function AppbarHeader({
  style,
  children,
  variant = 'small',
  elevation = 'flat',
  textAlignment = 'leading',
  ...props
}: AppbarHeaderProps) {
  styles.useVariants({ variant, elevation });

  return (
    <View style={[styles.header, style]} {...props}>
      <Appbar variant={variant} elevation={elevation} textAlignment={textAlignment}>
        {children}
      </Appbar>
    </View>
  );
}
AppbarHeader.displayName = 'AppbarHeader';

// =============================================================================
// AppbarAction (leading/trailing icon button)
// =============================================================================

type AppbarActionProps = IconButtonProps & {
  position?: AppbarActionPosition;
};

const isAppbarAction = childGuard<AppbarActionProps>(APPBAR_ACTION);

function AppbarAction({ position = 'trailing', iconStyle, ...props }: AppbarActionProps) {
  styles.useVariants({ position });

  // M3 spec: leading icon = onSurface, trailing icon = onSurfaceVariant (IconButton default)
  return <IconButton iconStyle={[styles.actionIcon, iconStyle]} {...props} />;
}
AppbarAction.displayName = APPBAR_ACTION;

// =============================================================================
// AppbarTitle (headline + optional subtitle)
// =============================================================================

type AppbarTitleProps = Omit<ViewProps, 'children'> & {
  title: React.ReactNode;
  supportingText?: React.ReactNode;

  titleStyle?: StyleProp<TextStyle>;
  supportingTextStyle?: StyleProp<TextStyle>;
};

function AppbarTitle({ title, supportingText, style, titleStyle, supportingTextStyle, ...props }: AppbarTitleProps) {
  const { variant, elevation, textAlignment } = useAppbar();
  styles.useVariants({ variant, elevation, textAlignment });

  const titleTypography = titleTypographyMap[variant];
  const subtitleTypography = subtitleTypographyMap[variant];

  return (
    <View style={[styles.content, style]} {...props}>
      <Text style={[styles.title, titleStyle]} variant={titleTypography.variant} size={titleTypography.size}>
        {title}
      </Text>
      {supportingText && (
        <Text
          style={[styles.supportingText, supportingTextStyle]}
          variant={subtitleTypography.variant}
          size={subtitleTypography.size}
        >
          {supportingText}
        </Text>
      )}
    </View>
  );
}
AppbarTitle.displayName = APPBAR_TITLE;

// =============================================================================
// AppbarActions (trailing action container)
// =============================================================================

type AppbarActionsProps = ViewProps;

function AppbarActions({ style, ...props }: AppbarActionsProps) {
  return <View style={[styles.actions, style]} {...props} />;
}
AppbarActions.displayName = APPBAR_ACTIONS;

// =============================================================================
// AppbarSearch (wraps existing Search component)
// =============================================================================

type AppbarSearchProps = {
  children: React.ReactElement<SearchProps>;
  style?: StyleProp<ViewStyle>;
};

function AppbarSearch({ children, style }: AppbarSearchProps) {
  // Zero out the Search component's own margins — the app bar container handles spacing
  const child = React.isValidElement(children)
    ? React.cloneElement(children, { style: { marginHorizontal: 0 } } as any)
    : children;

  return <View style={[styles.searchContainer, style]}>{child}</View>;
}
AppbarSearch.displayName = APPBAR_SEARCH;

// =============================================================================
// Typography maps (per M3 specs)
// =============================================================================

const titleTypographyMap: Record<AppbarVariant, { variant: 'title' | 'headline'; size: 'small' | 'medium' | 'large' }> =
  {
    search: { variant: 'title', size: 'large' },
    small: { variant: 'title', size: 'large' },
    'medium-flexible': { variant: 'headline', size: 'small' },
    'large-flexible': { variant: 'headline', size: 'medium' },
  };

const subtitleTypographyMap: Record<AppbarVariant, { variant: 'body'; size: 'medium' }> = {
  search: { variant: 'body', size: 'medium' },
  small: { variant: 'body', size: 'medium' },
  'medium-flexible': { variant: 'body', size: 'medium' },
  'large-flexible': { variant: 'body', size: 'medium' },
};

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme, rt) => ({
  root: {
    width: '100%',

    variants: {
      variant: {
        search: {
          height: 64,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 8,
        },
        small: {
          height: 64,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 4,
        },
        'medium-flexible': {
          minHeight: 112,
        },
        'large-flexible': {
          minHeight: 120,
        },
      },
      elevation: {
        flat: {
          backgroundColor: theme.scheme.surface,
        },
        'on-scroll': {
          backgroundColor: theme.scheme.surfaceContainer,
        },
      },
      position: {
        leading: {},
        trailing: {},
      },
    },
  },
  rootWithSubtitle: {
    variants: {
      variant: {
        search: {},
        small: {},
        'medium-flexible': {
          minHeight: 136,
        },
        'large-flexible': {
          minHeight: 152,
        },
      },
    },
  },
  topRow: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  topRowSpacer: {
    flex: 1,
  },
  header: {
    paddingTop: rt.insets.top,

    variants: {
      variant: {
        search: {},
        small: {},
        'medium-flexible': {},
        'large-flexible': {},
      },
      elevation: {
        flat: {
          backgroundColor: theme.scheme.surface,
        },
        'on-scroll': {
          backgroundColor: theme.scheme.surfaceContainer,
        },
      },
    },
  },
  searchContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',

    variants: {
      variant: {
        search: {},
        small: {},
        'medium-flexible': {
          flex: undefined,
          paddingHorizontal: 16,
          paddingBottom: 20,
        },
        'large-flexible': {
          flex: undefined,
          paddingHorizontal: 16,
          paddingBottom: 20,
        },
      },
      textAlignment: {
        leading: {},
        centered: {
          alignItems: 'center',
        },
      },
    },
    compoundVariants: [
      {
        variant: 'small',
        textAlignment: 'centered',
        styles: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          flex: undefined,
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        },
      },
    ],
  },
  title: {
    color: theme.scheme.onSurface,
  },
  supportingText: {
    color: theme.scheme.onSurfaceVariant,
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    variants: {
      position: {
        leading: {
          color: theme.scheme.onSurface,
        },
        trailing: {},
      },
    },
  },
}));

// =============================================================================
// Exports
// =============================================================================

export type {
  AppbarActionProps,
  AppbarActionsProps,
  AppbarElevation,
  AppbarHeaderProps,
  AppbarProps,
  AppbarSearchProps,
  AppbarTextAlignment,
  AppbarTitleProps,
  AppbarVariant,
};
export { Appbar, AppbarAction, AppbarActions, AppbarHeader, AppbarSearch, AppbarTitle };
