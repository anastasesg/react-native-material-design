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
  /** Headline text displayed at the top of the sheet. */
  headline?: string;
  /** Whether to show the close icon button. Defaults to true. */
  showCloseButton?: boolean;
  /** Called when the close icon button is pressed. Also calls onOpenChange(false). */
  onClose?: () => void;
  /** Whether to show the back icon button (modal only). Defaults to false. */
  showBackButton?: boolean;
  /** Called when the back icon button is pressed. */
  onBack?: () => void;
  /** Content rendered in the bottom actions area. */
  actions?: React.ReactNode;
  /** Whether to show a divider above the actions area. Defaults to false. */
  showActionDivider?: boolean;
  /** Style applied to the sheet container. */
  style?: StyleProp<ViewStyle>;
  /** Style applied to the scrim overlay (modal variant only). */
  scrimStyle?: StyleProp<ViewStyle>;
  /** Style applied to the scrollable content area. */
  contentStyle?: StyleProp<ViewStyle>;
  /** Content rendered inside the sheet body (scrollable). */
  children?: React.ReactNode;
};

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

// =============================================================================
// SideSheet
// =============================================================================

function SideSheet({
  variant = 'modal',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  headline,
  showCloseButton = true,
  onClose,
  showBackButton = false,
  onBack,
  actions,
  showActionDivider = false,
  style,
  scrimStyle,
  contentStyle,
  children,
}: SideSheetProps) {
  sheetStyles.useVariants({ variant });

  const [isOpen, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  const handleClose = React.useCallback(() => {
    onClose?.();
    setOpen(false);
  }, [setOpen, onClose]);

  const handleBack = React.useCallback(() => {
    onBack?.();
  }, [onBack]);

  const handleScrimPress = React.useCallback(() => {
    if (variant === 'modal') {
      handleClose();
    }
  }, [variant, handleClose]);

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

  if (!visible) return null;

  const hasBackButton = variant === 'modal' && showBackButton;
  const startPadding = hasBackButton ? MODAL_START_PADDING_WITH_ICON : HORIZONTAL_PADDING;

  const sheetContent = (
    <Animated.View
      style={[sheetStyles.container, animatedSheetStyle, style]}
      role="dialog"
      accessibilityViewIsModal={variant === 'modal'}
      accessibilityLabel={headline ? `${headline} side sheet` : 'Side sheet'}
    >
      {/* Header row: back icon (optional) | headline | close icon */}
      <View style={[sheetStyles.header, { paddingStart: startPadding }]}>
        {hasBackButton && (
          <IconButton
            name="arrow_back"
            size="small"
            variant="standard"
            onPress={handleBack}
            accessibilityLabel="Go back"
          />
        )}
        {headline ? (
          <Text variant="title" size="large" style={sheetStyles.headline} numberOfLines={1}>
            {headline}
          </Text>
        ) : (
          <View style={sheetStyles.headlineSpacer} />
        )}
        {showCloseButton && (
          <IconButton
            name="close"
            size="small"
            variant="standard"
            onPress={handleClose}
            accessibilityLabel="Close side sheet"
          />
        )}
      </View>

      {/* Scrollable content */}
      <ScrollView
        style={[sheetStyles.scrollContent, contentStyle]}
        contentContainerStyle={sheetStyles.scrollContentContainer}
        showsVerticalScrollIndicator
        bounces={false}
      >
        {children}
      </ScrollView>

      {/* Actions area (optional) */}
      {actions && (
        <>
          {showActionDivider && <Divider />}
          <View style={sheetStyles.actionsContainer}>{actions}</View>
        </>
      )}
    </Animated.View>
  );

  if (variant === 'modal') {
    return (
      <Modal transparent visible onRequestClose={handleClose} statusBarTranslucent>
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

export type { SideSheetProps, SideSheetVariant };
export { SideSheet };
