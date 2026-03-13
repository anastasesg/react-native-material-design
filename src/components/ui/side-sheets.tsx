/// Material Design Side Sheets
/// Overview: https://m3.material.io/components/side-sheets/overview
/// Specs: https://m3.material.io/components/side-sheets/specs
/// Guidelines: https://m3.material.io/components/side-sheets/guidelines
/// Accessibility: https://m3.material.io/components/side-sheets/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Modal, Pressable as RNPressable, ScrollView, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { scheduleOnRN } from 'react-native-worklets';

import { useControllableState } from '../../hooks';
import { createComponentContext, getDisplayName } from '../../utilities';
import { Divider } from './divider';
import { IconButton } from './icon-button';
import { Text } from './text';

// =============================================================================
// Types
// =============================================================================

type SideSheetVariant = 'standard' | 'modal';

type SideSheetProps = {
  /** Which variant: standard (coplanar, no scrim) or modal (overlay with scrim). */
  variant?: SideSheetVariant;
  /** Whether the sheet is open. */
  open?: boolean;
  /** Default open state for uncontrolled mode. */
  defaultOpen?: boolean;
  /** Called when the open state changes (close button, scrim tap, back button). */
  onOpenChange?: (open: boolean) => void;
  /** Accessibility label for the sheet container. */
  accessibilityLabel?: string;
  /** Style applied to the sheet container. */
  style?: StyleProp<ViewStyle>;
  /** Style applied to the scrim overlay (modal variant only). */
  scrimStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type SideSheetHeaderProps = {
  children?: React.ReactNode;
};

type SideSheetHeadlineProps = {
  children: React.ReactNode;
};

type SideSheetBackProps = {
  /** Called when the back button is pressed. */
  onPress?: () => void;
};

type SideSheetCloseProps = {
  /** Override the default dismiss behavior. */
  onPress?: () => void;
};

type SideSheetContentProps = {
  /** Style applied to the scrollable content area. */
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type SideSheetActionsProps = {
  /** Whether to show a divider above the actions area. */
  showDivider?: boolean;
  children?: React.ReactNode;
};

// =============================================================================
// Context
// =============================================================================

type SideSheetContextValue = {
  variant: SideSheetVariant;
  dismiss: () => void;
};

const [SideSheetProvider, useSideSheet] = createComponentContext<SideSheetContextValue>('SideSheet');

// =============================================================================
// Constants
// =============================================================================

const CONTAINER_WIDTH = 256;
const HORIZONTAL_PADDING = 24;
const MODAL_START_PADDING_WITH_ICON = 16;
const TOP_ELEMENT_GAP = 12;
const ACTIONS_HEIGHT = 72;
const ACTIONS_TOP_PADDING = 16;
const ACTIONS_BOTTOM_PADDING = 24;
const SCRIM_OPACITY = 0.32;

// Sub-component display names (used for slot identification)
const SIDE_SHEET_HEADER = 'SideSheetHeader';
const SIDE_SHEET_HEADLINE = 'SideSheetHeadline';
const SIDE_SHEET_BACK = 'SideSheetBack';
const SIDE_SHEET_CLOSE = 'SideSheetClose';
const SIDE_SHEET_CONTENT = 'SideSheetContent';
const SIDE_SHEET_ACTIONS = 'SideSheetActions';

// =============================================================================
// SideSheet
// =============================================================================

function SideSheet({
  variant = 'modal',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  accessibilityLabel = 'Side sheet',
  style,
  scrimStyle,
  children,
}: SideSheetProps) {
  sheetStyles.useVariants({ variant });

  const [isOpen, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  const dismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleScrimPress = React.useCallback(() => {
    if (variant === 'modal') {
      dismiss();
    }
  }, [variant, dismiss]);

  // `visible` keeps the Modal mounted during exit animations.
  const [visible, setVisible] = React.useState(false);

  // Animation — progress-driven width expansion (nav rail pattern)
  const progress = useSharedValue(0);

  const onCloseAnimationEnd = React.useCallback((finished?: boolean) => {
    'worklet';
    if (finished) {
      scheduleOnRN(setVisible, false);
    }
  }, []);

  React.useEffect(() => {
    const { fastSpatial, fastEffects } = UnistylesRuntime.getTheme().motion.spring;
    if (isOpen) {
      setVisible(true);
      progress.value = withSpring(1, fastSpatial);
    } else {
      progress.value = withSpring(0, fastEffects, onCloseAnimationEnd);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const animatedSheetStyle = useAnimatedStyle(() => ({
    width: interpolate(progress.value, [0, 1], [0, CONTAINER_WIDTH], {
      extrapolateLeft: Extrapolation.CLAMP,
      extrapolateRight: Extrapolation.EXTEND,
    }),
  }));

  const animatedScrimStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0, SCRIM_OPACITY], Extrapolation.CLAMP),
  }));

  // Sort children into slots
  let headerSlot: React.ReactNode = null;
  let contentSlot: React.ReactNode = null;
  let actionsSlot: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const name = getDisplayName(child);

    switch (name) {
      case SIDE_SHEET_HEADER:
        headerSlot = child;
        break;
      case SIDE_SHEET_CONTENT:
        contentSlot = child;
        break;
      case SIDE_SHEET_ACTIONS:
        actionsSlot = child;
        break;
    }
  });

  const ctx = React.useMemo<SideSheetContextValue>(() => ({ variant, dismiss }), [variant, dismiss]);

  if (!visible) return null;

  const sheetContent = (
    <Animated.View
      style={[sheetStyles.container, animatedSheetStyle, style]}
      role="dialog"
      accessibilityViewIsModal={variant === 'modal'}
      accessibilityLabel={accessibilityLabel}
    >
      <SideSheetProvider value={ctx}>
        {headerSlot}
        {contentSlot}
        {actionsSlot}
      </SideSheetProvider>
    </Animated.View>
  );

  if (variant === 'modal') {
    return (
      <Modal transparent visible onRequestClose={dismiss} statusBarTranslucent>
        {/* Scrim */}
        <RNPressable
          style={StyleSheet.absoluteFillObject}
          onPress={handleScrimPress}
          accessibilityRole="button"
          accessibilityLabel="Close side sheet"
        >
          <Animated.View style={[sheetStyles.scrim, animatedScrimStyle, scrimStyle]} />
        </RNPressable>

        {/* Sheet anchored to end edge */}
        <View style={sheetStyles.modalAnchor} pointerEvents="box-none">
          {sheetContent}
        </View>
      </Modal>
    );
  }

  // Standard variant: rendered inline, with a leading divider
  return (
    <View style={sheetStyles.standardWrapper}>
      <Divider orientation="vertical" />
      {sheetContent}
    </View>
  );
}

