/// Material Design Search
/// Overview: https://m3.material.io/components/search/overview
/// Specs: https://m3.material.io/components/search/specs
/// Guidelines: https://m3.material.io/components/search/guidelines
/// Accessibility: https://m3.material.io/components/search/accessibility

import React from 'react';
import { type StyleProp, type ViewStyle } from 'react-native';
import { Modal, Pressable as RNPressable, TextInput, useWindowDimensions, View } from 'react-native';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import { useControllableState, useInteraction } from '../../hooks';
import { createComponentContext } from '../../utilities';
import { StateLayer } from '../custom';
import { Icon, type MaterialSymbol } from './icon';
import { IconButton } from './icon-button';
import { Text } from './text';

// =============================================================================
// Types
// =============================================================================

type SearchLayout = 'full-screen' | 'docked';

type SearchProps = {
  /** Whether the search view is open (expanded). */
  open?: boolean;
  /** Default open state for uncontrolled mode. */
  defaultOpen?: boolean;
  /** Called when open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Layout mode for the expanded view. */
  layout?: SearchLayout;
  /** Whether the search bar is disabled. */
  disabled?: boolean;
  /** Style applied to the outer wrapper (controls margins from consumer side). */
  style?: StyleProp<ViewStyle>;
  /** Style applied to the collapsed search bar container. */
  barStyle?: StyleProp<ViewStyle>;
  /** Children: SearchLeadingIcon, SearchInput, SearchTrailingIcon, SearchContent */
  children: React.ReactNode;
};

type SearchLeadingIconProps = {
  /** Icon name. */
  name: MaterialSymbol;
  /** Makes the icon a pressable IconButton. */
  onPress?: () => void;
};

type SearchInputProps = {
  /** Placeholder text. */
  placeholder?: string;
  /** Controlled text value. */
  value?: string;
  /** Called when text changes. */
  onChangeText?: (text: string) => void;
  /** Called when Enter is pressed. */
  onSubmitEditing?: () => void;
  /** Auto-focus when expanded. */
  autoFocus?: boolean;
};

type SearchTrailingIconProps = {
  /** Icon name. */
  name: MaterialSymbol;
  /** Press handler. */
  onPress?: () => void;
};

