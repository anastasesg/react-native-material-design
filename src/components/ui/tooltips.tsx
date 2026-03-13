/// Material Design Tooltips
/// Overview: https://m3.material.io/components/tooltips/overview
/// Specs: https://m3.material.io/components/tooltips/specs
/// Guidelines: https://m3.material.io/components/tooltips/guidelines
/// Accessibility: https://m3.material.io/components/tooltips/accessibility

import React from 'react';
import type { LayoutRectangle, StyleProp, ViewStyle } from 'react-native';
import { Dimensions, Modal, Pressable as RNPressable, View } from 'react-native';
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

import { useControllableState } from '../../hooks';
import { createComponentContext, getDisplayName } from '../../utilities';
import { Text } from './text';

// =============================================================================
// Types
// =============================================================================

type TooltipVariant = 'plain' | 'rich';

type TooltipProps = {
  /** Tooltip variant. Default: 'plain'. */
  variant?: TooltipVariant;
  /** Controls tooltip open state. */
  open?: boolean;
  /** Default open state for uncontrolled mode. */
  defaultOpen?: boolean;
  /** Called when open state changes. */
  onOpenChange?: (open: boolean) => void;
  /** Style applied to the tooltip container. */
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

type TooltipTriggerProps = {
  children: React.ReactNode;
};

type TooltipContentProps = {
  /** Style applied to the content text. */
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

type TooltipSubheadProps = {
  /** Style applied to the subhead text. */
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

type TooltipActionsProps = {
  /** Style applied to the actions row. */
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

// =============================================================================
// Context
// =============================================================================

type TooltipContextValue = {
  variant: TooltipVariant;
  onOpen: () => void;
};

const [TooltipProvider, useTooltip] = createComponentContext<TooltipContextValue>('Tooltip');

// =============================================================================
// Constants (from specs doc)
// =============================================================================

// Plain tooltip measurements
const PLAIN_CONTAINER_HEIGHT = 24; // specs: 24dp
const PLAIN_PADDING = 8; // specs: 8dp
const PLAIN_ANCHOR_GAP = 4; // guidelines: 4dp distance

// Rich tooltip measurements
const RICH_PADDING_TOP = 12; // specs: 12dp
const RICH_PADDING_BOTTOM = 8; // specs: 8dp
const RICH_PADDING_HORIZONTAL = 16; // specs: 16dp
const RICH_ANCHOR_GAP = 8; // 8dp gap for rich (larger surface)

// Shared
const VIEWPORT_MARGIN = 8; // guidelines: 8dp increments for dynamic positioning
const AUTO_DISMISS_DURATION = 1500; // guidelines: 1.5 seconds

// Sub-component display names (used for slot identification)
const TOOLTIP_TRIGGER = 'TooltipTrigger';
const TOOLTIP_CONTENT = 'TooltipContent';
const TOOLTIP_SUBHEAD = 'TooltipSubhead';
const TOOLTIP_ACTIONS = 'TooltipActions';

// =============================================================================
// Helpers
// =============================================================================

/**
 * Compute position for the tooltip relative to its anchor.
 * Centered below anchor with variant-specific gap.
 * Clamps to screen edges with VIEWPORT_MARGIN.
 */
function computeTooltipPosition(
  anchor: LayoutRectangle,
  tooltip: { width: number; height: number } | null,
  gap: number,
): ViewStyle {
  const { width: screenW, height: screenH } = Dimensions.get('window');
  const anchorCenterX = anchor.x + anchor.width / 2;

  // Default: below anchor
  let top = anchor.y + anchor.height + gap;
  let left = tooltip ? anchorCenterX - tooltip.width / 2 : anchor.x;

  if (tooltip) {
    // Flip above anchor if it overflows the bottom
    if (top + tooltip.height + VIEWPORT_MARGIN > screenH) {
      top = anchor.y - tooltip.height - gap;
    }

    // Clamp horizontal
    if (left < VIEWPORT_MARGIN) {
      left = VIEWPORT_MARGIN;
    }
    if (left + tooltip.width + VIEWPORT_MARGIN > screenW) {
      left = screenW - tooltip.width - VIEWPORT_MARGIN;
    }

    // Clamp top
    if (top < VIEWPORT_MARGIN) {
      top = VIEWPORT_MARGIN;
    }
  }

  return { position: 'absolute', top, left };
}

// =============================================================================
// Tooltip
// =============================================================================

function Tooltip({
  variant = 'plain',
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  style,
  children,
}: TooltipProps) {
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  const isRich = variant === 'rich';

  const [mounted, setMounted] = React.useState(false);
  const [anchorLayout, setAnchorLayout] = React.useState<LayoutRectangle | null>(null);
  const [tooltipSize, setTooltipSize] = React.useState<{ width: number; height: number } | null>(null);
  const anchorRef = React.useRef<View | null>(null);
  const dismissTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const containerOpacity = useSharedValue(0);

  // Sort children into slots
  let triggerSlot: React.ReactNode = null;
  let contentSlot: React.ReactNode = null;
  let subheadSlot: React.ReactNode = null;
  let actionsSlot: React.ReactNode = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const name = getDisplayName(child);

    switch (name) {
      case TOOLTIP_TRIGGER:
        triggerSlot = child;
        break;
      case TOOLTIP_CONTENT:
        contentSlot = child;
        break;
      case TOOLTIP_SUBHEAD:
        subheadSlot = child;
        break;
      case TOOLTIP_ACTIONS:
        actionsSlot = child;
        break;
    }
  });

  const hasActions = actionsSlot !== null;
  const gap = isRich ? RICH_ANCHOR_GAP : PLAIN_ANCHOR_GAP;

  const onCloseAnimationEnd = (finished?: boolean) => {
    'worklet';
    if (finished) {
      runOnJS(setMounted)(false);
    }
  };

  const measureAnchor = React.useCallback(() => {
    const node = anchorRef.current;
    if (node) {
      (node as any).measureInWindow((x: number, y: number, width: number, height: number) => {
        setAnchorLayout({ x, y, width, height });
      });
    }
  }, []);

  const handleTooltipLayout = React.useCallback((event: {
    nativeEvent: { layout: { width: number; height: number } };
  }) => {
    const { width, height } = event.nativeEvent.layout;
    setTooltipSize((prev) => {
      if (prev && prev.width === width && prev.height === height) return prev;
      return { width, height };
    });
  }, []);

  // Open/close animation
  React.useEffect(() => {
    const theme = UnistylesRuntime.getTheme();
    if (open) {
      measureAnchor();
      setMounted(true);
      containerOpacity.value = withTiming(1, {
        duration: theme.motion.duration.medium2,
        easing: Easing.bezier(...theme.motion.easing.emphasizedDecelerate),
      });

      // Auto-dismiss: plain always, rich only when no actions
      if (!isRich || !hasActions) {
        dismissTimer.current = setTimeout(() => {
          setOpen(false);
        }, AUTO_DISMISS_DURATION);
      }
    } else if (mounted) {
      containerOpacity.value = withTiming(
        0,
        {
          duration: theme.motion.duration.short3,
          easing: Easing.bezier(...theme.motion.easing.emphasizedAccelerate),
        },
        onCloseAnimationEnd,
      );
      setTooltipSize(null);
    }

    return () => {
      if (dismissTimer.current) {
        clearTimeout(dismissTimer.current);
        dismissTimer.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    opacity: containerOpacity.value,
  }));

  const handleDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const handleOpen = React.useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const tooltipPosition = React.useMemo(
    () => (anchorLayout ? computeTooltipPosition(anchorLayout, tooltipSize, gap) : undefined),
    [anchorLayout, tooltipSize, gap],
  );

  const ctx = React.useMemo<TooltipContextValue>(() => ({ variant, onOpen: handleOpen }), [variant, handleOpen]);

  const containerBaseStyle = isRich ? tooltipStyles.richContainer : tooltipStyles.plainContainer;

  return (
    <TooltipProvider value={ctx}>
      <View ref={anchorRef as any} collapsable={false}>
        {triggerSlot}
      </View>
      {mounted && (
        <Modal transparent visible onRequestClose={handleDismiss} statusBarTranslucent>
          <RNPressable
            style={StyleSheet.absoluteFillObject}
            onPress={handleDismiss}
            accessibilityRole="button"
            accessibilityLabel="Dismiss tooltip"
          />
          <Animated.View
            onLayout={handleTooltipLayout}
            style={[containerBaseStyle, animatedContainerStyle, tooltipPosition, style]}
            accessibilityRole="text"
          >
            {isRich && subheadSlot}
            {contentSlot}
            {isRich && actionsSlot}
          </Animated.View>
        </Modal>
      )}
    </TooltipProvider>
  );
}

// =============================================================================
// TooltipTrigger
// =============================================================================

function TooltipTrigger({ children }: TooltipTriggerProps) {
  const { onOpen } = useTooltip();

  return (
    <>
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<any>, { onLongPress: onOpen })
        : children}
    </>
  );
}

// =============================================================================
// TooltipContent
// =============================================================================

function TooltipContent({ style, children }: TooltipContentProps) {
  const { variant } = useTooltip();
  const isRich = variant === 'rich';

  return (
    <Text
      variant="body"
      size={isRich ? 'medium' : 'small'}
      style={[isRich ? tooltipStyles.richSupportingText : tooltipStyles.plainText, style]}
    >
      {children}
    </Text>
  );
}

// =============================================================================
// TooltipSubhead
// =============================================================================

function TooltipSubhead({ style, children }: TooltipSubheadProps) {
  return (
    <Text variant="title" size="small" style={[tooltipStyles.richSubhead, style]}>
      {children}
    </Text>
  );
}

// =============================================================================
// TooltipActions
// =============================================================================

function TooltipActions({ style, children }: TooltipActionsProps) {
  return <View style={[tooltipStyles.richActionsRow, style]}>{children}</View>;
}

// =============================================================================
// Styles
// =============================================================================

const tooltipStyles = StyleSheet.create((theme) => ({
  // Plain tooltip container
  // Tokens: md.comp.plain-tooltip.container.color = inverseSurface
  //         md.comp.plain-tooltip.container.shape = extra-small (4dp)
  //         Container height: 24dp, Padding: 8dp
  plainContainer: {
    backgroundColor: theme.scheme.inverseSurface,
    borderRadius: theme.shape.xsmall,
    height: PLAIN_CONTAINER_HEIGHT,
    paddingHorizontal: PLAIN_PADDING,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  // Plain tooltip supporting text
  // Token: md.comp.plain-tooltip.supporting-text.color = inverseOnSurface
  //        md.comp.plain-tooltip.supporting-text.type = body-small
  plainText: {
    color: theme.scheme.inverseOnSurface,
  },

  // Rich tooltip container
  // Tokens: md.comp.rich-tooltip.container.color = surfaceContainer
  //         md.comp.rich-tooltip.container.shape = medium (12dp)
  //         md.comp.rich-tooltip.container.elevation = level2
  //         Top padding: 12dp, Bottom padding: 8dp, Left/Right padding: 16dp
  richContainer: {
    backgroundColor: theme.scheme.surfaceContainer,
    borderRadius: theme.shape.medium,
    ...theme.elevation[2],
    paddingTop: RICH_PADDING_TOP,
    paddingBottom: RICH_PADDING_BOTTOM,
    paddingHorizontal: RICH_PADDING_HORIZONTAL,
    maxWidth: 320,
    minWidth: 200,
    alignSelf: 'flex-start',
  },

  // Rich tooltip subhead
  // Token: md.comp.rich-tooltip.subhead.color = onSurfaceVariant
  //        md.comp.rich-tooltip.subhead.type = title-small
  richSubhead: {
    color: theme.scheme.onSurfaceVariant,
    marginBottom: 4,
  },

  // Rich tooltip supporting text
  // Token: md.comp.rich-tooltip.supporting-text.color = onSurfaceVariant
  //        md.comp.rich-tooltip.supporting-text.type = body-medium
  richSupportingText: {
    color: theme.scheme.onSurfaceVariant,
  },

  // Rich tooltip action buttons row
  richActionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 12,
  },
}));

// =============================================================================
// Exports
// =============================================================================

Tooltip.displayName = 'Tooltip';
TooltipTrigger.displayName = TOOLTIP_TRIGGER;
TooltipContent.displayName = TOOLTIP_CONTENT;
TooltipSubhead.displayName = TOOLTIP_SUBHEAD;
TooltipActions.displayName = TOOLTIP_ACTIONS;

export type {
  TooltipActionsProps,
  TooltipContentProps,
  TooltipProps,
  TooltipSubheadProps,
  TooltipTriggerProps,
  TooltipVariant,
};
export { Tooltip, TooltipActions, TooltipContent, TooltipSubhead, TooltipTrigger };