// =============================================================================
// SideSheetHeader
// =============================================================================

function SideSheetHeader({ children }: SideSheetHeaderProps) {
  // Two-level slot sorting: extract back, headline, close from children
  let backSlot: React.ReactNode = null;
  let headlineSlot: React.ReactNode = null;
  let closeSlot: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const name = getDisplayName(child);

    switch (name) {
      case SIDE_SHEET_BACK:
        backSlot = child;
        break;
      case SIDE_SHEET_HEADLINE:
        headlineSlot = child;
        break;
      case SIDE_SHEET_CLOSE:
        closeSlot = child;
        break;
    }
  });

  const hasBack = backSlot !== null;
  const startPadding = hasBack ? MODAL_START_PADDING_WITH_ICON : HORIZONTAL_PADDING;

  return (
    <View style={[sheetStyles.header, { paddingStart: startPadding }]}>
      {backSlot}
      {headlineSlot ?? <View style={sheetStyles.headlineSpacer} />}
      {closeSlot}
    </View>
  );
}

// =============================================================================
// SideSheetHeadline
// =============================================================================

function SideSheetHeadline({ children }: SideSheetHeadlineProps) {
  return (
    <Text variant="title" size="large" style={sheetStyles.headline} numberOfLines={1}>
      {children}
    </Text>
  );
}