type SearchContentProps = {
  /** Suggestions/results content. */
  children: React.ReactNode;
  /** Style for the content container. */
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Constants
// =============================================================================

const BAR_HEIGHT = 56;
const ICON_SIZE = 24;
const BAR_LEADING_SPACE = 4;
const BAR_TRAILING_SPACE = 4;
const BAR_NO_ACTIONS_LEADING_SPACE = 16;
const BAR_NO_ACTIONS_TRAILING_SPACE = 16;
const ICON_LABEL_GAP = 4;
const TRAILING_ACTIONS_GAP = 0;
const SCRIM_OPACITY = 0.32;
const DOCKED_BAR_RESULTS_GAP = 2;
const DOCKED_MIN_WIDTH = 360;
const DOCKED_MAX_WIDTH = 720;
const DOCKED_MIN_HEIGHT = 240;
const EXPANDED_TOP_INSET = 4;
const COLLAPSED_MARGIN = 24;
const EXPANDED_MARGIN = 12;

// =============================================================================
// Display name constants
// =============================================================================

const SEARCH_LEADING_ICON = 'SearchLeadingIcon';
const SEARCH_INPUT = 'SearchInput';
const SEARCH_TRAILING_ICON = 'SearchTrailingIcon';
const SEARCH_CONTENT = 'SearchContent';

// Search → sub-component context
type SearchContextValue = { expanded: boolean; disabled: boolean; onCollapse: () => void };
const [SearchProvider, useSearch] = createComponentContext<SearchContextValue>('Search');

// =============================================================================
// Search (root)
// =============================================================================

function Search({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  layout = 'full-screen',
  disabled = false,
  style,
  barStyle,
  children,
}: SearchProps) {
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  searchStyles.useVariants({ disabled });

  const [mounted, setMounted] = React.useState(false);
  const { progress, handlers: pressHandlers } = useInteraction('press');

  // Ref for measuring collapsed bar position — typed loosely because RN 0.78+ View ref
  // doesn't expose measure() in its TS definition, but it's available at runtime

  const barRef = React.useRef<any>(null);
  const measuredOffsetY = React.useRef(0);

  // Margin animation: 24dp (collapsed) -> 12dp (expanded)
  const marginAnim = useSharedValue(COLLAPSED_MARGIN);
  const containerOpacity = useSharedValue(0);
  const scrimOpacity = useSharedValue(0);
  const barTranslateY = useSharedValue(0);

  const onCloseAnimationEnd = React.useCallback((finished?: boolean) => {
    'worklet';
    if (finished) {
      runOnJS(setMounted)(false);
    }
  }, []);

  React.useEffect(() => {
    const { fastEffects } = UnistylesRuntime.getTheme().motion.spring;
    if (open) {
      setMounted(true);
      marginAnim.value = withSpring(EXPANDED_MARGIN, fastEffects);
      containerOpacity.value = withSpring(1, fastEffects);
      scrimOpacity.value = withSpring(SCRIM_OPACITY, fastEffects);
      barTranslateY.value = withSpring(0, fastEffects);
    } else if (mounted) {
      marginAnim.value = withSpring(COLLAPSED_MARGIN, fastEffects);
      containerOpacity.value = withSpring(0, fastEffects, onCloseAnimationEnd);
      scrimOpacity.value = withSpring(0, fastEffects);
      barTranslateY.value = withSpring(measuredOffsetY.current, fastEffects);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const animatedMarginStyle = useAnimatedStyle(() => ({
    marginHorizontal: marginAnim.value,
  }));

  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  const animatedBarTranslateStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: barTranslateY.value }],
  }));

  const animatedScrimStyle = useAnimatedStyle(() => ({
    opacity: scrimOpacity.value,
  }));

  const handleCollapse = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleExpand = React.useCallback(() => {
    if (disabled) return;
    barRef.current?.measure((_x: number, _y: number, _w: number, _h: number, _pageX: number, pageY: number) => {
      const finalY = UnistylesRuntime.insets.top + EXPANDED_TOP_INSET;
      const offset = pageY - finalY;
      measuredOffsetY.current = offset;
      barTranslateY.value = offset;
      setOpen(true);
    });
  }, [disabled, setOpen, barTranslateY]);

  // Sort children into slots
  let leadingIconSlot: React.ReactElement | null = null;
  let inputSlot: React.ReactElement | null = null;
  const trailingIconSlots: React.ReactElement[] = [];
  let contentSlot: React.ReactElement | null = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    if (child.type === SearchLeadingIcon) leadingIconSlot = child;
    else if (child.type === SearchInput) inputSlot = child;
    else if (child.type === SearchTrailingIcon) trailingIconSlots.push(child);
    else if (child.type === SearchContent) contentSlot = child;
  });

  const hasTrailingActions = trailingIconSlots.length > 0;
  const hasLeadingIcon = leadingIconSlot != null;

  const collapsedCtx = React.useMemo(
    () => ({ expanded: false as const, disabled, onCollapse: handleCollapse }),
    [disabled, handleCollapse],
  );
  const expandedCtx = React.useMemo(
    () => ({ expanded: true as const, disabled, onCollapse: handleCollapse }),
    [disabled, handleCollapse],
  );

  // Trailing icons with keys (rendered in both collapsed + expanded via context)
  const trailingIcons = hasTrailingActions ? (
    <View style={searchStyles.trailingContainer}>
      {trailingIconSlots.map((icon, index) => React.cloneElement(icon, { key: index }))}
    </View>
  ) : null;

  // Collapsed bar - wrapped in an Animated.View for margin animation
  const bar = (
    <View ref={barRef} collapsable={false}>
      <Animated.View style={[animatedMarginStyle, style]}>
        <RNPressable
          onPress={handleExpand}
          {...pressHandlers}
          disabled={disabled}
          role="searchbox"
          accessibilityLabel={
            (inputSlot as React.ReactElement<SearchInputProps> | null)?.props?.placeholder ?? 'Search'
          }
          accessibilityState={{ disabled, expanded: open }}
          style={[searchStyles.bar, barStyle]}
        >
          <View
            style={[
              searchStyles.barInner,
              {
                paddingLeft: hasTrailingActions || hasLeadingIcon ? BAR_LEADING_SPACE : BAR_NO_ACTIONS_LEADING_SPACE,
                paddingRight: hasTrailingActions ? BAR_TRAILING_SPACE : BAR_NO_ACTIONS_TRAILING_SPACE,
              },
            ]}
          >
            <SearchProvider value={collapsedCtx}>
              {leadingIconSlot}
              {inputSlot}
              {trailingIcons}
            </SearchProvider>
            <StateLayer progress={progress} color="onSurface" style={searchStyles.stateLayer} />
          </View>
        </RNPressable>
      </Animated.View>
    </View>
  );

  // If not expanded and not mounted, just show the bar
  if (!mounted && !open) {
    return bar;
  }

  // Expanded bar row (pill-shaped, used inside overlay)
  const expandedBarRow = (
    <Animated.View style={[searchStyles.expandedBarOuter, animatedMarginStyle, animatedBarTranslateStyle]}>
      <View style={searchStyles.expandedBar}>
        <SearchProvider value={expandedCtx}>
          {leadingIconSlot || <IconButton name="arrow_back" variant="standard" size="small" onPress={handleCollapse} />}
          {inputSlot}
          {trailingIcons}
        </SearchProvider>
      </View>
    </Animated.View>
  );

  const expandedContent =
    mounted && contentSlot ? <SearchProvider value={expandedCtx}>{contentSlot}</SearchProvider> : null;

  if (layout === 'full-screen') {
    return (
      <>
        {bar}
        {mounted && (
          <Modal transparent visible onRequestClose={handleCollapse} statusBarTranslucent>
            <Animated.View style={[searchStyles.fullScreenContainer, animatedContainerStyle]}>
              {expandedBarRow}
              {expandedContent}
            </Animated.View>
          </Modal>
        )}
      </>
    );
  }

  // Docked layout
  return (
    <>
      {bar}
      {mounted && (
        <DockedOverlay
          animatedScrimStyle={animatedScrimStyle}
          animatedContainerStyle={animatedContainerStyle}
          animatedMarginStyle={animatedMarginStyle}
          onCollapse={handleCollapse}
          expandedBarRow={expandedBarRow}
          expandedContent={expandedContent}
        />
      )}
    </>
  );
}

