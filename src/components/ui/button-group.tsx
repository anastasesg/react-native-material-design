/// Material Design Button Group
/// Overview: https://m3.material.io/components/button-groups/overview
/// Specs: https://m3.material.io/components/button-groups/specs
/// Guidelines: https://m3.material.io/components/button-groups/guidelines
/// Accessibility: https://m3.material.io/components/button-groups/accessibility

import React from 'react';
import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

import { useInteraction } from '../../hooks';
import { createComponentContext, createOptionalComponentContext } from '../../utilities';
import { type PerCornerShape, ShapeContainer, type ShapeCorner, type ShapeToken } from '../custom';

// =============================================================================
// Cross-component context: consumed by Button / IconButton to suppress corners
// =============================================================================

type ButtonGroupItemCtx = { suppressCornerAnimation: boolean };

const [ButtonGroupItemProvider, useButtonGroupItem] =
  createOptionalComponentContext<ButtonGroupItemCtx>('ButtonGroupItem');

// =============================================================================
// Types
// =============================================================================

type ButtonGroupSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type ButtonGroupVariant = 'standard' | 'connected';
type ButtonGroupShape = 'rounded' | 'square';

type ButtonGroupSelectionMode = 'single' | 'multi';

type ButtonGroupProps = {
  /** @default 'standard' */
  variant?: ButtonGroupVariant;
  /** @default 'medium' */
  size?: ButtonGroupSize;
  /** Shape for connected variant outer corners. Standard variant delegates shape to children. @default 'rounded' */
  shape?: ButtonGroupShape;
  disabled?: boolean;

  /** Enable group-managed selection. Connected variant only. */
  selectionMode?: ButtonGroupSelectionMode;
  /** Controlled selected index (single) or indices (multi). */
  selectedIndex?: number | number[];
  /** Default selected index/indices for uncontrolled usage. */
  defaultSelectedIndex?: number | number[];
  /** Called when selection changes. Receives index for single, indices array for multi. */
  onSelectedIndexChange?: (value: number | number[]) => void;

  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

// =============================================================================
// M3 spec token tables
// =============================================================================

/** Container height per size (enforced by group for connected variant) */
const HEIGHT: Record<ButtonGroupSize, number> = {
  xsmall: 32,
  small: 40,
  medium: 56,
  large: 96,
  xlarge: 136,
};

/** Standard variant: gap between buttons */
const STANDARD_GAP: Record<ButtonGroupSize, number> = {
  xsmall: 18,
  small: 12,
  medium: 8,
  large: 8,
  xlarge: 8,
};

/** Connected inner corner token at rest */
function getConnectedInnerRestToken(size: ButtonGroupSize): ShapeToken {
  if (size === 'large') return 'large';
  if (size === 'xlarge') return 'largeIncreased';
  return 'small';
}

/** Connected inner corner token when pressed */
function getConnectedInnerPressedToken(size: ButtonGroupSize): ShapeToken {
  if (size === 'large') return 'medium';
  if (size === 'xlarge') return 'large';
  return 'xsmall';
}

/** Outer corner value (rounded = height/2 pill, square = same as inner rest) */
function getConnectedOuterCorner(size: ButtonGroupSize, shape: ButtonGroupShape): ShapeCorner {
  return shape === 'rounded' ? HEIGHT[size] / 2 : getConnectedInnerRestToken(size);
}

/** Connected variant gap is always 2dp */
const CONNECTED_GAP = 2;

// =============================================================================
// Internal context for cross-item animation coordination
// =============================================================================

type ButtonGroupContextValue = {
  variant: ButtonGroupVariant;
  size: ButtonGroupSize;
  shape: ButtonGroupShape;
  disabled: boolean;
  count: number;
  /** Group-managed selection. null = no group selection (children manage their own). */
  selection: {
    mode: ButtonGroupSelectionMode;
    indices: number[];
    toggle: (index: number) => void;
  } | null;
};
const [ButtonGroupProvider, useButtonGroupContext] = createComponentContext<ButtonGroupContextValue>('ButtonGroup');

// =============================================================================
// Position helper
// =============================================================================

type ItemPosition = 'only' | 'first' | 'middle' | 'last';

function getPosition(index: number, count: number): ItemPosition {
  if (count === 1) return 'only';
  if (index === 0) return 'first';
  if (index === count - 1) return 'last';
  return 'middle';
}

// =============================================================================
// ButtonGroup (root container)
// =============================================================================

function ButtonGroup({
  variant = 'standard',
  size = 'medium',
  shape = 'rounded',
  disabled = false,
  selectionMode,
  selectedIndex: selectedIndexProp,
  defaultSelectedIndex,
  onSelectedIndexChange,
  style,
  children,
}: ButtonGroupProps) {
  const validChildren = React.Children.toArray(children).filter(React.isValidElement);
  const count = validChildren.length;

  // --- Group-managed selection ---
  const normalizeIndices = (v: number | number[] | undefined): number[] => {
    if (v === undefined) return [];
    return Array.isArray(v) ? v : [v];
  };

  const [internalIndices, setInternalIndices] = React.useState<number[]>(() =>
    normalizeIndices(selectedIndexProp ?? defaultSelectedIndex));

  const isControlled = selectedIndexProp !== undefined;
  const activeIndices = isControlled ? normalizeIndices(selectedIndexProp) : internalIndices;

  const toggle = React.useCallback((index: number) => {
    let next: number[];
    if (selectionMode === 'multi') {
      next = activeIndices.includes(index) ? activeIndices.filter((i) => i !== index) : [...activeIndices, index];
    } else {
      // single: select the new one (or deselect if same)
      next = activeIndices.includes(index) ? [] : [index];
    }
    if (!isControlled) setInternalIndices(next);
    if (onSelectedIndexChange) {
      onSelectedIndexChange(selectionMode === 'multi' ? next : (next[0] ?? -1));
    }
  }, [selectionMode, activeIndices, isControlled, onSelectedIndexChange]);

  const selection = selectionMode ? { mode: selectionMode, indices: activeIndices, toggle } : null;

  const ctx = React.useMemo<ButtonGroupContextValue>(
    () => ({ variant, size, shape, disabled, count, selection }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [variant, size, shape, disabled, count, selection?.mode, activeIndices, toggle],
  );

  const gap = variant === 'connected' ? CONNECTED_GAP : STANDARD_GAP[size];

  return (
    <ButtonGroupProvider value={ctx}>
      <View
        style={[groupStyles.root, { gap }, variant === 'standard' && groupStyles.standardRoot, style]}
        accessibilityRole="toolbar"
      >
        {validChildren.map((child, index) => {
          const position = getPosition(index, count);
          if (variant === 'connected') {
            return (
              <ConnectedItem key={index} index={index} position={position} child={child as React.ReactElement<any>} />
            );
          }
          return <StandardItem key={index} index={index} child={child as React.ReactElement<any>} />;
        })}
      </View>
    </ButtonGroupProvider>
  );
}

// =============================================================================
// ConnectedItem — clipping wrapper with animated asymmetric corner radii
// =============================================================================

function ConnectedItem({
  index,
  position,
  child,
}: {
  index: number;
  position: ItemPosition;
  child: React.ReactElement<any>;
}) {
  const ctx = useButtonGroupContext();
  const { size, shape, disabled: groupDisabled, selection } = ctx;

  // If group manages selection, derive from context; otherwise read from child props
  const isSelected = selection ? selection.indices.includes(index) : !!child.props.selected;
  const isDisabled = groupDisabled || !!child.props.disabled;

  const suppressCtx = React.useMemo<ButtonGroupItemCtx>(() => ({ suppressCornerAnimation: true }), []);

  // Detect outlined variant for border treatment on the wrapper
  const childVariant: string = child.props.variant ?? 'filled';
  const isOutlined = childVariant === 'outlined';
  const borderWidth = isOutlined ? (size === 'xlarge' ? 3 : size === 'large' ? 2 : 1) : 0;

  // --- Shape computation ---
  const { progress, handlers: pressHandlers } = useInteraction('press');

  const outerCorner = getConnectedOuterCorner(size, shape);

  // Rest shape: selected = pill corners, unselected = inner rest token
  const restInnerCorner: ShapeCorner = isSelected ? HEIGHT[size] / 2 : getConnectedInnerRestToken(size);
  const pressedInnerCorner: ShapeCorner = getConnectedInnerPressedToken(size);

  // Build per-corner shapes respecting position (outer corners on edges)
  function buildShape(inner: ShapeCorner): PerCornerShape {
    let tl: ShapeCorner = inner;
    let tr: ShapeCorner = inner;
    let bl: ShapeCorner = inner;
    let br: ShapeCorner = inner;
    if (position === 'first' || position === 'only') {
      tl = outerCorner;
      bl = outerCorner;
    }
    if (position === 'last' || position === 'only') {
      tr = outerCorner;
      br = outerCorner;
    }
    return { topLeft: tl, topRight: tr, bottomLeft: bl, bottomRight: br };
  }

  const restShape = buildShape(restInnerCorner);
  const pressShape = buildShape(pressedInnerCorner);

  // --- Press handlers (forward to child + drive interaction progress) ---
  const handlePressIn = React.useCallback((event: GestureResponderEvent) => {
    if (isDisabled) return;
    pressHandlers.onPressIn(event);
    child.props.onPressIn?.(event);
  }, [isDisabled, pressHandlers, child.props]);

  const handlePressOut = React.useCallback((event: GestureResponderEvent) => {
    if (isDisabled) return;
    pressHandlers.onPressOut(event);
    child.props.onPressOut?.(event);
  }, [isDisabled, pressHandlers, child.props]);

  // When group manages selection, intercept onPress to toggle via context
  const handlePress = React.useCallback((event: GestureResponderEvent) => {
    if (isDisabled) return;
    if (selection) {
      selection.toggle(index);
    }
    child.props.onPress?.(event);
  }, [isDisabled, selection, index, child.props]);

  // Build the props to clone onto the child
  const cloneProps: Record<string, any> = {
    size: child.props.size ?? size,
    disabled: isDisabled,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut,
    style: [child.props.style, groupStyles.connectedChildRoot],
    containerStyle: [child.props.containerStyle, groupStyles.connectedChildContainer],
  };

  // When group manages selection, pass selected and intercept press
  if (selection) {
    cloneProps.toggle = true;
    cloneProps.selected = isSelected;
    cloneProps.onPress = handlePress;
    // Prevent child from running its own toggle logic by not passing onSelectedChange
    cloneProps.onSelectedChange = undefined;
  }

  return (
    <ShapeContainer
      shape={restShape}
      shapes={{ press: pressShape }}
      progress={progress}
      style={[
        groupStyles.connectedClip,
        { height: HEIGHT[size] },
        isOutlined && [groupStyles.connectedOutlinedBorder, { borderWidth }],
      ]}
    >
      <ButtonGroupItemProvider value={suppressCtx}>
        {React.cloneElement(child, cloneProps as any)}
      </ButtonGroupItemProvider>
    </ShapeContainer>
  );
}

// =============================================================================
// StandardItem — width-animated wrapper for standard variant
// =============================================================================

function StandardItem({ child }: { index: number; child: React.ReactElement<any> }) {
  const ctx = useButtonGroupContext();
  const { size, shape, disabled: groupDisabled } = ctx ?? {};

  const isDisabled = groupDisabled || !!child.props.disabled;

  return (
    <View>
      {React.cloneElement(child, {
        size: child.props.size ?? size,
        shape: child.props.shape ?? shape,
        disabled: isDisabled,
      } as any)}
    </View>
  );
}

// =============================================================================
// Styles
// =============================================================================

const groupStyles = StyleSheet.create((theme) => ({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  standardRoot: {
    alignSelf: 'flex-start',
  },

  // -- Connected item wrapper --
  connectedClip: {
    flex: 1,
    overflow: 'hidden',
  },
  connectedOutlinedBorder: {
    borderColor: theme.scheme.outlineVariant,
  },
  /** Applied to child root (Pressable) to fill the connected wrapper */
  connectedChildRoot: {
    flex: 1,
    width: '100%' as any,
    height: '100%',
    borderRadius: 0,
  },
  /** Applied to child container (Animated.View) to fill and neutralize its own shape/border */
  connectedChildContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    borderWidth: 0,
  },

  // -- Standard item wrapper --
  standardItemWrapper: {
    overflow: 'hidden',
  },
}));

// =============================================================================
// Exports
// =============================================================================

ButtonGroup.displayName = 'ButtonGroup';

export type { ButtonGroupProps, ButtonGroupSelectionMode, ButtonGroupShape, ButtonGroupSize, ButtonGroupVariant };
export { ButtonGroup, useButtonGroupItem };
