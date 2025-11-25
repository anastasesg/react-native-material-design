/// Material Design Dialog
/// Overview: https://m3.material.io/components/dialogs/overview
/// Specs: https://m3.material.io/components/dialogs/specs
/// Guidelines: https://m3.material.io/components/dialogs/guidelines
/// Accessibility: https://m3.material.io/components/dialogs/accessibility

import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Modal, Pressable as RNPressable, ScrollView, View } from 'react-native';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import { Button, ButtonLabel } from './button';
import { Divider } from './divider';
import { Icon, type MaterialSymbol } from './icon';
import { IconButton } from './icon-button';
import { Text, type TextProps } from './text';

// =============================================================================
// Types
// =============================================================================

type DialogVariant = 'basic' | 'full-screen';

type DialogProps = {
  variant?: DialogVariant;
  visible: boolean;
  onDismiss?: () => void;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type DialogIconProps = {
  name: MaterialSymbol;
  __internal__variant?: DialogVariant;
};

type DialogHeadlineProps = Omit<TextProps, 'variant' | 'size'> & {
  __internal__variant?: DialogVariant;
  __internal__hasIcon?: boolean;
  children: React.ReactNode;
};

type DialogContentProps = {
  __internal__variant?: DialogVariant;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

type DialogDividerProps = {
  __internal__variant?: DialogVariant;
};

type DialogActionsProps = {
  __internal__variant?: DialogVariant;
  children?: React.ReactNode;
};

type DialogActionProps = {
  onPress?: () => void;
  disabled?: boolean;
  __internal__variant?: DialogVariant;
  children: React.ReactNode;
};

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

function Dialog({ variant = 'basic', visible, onDismiss, style, children }: DialogProps) {
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

  React.useEffect(() => {
    const { fastSpatial, fastEffects } = UnistylesRuntime.getTheme().motion.spring;
    if (visible) {
      setMounted(true);
      scrimOpacity.value = withSpring(SCRIM_OPACITY, fastEffects);
      containerScale.value = withSpring(1, fastSpatial);
      containerOpacity.value = withSpring(1, fastEffects);
    } else if (mounted) {
      scrimOpacity.value = withSpring(0, fastEffects);
      containerScale.value = withSpring(0.9, fastEffects);
      containerOpacity.value = withSpring(0, fastEffects, onCloseAnimationEnd);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

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
    onDismiss?.();
  }, [onDismiss]);

  if (!mounted) return null;

  // Sort children into slots
  let iconSlot: React.ReactNode = null;
  let headlineSlot: React.ReactNode = null;
  let contentSlot: React.ReactNode = null;
  let dividerSlot: React.ReactNode = null;
  let actionsSlot: React.ReactNode = null;
  // Full-screen: first DialogAction found goes in header
  let headerActionSlot: React.ReactNode = null;

  const hasIcon = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && (child.type as any).displayName === DIALOG_ICON,
  );

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const name = (child.type as any).displayName;

    switch (name) {
      case DIALOG_ICON:
        iconSlot = React.cloneElement(child, { __internal__variant: variant } as any);
        break;
      case DIALOG_HEADLINE:
        headlineSlot = React.cloneElement(child, {
          __internal__variant: variant,
          __internal__hasIcon: hasIcon,
        } as any);
        break;
      case DIALOG_CONTENT:
        contentSlot = React.cloneElement(child, { __internal__variant: variant } as any);
        break;
      case DIALOG_DIVIDER:
        dividerSlot = React.cloneElement(child, { __internal__variant: variant } as any);
        break;
      case DIALOG_ACTIONS:
        actionsSlot = React.cloneElement(child, { __internal__variant: variant } as any);
        break;
      case DIALOG_ACTION:
        // Bare DialogAction (not inside DialogActions) — used in full-screen header
        if (variant === 'full-screen' && !headerActionSlot) {
          headerActionSlot = React.cloneElement(child, { __internal__variant: variant } as any);
        }
        break;
    }
  });

  dialogStyles.useVariants({ variant });

  if (variant === 'full-screen') {
    return (
      <Modal transparent visible onRequestClose={handleDismiss} statusBarTranslucent>
        <RNPressable
          style={StyleSheet.absoluteFillObject}
          onPress={handleDismiss}
          accessibilityRole="button"
          accessibilityLabel="Close dialog"
        >
          <Animated.View style={[dialogStyles.scrim, animatedScrimStyle]} />
        </RNPressable>

        <Animated.View style={[dialogStyles.anchor, animatedFullScreenStyle]}>
          <View style={[dialogStyles.container, style]}>
            <View style={dialogStyles.header}>
              <IconButton name="close" onPress={handleDismiss} />
              {headlineSlot}
              {headerActionSlot}
            </View>
            {dividerSlot}
            {contentSlot}
          </View>
        </Animated.View>
      </Modal>
    );
  }

  return (
    <Modal transparent visible onRequestClose={handleDismiss} statusBarTranslucent>
      <RNPressable
        style={StyleSheet.absoluteFillObject}
        onPress={handleDismiss}
        accessibilityRole="button"
        accessibilityLabel="Close dialog"
      >
        <Animated.View style={[dialogStyles.scrim, animatedScrimStyle]} />
      </RNPressable>

      <View style={dialogStyles.anchor} pointerEvents="box-none">
        <Animated.View style={[dialogStyles.container, animatedBasicStyle, style]} accessibilityRole="alert">
          {iconSlot}
          {headlineSlot}
          {contentSlot}
          {dividerSlot}
          {actionsSlot}
        </Animated.View>
      </View>
    </Modal>
  );
}

// =============================================================================
// DialogIcon
// =============================================================================

function DialogIcon({ name, __internal__variant: _variant }: DialogIconProps) {
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

function DialogHeadline({
  __internal__variant = 'basic',
  __internal__hasIcon = false,
  style,
  children,
  ...props
}: DialogHeadlineProps) {
  const isFullScreen = __internal__variant === 'full-screen';
  dialogStyles.useVariants({ variant: __internal__variant, hasIcon: __internal__hasIcon });

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

function DialogContent({ __internal__variant = 'basic', style, children }: DialogContentProps) {
  dialogStyles.useVariants({ variant: __internal__variant });
  const isFullScreen = __internal__variant === 'full-screen';

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

function DialogDivider({ __internal__variant = 'basic' }: DialogDividerProps) {
  dialogStyles.useVariants({ variant: __internal__variant });
  return <Divider style={dialogStyles.divider} />;
}
DialogDivider.displayName = DIALOG_DIVIDER;

// =============================================================================
// DialogActions
// =============================================================================

function DialogActions({ __internal__variant: _variant, children }: DialogActionsProps) {
  return <View style={dialogStyles.actions}>{children}</View>;
}
DialogActions.displayName = DIALOG_ACTIONS;

// =============================================================================
// DialogAction
// =============================================================================

function DialogAction({ onPress, disabled = false, __internal__variant: _variant, children }: DialogActionProps) {
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

export type {
  DialogActionProps,
  DialogActionsProps,
  DialogContentProps,
  DialogDividerProps,
  DialogHeadlineProps,
  DialogIconProps,
  DialogProps,
  DialogVariant,
};
export { Dialog, DialogAction, DialogActions, DialogContent, DialogDivider, DialogHeadline, DialogIcon };
