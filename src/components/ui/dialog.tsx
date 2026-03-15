/// Material Design Dialog
/// Overview: https://m3.material.io/components/dialogs/overview
/// Specs: https://m3.material.io/components/dialogs/specs
/// Guidelines: https://m3.material.io/components/dialogs/guidelines
/// Accessibility: https://m3.material.io/components/dialogs/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Modal, ScrollView, View } from 'react-native';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { useControllableState, useMotionConfig } from '../../hooks';
import { createComponentContext, getDisplayName } from '../../utilities';
import { Pressable } from '../custom';
import { Button, ButtonLabel } from './button';
import { Divider } from './divider';
import { Icon, type MaterialSymbol } from './icon';
import { IconButton, IconButtonIcon } from './icon-button';
import { Text, type TextProps } from './text';

// =============================================================================
// Types
// =============================================================================

type DialogVariant = 'basic' | 'full-screen';

type DialogProps = {
  variant?: DialogVariant;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onDismiss?: () => void;
  style?: StyleProp<ViewStyle>;
  /** Style applied to the scrim overlay. */
  scrimStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type DialogIconProps = {
  name: MaterialSymbol;
};

type DialogHeadlineProps = Omit<TextProps, 'variant' | 'size'> & {
  children: React.ReactNode;
};

type DialogContentProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type DialogActionsProps = {
  children?: React.ReactNode;
};

type DialogActionProps = {
  onPress?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

// =============================================================================
// Context
// =============================================================================

type DialogContextValue = {
  variant: DialogVariant;
  hasIcon: boolean;
};

const [DialogProvider, useDialog] = createComponentContext<DialogContextValue>('Dialog');

// =============================================================================
// Constants
// =============================================================================

const BASIC_MIN_WIDTH = 280;
const BASIC_MAX_WIDTH = 560;
const BASIC_CORNER_RADIUS = 28;
const BASIC_PADDING = 24;
const ICON_SIZE = 24;
const FULL_SCREEN_MAX_WIDTH = 560;
const FULL_SCREEN_HEADER_HEIGHT = 56;
const SCRIM_OPACITY = 0.32;

// =============================================================================
// Sub-component display names (used for slot identification)
// =============================================================================

const DIALOG_ICON = 'DialogIcon';
const DIALOG_HEADLINE = 'DialogHeadline';
const DIALOG_CONTENT = 'DialogContent';
const DIALOG_DIVIDER = 'DialogDivider';
const DIALOG_ACTIONS = 'DialogActions';
const DIALOG_ACTION = 'DialogAction';

// =============================================================================
// Dialog (root)
// =============================================================================

function Dialog({
  variant = 'basic',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  onDismiss,
  style,
  scrimStyle,
  children,
}: DialogProps) {
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });
  const [mounted, setMounted] = React.useState(false);

  const scrimOpacity = useSharedValue(0);
  const containerScale = useSharedValue(0.9);
  const containerOpacity = useSharedValue(0);

  const onCloseAnimationEnd = React.useCallback((finished?: boolean) => {
    'worklet';
    if (finished) {
      runOnJS(setMounted)(false);
    }
  }, []);

  const motion = useMotionConfig('fast');

  React.useEffect(() => {
    if (open) {
      setMounted(true);
      scrimOpacity.value = withSpring(SCRIM_OPACITY, motion.effects.value);
      containerScale.value = withSpring(1, motion.spatial.value);
      containerOpacity.value = withSpring(1, motion.effects.value);
    } else if (mounted) {
      scrimOpacity.value = withSpring(0, motion.effects.value);
      containerScale.value = withSpring(0.9, motion.effects.value);
      containerOpacity.value = withSpring(0, motion.effects.value, onCloseAnimationEnd);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const animatedScrimStyle = useAnimatedStyle(() => ({
    opacity: scrimOpacity.value,
  }));

  const animatedBasicStyle = useAnimatedStyle(() => ({
    transform: [{ scale: containerScale.value }],
    opacity: containerOpacity.value,
  }));

  const animatedFullScreenStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  const handleDismiss = React.useCallback(() => {
    setOpen(false);
    onDismiss?.();
  }, [setOpen, onDismiss]);

  const hasIcon = React.useMemo(
    () =>
      React.Children.toArray(children).some(
        (child) => React.isValidElement(child) && getDisplayName(child) === DIALOG_ICON,
      ),
    [children],
  );

  const ctx = React.useMemo<DialogContextValue>(() => ({ variant, hasIcon }), [variant, hasIcon]);

  dialogStyles.useVariants({ variant });

  if (!mounted) return null;

  // Sort children into slots
  let iconSlot: React.ReactNode = null;
  let headlineSlot: React.ReactNode = null;
  let contentSlot: React.ReactNode = null;
  let dividerSlot: React.ReactNode = null;
  let actionsSlot: React.ReactNode = null;
  // Full-screen: first DialogAction found goes in header
  let headerActionSlot: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const name = getDisplayName(child);

    switch (name) {
      case DIALOG_ICON:
        iconSlot = child;
        break;
      case DIALOG_HEADLINE:
        headlineSlot = child;
        break;
      case DIALOG_CONTENT:
        contentSlot = child;
        break;
      case DIALOG_DIVIDER:
        dividerSlot = child;
        break;
      case DIALOG_ACTIONS:
        actionsSlot = child;
        break;
      case DIALOG_ACTION:
        // Bare DialogAction (not inside DialogActions) — used in full-screen header
        if (variant === 'full-screen' && !headerActionSlot) {
          headerActionSlot = child;
        }
        break;
    }
  });

  if (variant === 'full-screen') {
    return (
      <Modal transparent visible onRequestClose={handleDismiss} statusBarTranslucent>
        <Pressable
          style={StyleSheet.absoluteFillObject}
          onPress={handleDismiss}
          accessibilityRole="button"
          accessibilityLabel="Close dialog"
        >
          <Animated.View style={[dialogStyles.scrim, animatedScrimStyle, scrimStyle]} />
        </Pressable>

        <Animated.View style={[dialogStyles.anchor, animatedFullScreenStyle]}>
          <DialogProvider value={ctx}>
            <View style={[dialogStyles.container, style]}>
              <View style={dialogStyles.header}>
                <IconButton onPress={handleDismiss} accessibilityLabel="Close">
                  <IconButtonIcon name="close" />
                </IconButton>
                {headlineSlot}
                {headerActionSlot}
              </View>
              {dividerSlot}
              {contentSlot}
            </View>
          </DialogProvider>
        </Animated.View>
      </Modal>
    );
  }

  return (
    <Modal transparent visible onRequestClose={handleDismiss} statusBarTranslucent>
      <Pressable
        style={StyleSheet.absoluteFillObject}
        onPress={handleDismiss}
        accessibilityRole="button"
        accessibilityLabel="Close dialog"
      >
        <Animated.View style={[dialogStyles.scrim, animatedScrimStyle, scrimStyle]} />
      </Pressable>

      <View style={dialogStyles.anchor} pointerEvents="box-none">
        <Animated.View style={[dialogStyles.container, animatedBasicStyle, style]} accessibilityRole="alert">
          <DialogProvider value={ctx}>
            {iconSlot}
            {headlineSlot}
            {contentSlot}
            {dividerSlot}
            {actionsSlot}
          </DialogProvider>
        </Animated.View>
      </View>
    </Modal>
  );
}

// =============================================================================
// DialogIcon
// =============================================================================

function DialogIcon({ name }: DialogIconProps) {
  return (
    <View style={dialogStyles.iconContainer}>
      <Icon name={name} size={ICON_SIZE} style={dialogStyles.icon} />
    </View>
  );
}
DialogIcon.displayName = DIALOG_ICON;

// =============================================================================
// DialogHeadline
// =============================================================================

function DialogHeadline({ style, children, ...props }: DialogHeadlineProps) {
  const { variant, hasIcon } = useDialog();
  const isFullScreen = variant === 'full-screen';
  dialogStyles.useVariants({ variant, hasIcon });

  return (
    <Text
      variant={isFullScreen ? 'title' : 'headline'}
      size={isFullScreen ? 'large' : 'small'}
      numberOfLines={isFullScreen ? 1 : undefined}
      style={[dialogStyles.headline, style]}
      {...props}
    >
      {children}
    </Text>
  );
}
DialogHeadline.displayName = DIALOG_HEADLINE;

// =============================================================================
// DialogContent
// =============================================================================

function DialogContent({ style, children }: DialogContentProps) {
  const { variant } = useDialog();
  dialogStyles.useVariants({ variant });
  const isFullScreen = variant === 'full-screen';

  return (
    <ScrollView
      style={dialogStyles.content}
      contentContainerStyle={[dialogStyles.contentContainer, style]}
      bounces={false}
    >
      {isFullScreen ? children : <View>{children}</View>}
    </ScrollView>
  );
}
DialogContent.displayName = DIALOG_CONTENT;

// =============================================================================
// DialogDivider
// =============================================================================

function DialogDivider() {
  const { variant } = useDialog();
  dialogStyles.useVariants({ variant });
  return <Divider style={dialogStyles.divider} />;
}
DialogDivider.displayName = DIALOG_DIVIDER;

// =============================================================================
// DialogActions
// =============================================================================

function DialogActions({ children }: DialogActionsProps) {
  return <View style={dialogStyles.actions}>{children}</View>;
}
DialogActions.displayName = DIALOG_ACTIONS;

// =============================================================================
// DialogAction
// =============================================================================

function DialogAction({ onPress, disabled = false, children }: DialogActionProps) {
  return (
    <Button variant="text" onPress={onPress} disabled={disabled}>
      <ButtonLabel>{children}</ButtonLabel>
    </Button>
  );
}
DialogAction.displayName = DIALOG_ACTION;

// =============================================================================
// Styles
// =============================================================================

const dialogStyles = StyleSheet.create((theme, rt) => ({
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.scrim,
  },

  anchor: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',

    variants: {
      variant: {
        basic: {
          padding: 48,
        },
        'full-screen': {},
      },
    },
  },

  container: {
    width: '100%',

    variants: {
      variant: {
        basic: {
          backgroundColor: theme.scheme.surfaceContainerHigh,
          borderRadius: BASIC_CORNER_RADIUS,
          minWidth: BASIC_MIN_WIDTH,
          maxWidth: BASIC_MAX_WIDTH,
          padding: BASIC_PADDING,
          // No elevation — surfaceContainerHigh provides visual elevation per M3 spec
        },
        'full-screen': {
          backgroundColor: theme.scheme.surface,
          height: '100%',
          maxWidth: FULL_SCREEN_MAX_WIDTH,
        },
      },
    },
  },

  iconContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },

  icon: {
    color: theme.scheme.secondary,
  },

  headline: {
    color: theme.scheme.onSurface,

    variants: {
      variant: {
        basic: {
          marginBottom: 16,
        },
        'full-screen': {
          flex: 1,
          marginHorizontal: 4,
        },
      },
      hasIcon: {
        true: {},
        false: {},
      },
    },
    compoundVariants: [{ variant: 'basic', hasIcon: true, styles: { textAlign: 'center' as const } }],
  },

  content: {
    variants: {
      variant: {
        basic: {
          maxHeight: 400,
        },
        'full-screen': {
          flex: 1,
        },
      },
    },
  },

  contentContainer: {
    variants: {
      variant: {
        basic: {},
        'full-screen': {
          padding: BASIC_PADDING,
          paddingBottom: BASIC_PADDING + rt.insets.bottom,
        },
      },
    },
  },

  divider: {
    marginVertical: 8,

    variants: {
      variant: {
        basic: {
          backgroundColor: theme.scheme.outline,
        },
        'full-screen': {},
      },
    },
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: BASIC_PADDING,
  },

  header: {
    height: FULL_SCREEN_HEADER_HEIGHT + rt.insets.top,
    paddingTop: rt.insets.top,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 4,
  },
}));

// =============================================================================
// Exports
// =============================================================================

Dialog.displayName = 'Dialog';

export type {
  DialogActionProps,
  DialogActionsProps,
  DialogContentProps,
  DialogHeadlineProps,
  DialogIconProps,
  DialogProps,
  DialogVariant,
};
export { Dialog, DialogAction, DialogActions, DialogContent, DialogDivider, DialogHeadline, DialogIcon };