// =============================================================================
// DockedOverlay (internal helper - avoids useWindowDimensions in unmounted state)
// =============================================================================

type DockedOverlayProps = {
  animatedScrimStyle: any;
  animatedContainerStyle: any;
  animatedMarginStyle: any;
  onCollapse: () => void;
  expandedBarRow: React.ReactNode;
  expandedContent: React.ReactNode;
};

function DockedOverlay({
  animatedScrimStyle,
  animatedContainerStyle,
  animatedMarginStyle,
  onCollapse,
  expandedBarRow,
  expandedContent,
}: DockedOverlayProps) {
  const { height: screenHeight } = useWindowDimensions();
  const dockedMaxHeight = Math.floor((screenHeight * 2) / 3);

  return (
    <Modal transparent visible onRequestClose={onCollapse} statusBarTranslucent>
      <RNPressable
        style={StyleSheet.absoluteFillObject}
        onPress={onCollapse}
        accessibilityRole="button"
        accessibilityLabel="Close search"
      >
        <Animated.View style={[searchStyles.scrim, animatedScrimStyle]} />
      </RNPressable>

      <View style={searchStyles.dockedAnchor} pointerEvents="box-none">
        {/* Bar stays at its position */}
        {expandedBarRow}

        {/* Dropdown appears 2dp below the bar */}
        <Animated.View
          style={[
            searchStyles.dockedDropdown,
            animatedContainerStyle,
            { maxHeight: dockedMaxHeight - BAR_HEIGHT - DOCKED_BAR_RESULTS_GAP },
          ]}
        >
          <Animated.View style={[searchStyles.dockedDropdownInner, animatedMarginStyle]}>
            {expandedContent}
          </Animated.View>
        </Animated.View>
      </View>
    </Modal>
  );
}

// =============================================================================
// SearchLeadingIcon
// =============================================================================

function SearchLeadingIcon({ name, onPress }: SearchLeadingIconProps) {
  const { expanded, disabled, onCollapse } = useSearch();

  // When expanded, always show back arrow that collapses
  if (expanded) {
    return <IconButton name="arrow_back" variant="standard" size="small" onPress={onCollapse} />;
  }

  // When collapsed, show the consumer's icon
  if (onPress) {
    return <IconButton name={name} variant="standard" size="small" onPress={onPress} disabled={disabled} />;
  }

  return (
    <View style={searchStyles.leadingIconWrapper}>
      <Icon name={name} size={ICON_SIZE} style={[searchStyles.leadingIcon, disabled && searchStyles.disabledContent]} />
    </View>
  );
}
SearchLeadingIcon.displayName = SEARCH_LEADING_ICON;

// =============================================================================
// SearchInput
// =============================================================================