// =============================================================================
// SideSheetBack
// =============================================================================

function SideSheetBack({ onPress }: SideSheetBackProps) {
  return (
    <IconButton name="arrow_back" size="small" variant="standard" onPress={onPress} accessibilityLabel="Go back" />
  );
}

// =============================================================================
// SideSheetClose
// =============================================================================

function SideSheetClose({ onPress }: SideSheetCloseProps) {
  const { dismiss } = useSideSheet();

  const handlePress = React.useCallback(() => {
    if (onPress) {
      onPress();
    } else {
      dismiss();
    }
  }, [onPress, dismiss]);

  return (
    <IconButton
      name="close"
      size="small"
      variant="standard"
      onPress={handlePress}
      accessibilityLabel="Close side sheet"
    />
  );
}

// =============================================================================
// SideSheetContent
// =============================================================================

function SideSheetContent({ style, children }: SideSheetContentProps) {
  return (
    <ScrollView
      style={[sheetStyles.scrollContent, style]}
      contentContainerStyle={sheetStyles.scrollContentContainer}
      showsVerticalScrollIndicator
      bounces={false}
    >
      {children}
    </ScrollView>
  );
}

// =============================================================================
// SideSheetActions
// =============================================================================

function SideSheetActions({ showDivider = false, children }: SideSheetActionsProps) {
  return (
    <>
      {showDivider && <Divider />}
      <View style={sheetStyles.actionsContainer}>{children}</View>
    </>
  );
}

// =============================================================================
// Styles
// =============================================================================

const sheetStyles = StyleSheet.create((theme, rt) => ({
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.scrim,
  },

  modalAnchor: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  standardWrapper: {
    flexDirection: 'row',
    height: '100%',
  },

  container: {
    height: '100%',
    overflow: 'hidden',
    variants: {
      variant: {
        standard: {
          backgroundColor: theme.scheme.surface,
          ...theme.elevation[0],
        },
        modal: {
          backgroundColor: theme.scheme.surfaceContainerLow,
          borderTopStartRadius: theme.shape.large,
          borderBottomStartRadius: theme.shape.large,
          ...theme.elevation[1],
        },
      },
    },
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: TOP_ELEMENT_GAP,
    paddingEnd: HORIZONTAL_PADDING,
    paddingTop: Math.max(rt.insets.top, HORIZONTAL_PADDING),
    paddingBottom: TOP_ELEMENT_GAP,
  },

  headline: {
    flex: 1,
    color: theme.scheme.onSurfaceVariant,
  },

  headlineSpacer: {
    flex: 1,
  },

  scrollContent: {
    flex: 1,
  },

  scrollContentContainer: {
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingBottom: rt.insets.bottom + HORIZONTAL_PADDING,
  },

  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: ACTIONS_HEIGHT,
    paddingTop: ACTIONS_TOP_PADDING,
    paddingBottom: Math.min(rt.insets.bottom, ACTIONS_BOTTOM_PADDING),
    paddingHorizontal: HORIZONTAL_PADDING,
    gap: 8,
  },
}));

// =============================================================================
// Exports
// =============================================================================

SideSheet.displayName = 'SideSheet';
SideSheetHeader.displayName = SIDE_SHEET_HEADER;
SideSheetHeadline.displayName = SIDE_SHEET_HEADLINE;
SideSheetBack.displayName = SIDE_SHEET_BACK;
SideSheetClose.displayName = SIDE_SHEET_CLOSE;
SideSheetContent.displayName = SIDE_SHEET_CONTENT;
SideSheetActions.displayName = SIDE_SHEET_ACTIONS;

export type {
  SideSheetActionsProps,
  SideSheetBackProps,
  SideSheetCloseProps,
  SideSheetContentProps,
  SideSheetHeaderProps,
  SideSheetHeadlineProps,
  SideSheetProps,
  SideSheetVariant,
};
export {
  SideSheet,
  SideSheetActions,
  SideSheetBack,
  SideSheetClose,
  SideSheetContent,
  SideSheetHeader,
  SideSheetHeadline,
};