function SearchInput({
  placeholder = 'Search',
  value,
  onChangeText,
  onSubmitEditing,
  autoFocus = true,
}: SearchInputProps) {
  const { expanded, disabled } = useSearch();
  const inputRef = React.useRef<React.ElementRef<typeof TextInput>>(null);

  // Auto-focus when expanded
  React.useEffect(() => {
    if (expanded && autoFocus) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [expanded, autoFocus]);

  // When collapsed, render as placeholder text
  if (!expanded) {
    return (
      <View style={searchStyles.inputContainer}>
        <Text
          variant="body"
          size="large"
          style={[searchStyles.placeholderText, disabled && searchStyles.disabledContent]}
          numberOfLines={1}
        >
          {value || placeholder}
        </Text>
      </View>
    );
  }

  // When expanded, render as TextInput
  return (
    <View style={searchStyles.inputContainer}>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        placeholderTextColor={searchStyles.placeholderText.color as string}
        style={searchStyles.textInput}
        editable={!disabled}
        returnKeyType="search"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
}
SearchInput.displayName = SEARCH_INPUT;

// =============================================================================
// SearchTrailingIcon
// =============================================================================

function SearchTrailingIcon({ name, onPress }: SearchTrailingIconProps) {
  const { disabled } = useSearch();
  return <IconButton name={name} variant="standard" size="small" onPress={onPress} disabled={disabled} />;
}
SearchTrailingIcon.displayName = SEARCH_TRAILING_ICON;

// =============================================================================
// SearchContent
// =============================================================================

function SearchContent({ children, style }: SearchContentProps) {
  const { expanded } = useSearch();
  if (!expanded) return null;

  return <View style={[searchStyles.content, style]}>{children}</View>;
}
SearchContent.displayName = SEARCH_CONTENT;

// =============================================================================
// Styles
// =============================================================================

const searchStyles = StyleSheet.create((theme, rt) => ({
  // -- Collapsed bar --
  bar: {
    height: BAR_HEIGHT,
    borderRadius: theme.shape.full,
    overflow: 'hidden',
  },

  barInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.scheme.surfaceContainerHigh,
    borderRadius: theme.shape.full,
    gap: ICON_LABEL_GAP,
    overflow: 'hidden',

    variants: {
      disabled: {
        true: {
          backgroundColor: `${theme.scheme.onSurface}1F`,
        },
        false: {},
      },
    },
  },

  stateLayer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: theme.shape.full,
  },

  leadingIconWrapper: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  leadingIcon: {
    color: theme.scheme.onSurface,
  },

  disabledContent: {
    color: `${theme.scheme.onSurface}61`,
  },

  // -- Input --
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  placeholderText: {
    color: theme.scheme.onSurfaceVariant,
  },

  textInput: {
    flex: 1,
    height: '100%',
    color: theme.scheme.onSurface,
    ...theme.typography.body.large,
    lineHeight: undefined,
    padding: 0,
  },

  // -- Trailing --
  trailingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: TRAILING_ACTIONS_GAP,
  },

  // -- Expanded bar (pill-shaped, inside overlays) --
  expandedBarOuter: {
    // marginHorizontal is animated via animatedMarginStyle
  },

  expandedBar: {
    height: BAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.scheme.surfaceContainerHigh,
    borderRadius: theme.shape.full,
    paddingHorizontal: BAR_LEADING_SPACE,
    gap: ICON_LABEL_GAP,
  },

  // -- Content area --
  content: {
    flex: 1,
  },

  // -- Full-screen layout --
  fullScreenContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.surfaceContainerLow,
    paddingTop: rt.insets.top + EXPANDED_TOP_INSET,
  },

  // -- Docked layout --
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.scrim,
  },

  dockedAnchor: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    paddingTop: rt.insets.top + EXPANDED_TOP_INSET,
  },

  dockedDropdown: {
    marginTop: DOCKED_BAR_RESULTS_GAP,
  },

  dockedDropdownInner: {
    backgroundColor: theme.scheme.surfaceContainerHigh,
    borderRadius: theme.shape.xlarge,
    minWidth: DOCKED_MIN_WIDTH,
    maxWidth: DOCKED_MAX_WIDTH,
    minHeight: DOCKED_MIN_HEIGHT,
    overflow: 'hidden',
  },
}));

// =============================================================================
// Exports
// =============================================================================

Search.displayName = 'Search';

export type {
  SearchContentProps,
  SearchInputProps,
  SearchLayout,
  SearchLeadingIconProps,
  SearchProps,
  SearchTrailingIconProps,
};
export { Search, SearchContent, SearchInput, SearchLeadingIcon, SearchTrailingIcon };
