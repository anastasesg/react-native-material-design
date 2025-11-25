/// Material Design TextField
/// Overview: https://m3.material.io/components/text-fields/overview
/// Specs: https://m3.material.io/components/text-fields/specs
/// Guidelines: https://m3.material.io/components/text-fields/guidelines
/// Accessibility: https://m3.material.io/components/text-fields/accessibility

import React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Pressable, TextInput as NativeTextInput, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { StyleSheet, UnistylesRuntime, withUnistyles } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

import type { TypographyStyle } from '@/theme/typography';

import { Icon, type MaterialSymbol } from './icon';
import { IconButton } from './icon-button';
import { Text } from './text';

// =============================================================================
// Themed TextInput — cursor/selection/placeholder colors react to theme changes
// =============================================================================

const UniTextInput = withUnistyles(NativeTextInput);

// =============================================================================
// Typography interpolation worklet
// =============================================================================

const interpolateTypography = (
  x: number,
  inputRange: readonly number[],
  outputRange: readonly TypographyStyle[],
  type: Extrapolation = Extrapolation.CLAMP,
): TypographyStyle => {
  'worklet';

  const fontSizes = outputRange.map((s) => s.fontSize);
  const letterSpacings = outputRange.map((s) => s.letterSpacing);

  let index = inputRange.findIndex((v) => v >= x);
  if (index < 0) index = outputRange.length - 1;

  const target = outputRange[index]!;

  return {
    fontFamily: target.fontFamily,
    fontSize: interpolate(x, inputRange, fontSizes, type),
    lineHeight: undefined,
    letterSpacing: interpolate(x, inputRange, letterSpacings, type),
    fontWeight: target.fontWeight,
    fontStyle: target.fontStyle ?? 'normal',
  };
};

// =============================================================================
// Types
// =============================================================================

type TextFieldVariant = 'filled' | 'outlined';

type TextFieldProps = {
  /** Visual variant. */
  variant?: TextFieldVariant;
  /** Label text (always required per M3). */
  label: string;
  /** Whether the field is in error state. */
  error?: boolean;
  /** Whether the field is disabled. */
  disabled?: boolean;
  /** Style applied to the outer wrapper. */
  style?: StyleProp<ViewStyle>;
  /** Style applied to the container (for custom background on outlined variant). */
  containerStyle?: StyleProp<ViewStyle>;
  /** Children: TextFieldLeadingIcon, TextFieldInput, TextFieldTrailingIcon, TextFieldSupportingText */
  children: React.ReactNode;
};

type TextFieldLeadingIconProps = {
  /** Icon name. */
  name: MaterialSymbol;
  /** @internal */
  __internal__disabled?: boolean;
  /** @internal */
  __internal__error?: boolean;
};

type TextFieldInputProps = {
  /** Controlled text value. */
  value?: string;
  /** Called when text changes. */
  onChangeText?: (text: string) => void;
  /** Placeholder text. */
  placeholder?: string;
  /** Prefix text displayed before input. */
  prefix?: string;
  /** Suffix text displayed after input. */
  suffix?: string;
  /** Called when Enter/Return is pressed. */
  onSubmitEditing?: () => void;
  /** Whether to auto-focus the input. */
  autoFocus?: boolean;
  /** Whether to use secure text entry. */
  secureTextEntry?: boolean;
  /** Keyboard type. */
  keyboardType?: React.ComponentProps<typeof NativeTextInput>['keyboardType'];
  /** Auto-capitalize mode. */
  autoCapitalize?: React.ComponentProps<typeof NativeTextInput>['autoCapitalize'];
  /** Whether to allow multi-line input. */
  multiline?: boolean;
  /** Maximum number of lines (multiline only). */
  numberOfLines?: number;
  /** Style applied to the TextInput. */
  contentStyle?: StyleProp<TextStyle>;
  /** @internal */
  __internal__disabled?: boolean;
  /** @internal */
  __internal__error?: boolean;
  /** @internal */
  __internal__focused?: boolean;
  /** @internal */
  __internal__onFocus?: () => void;
  /** @internal */
  __internal__onBlur?: () => void;
  /** @internal */
  __internal__onTextChange?: (text: string) => void;
  /** @internal */
  __internal__inputRef?: React.RefObject<any>;
};

type TextFieldTrailingIconProps = {
  /** Icon name. */
  name: MaterialSymbol;
  /** Press handler — makes icon a pressable IconButton. */
  onPress?: () => void;
  /** @internal */
  __internal__disabled?: boolean;
  /** @internal */
  __internal__error?: boolean;
};

type TextFieldSupportingTextProps = {
  /** Supporting text content. */
  children: React.ReactNode;
  /** @internal */
  __internal__disabled?: boolean;
  /** @internal */
  __internal__error?: boolean;
};

// =============================================================================
// Constants
// =============================================================================

const CONTAINER_HEIGHT = 56;
const ICON_SIZE = 24;
const PADDING_HORIZONTAL = 16;
const PADDING_HORIZONTAL_WITH_ICONS = 12;
const ICON_TEXT_GAP = 16;
const SUPPORTING_TEXT_TOP_PADDING = 4;
const LABEL_NOTCH_PADDING_HORIZONTAL = 4;

// =============================================================================
// Display name constants
// =============================================================================

const TEXT_FIELD_LEADING_ICON = 'TextFieldLeadingIcon';
const TEXT_FIELD_INPUT = 'TextFieldInput';
const TEXT_FIELD_TRAILING_ICON = 'TextFieldTrailingIcon';
const TEXT_FIELD_SUPPORTING_TEXT = 'TextFieldSupportingText';

// =============================================================================
// TextField (root)
// =============================================================================

function TextField({
  variant = 'filled',
  label,
  error = false,
  disabled = false,
  style,
  containerStyle,
  children,
}: TextFieldProps) {
  styles.useVariants({ variant, error });

  const theme = useAnimatedTheme();

  const textInputRef = React.useRef<any>(null);

  const [isFocused, setIsFocused] = React.useState(false);

  // progress: 0 = label resting (centered), 1 = label floating (top)
  const progress = useSharedValue(0);
  // focusProgress: 0 = unfocused, 1 = focused (drives border thickness animation)
  const focusProgress = useSharedValue(0);

  const handleFocus = React.useCallback(() => {
    setIsFocused(true);
    const { fastEffects, fastSpatial } = UnistylesRuntime.getTheme().motion.spring;
    focusProgress.value = withSpring(1, fastEffects);
    progress.value = withSpring(1, fastSpatial);
  }, [progress, focusProgress]);

  const handleBlur = React.useCallback(() => {
    setIsFocused(false);
    const { fastEffects } = UnistylesRuntime.getTheme().motion.spring;
    focusProgress.value = withSpring(0, fastEffects);
  }, [focusProgress]);

  // Sort children into slots
  let leadingIconSlot: React.ReactElement | null = null;
  let inputSlot: React.ReactElement | null = null;
  const trailingIconSlots: React.ReactElement[] = [];
  let supportingTextSlot: React.ReactElement | null = null;

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    const displayName = (child.type as any).displayName;

    switch (displayName) {
      case TEXT_FIELD_LEADING_ICON:
        leadingIconSlot = child;
        break;
      case TEXT_FIELD_INPUT:
        inputSlot = child;
        break;
      case TEXT_FIELD_TRAILING_ICON:
        trailingIconSlots.push(child);
        break;
      case TEXT_FIELD_SUPPORTING_TEXT:
        supportingTextSlot = child;
        break;
    }
  });

  const hasLeadingIcon = leadingIconSlot != null;
  const hasTrailingIcon = trailingIconSlots.length > 0;

  // Track value presence for label animation
  const inputValue = (inputSlot as React.ReactElement<TextFieldInputProps> | null)?.props?.value;
  const [hasValue, setHasValue] = React.useState(() => (inputValue ?? '').length > 0);

  const handleTextChange = React.useCallback((text: string) => setHasValue(text.length > 0), []);

  // Sync hasValue from controlled value prop
  React.useEffect(() => {
    if (inputValue != null) {
      setHasValue(inputValue.length > 0);
    }
  }, [inputValue]);

  React.useEffect(() => {
    const { fastSpatial } = UnistylesRuntime.getTheme().motion.spring;
    if (hasValue) {
      progress.value = withSpring(1, fastSpatial);
    } else if (!isFocused) {
      progress.value = withSpring(0, fastSpatial);
    }
  }, [hasValue, isFocused, progress]);

  // Clone children with __internal__ props
  const clonedLeadingIcon = leadingIconSlot
    ? React.cloneElement(leadingIconSlot, {
        __internal__disabled: disabled,
        __internal__error: error,
      } as any)
    : null;

  const clonedInput = inputSlot
    ? React.cloneElement(inputSlot, {
        __internal__disabled: disabled,
        __internal__error: error,
        __internal__focused: isFocused,
        __internal__onFocus: handleFocus,
        __internal__onBlur: handleBlur,
        __internal__onTextChange: handleTextChange,
        __internal__inputRef: textInputRef,
      } as any)
    : null;

  const clonedTrailingIcons = trailingIconSlots.map((icon, index) =>
    React.cloneElement(icon, {
      __internal__disabled: disabled,
      __internal__error: error,
      key: index,
    } as any));

  const clonedSupportingText = supportingTextSlot
    ? React.cloneElement(supportingTextSlot, {
        __internal__disabled: disabled,
        __internal__error: error,
      } as any)
    : null;

  // Flatten containerStyle to extract background color for notch
  const flattenedContainerStyle = React.useMemo(() => StyleSheet.flatten(containerStyle), [containerStyle]);

  // -- Label typography interpolation --
  const labelTypography = useDerivedValue(() => {
    return interpolateTypography(
      progress.value,
      [0, 1],
      [theme.value.typography.body.large, theme.value.typography.body.small],
    );
  });

  // -- Label container animated style (position + background for notch) --
  const labelContainerStyle = useAnimatedStyle(() => {
    const containerBg = flattenedContainerStyle?.backgroundColor
      ? String(flattenedContainerStyle.backgroundColor)
      : variant === 'filled'
        ? theme.value.scheme.surfaceContainerHighest
        : theme.value.scheme.surface;

    // Resting: vertically centered in 56dp container
    const labelFontSize = labelTypography.value.fontSize;
    const restingTop = (CONTAINER_HEIGHT - labelFontSize) / 2;
    const floatingTop = variant === 'filled' ? 8 : -8;

    const restingLeft = hasLeadingIcon ? ICON_TEXT_GAP + ICON_SIZE + PADDING_HORIZONTAL_WITH_ICONS : PADDING_HORIZONTAL;
    const floatingLeft =
      variant === 'filled'
        ? hasLeadingIcon
          ? ICON_TEXT_GAP + ICON_SIZE + PADDING_HORIZONTAL_WITH_ICONS
          : PADDING_HORIZONTAL
        : PADDING_HORIZONTAL;

    const backgroundColor =
      variant === 'outlined' ? interpolateColor(progress.value, [0, 1], ['#00000000', containerBg]) : '#00000000';

    const paddingHorizontal =
      variant === 'outlined'
        ? interpolate(progress.value, [0, 1], [0, LABEL_NOTCH_PADDING_HORIZONTAL], Extrapolation.CLAMP)
        : 0;

    return {
      top: interpolate(progress.value, [0, 1], [restingTop, floatingTop], Extrapolation.CLAMP),
      left: interpolate(progress.value, [0, 1], [restingLeft, floatingLeft], Extrapolation.CLAMP),
      backgroundColor,
      paddingHorizontal,
    };
  });

  // -- Label text animated style (color + typography) --
  const labelTextStyle = useAnimatedStyle(() => {
    const labelColor = error
      ? theme.value.scheme.error
      : isFocused
        ? theme.value.scheme.primary
        : theme.value.scheme.onSurfaceVariant;

    return {
      ...labelTypography.value,
      color: disabled ? theme.value.scheme.onSurface : labelColor,
      opacity: disabled ? 0.38 : 1,
    };
  });

  // -- Border animated style (filled: bottom border, outlined: full border) --
  const borderAnimatedStyle = useAnimatedStyle(() => {
    const borderColor = error
      ? theme.value.scheme.error
      : isFocused
        ? theme.value.scheme.primary
        : variant === 'filled'
          ? theme.value.scheme.onSurfaceVariant
          : theme.value.scheme.outline;

    if (variant === 'filled') {
      return {
        borderBottomColor: disabled ? theme.value.scheme.onSurface : borderColor,
        borderBottomWidth: interpolate(focusProgress.value, [0, 1], [1, 3], Extrapolation.CLAMP),
        opacity: disabled ? 0.38 : 1,
      };
    }

    return {
      borderColor: disabled ? theme.value.scheme.onSurface : borderColor,
      borderWidth: interpolate(focusProgress.value, [0, 1], [1, 3], Extrapolation.CLAMP),
      opacity: disabled ? 0.12 : 1,
    };
  });

  const paddingLeft = hasLeadingIcon ? PADDING_HORIZONTAL_WITH_ICONS : PADDING_HORIZONTAL;
  const paddingRight = hasTrailingIcon ? PADDING_HORIZONTAL_WITH_ICONS : PADDING_HORIZONTAL;

  return (
    <View style={[styles.wrapper, style]}>
      <Pressable
        style={[styles.container, containerStyle]}
        onPress={() => !disabled && textInputRef.current?.focus()}
        disabled={disabled}
        accessible={false}
      >
        {/* Border / active indicator */}
        <Animated.View
          style={[variant === 'filled' ? styles.underline : styles.outline, borderAnimatedStyle]}
          pointerEvents="none"
        />

        {/* Disabled overlay for filled variant */}
        {variant === 'filled' && disabled && <View style={styles.filledDisabledOverlay} pointerEvents="none" />}

        {/* Content row */}
        <View style={[styles.contentRow, { paddingLeft, paddingRight }]}>
          {clonedLeadingIcon && <View style={styles.iconWrapper}>{clonedLeadingIcon}</View>}
          <View style={styles.inputArea}>{clonedInput}</View>
          {clonedTrailingIcons.length > 0 && <View style={styles.trailingContainer}>{clonedTrailingIcons}</View>}
        </View>

        {/* Label — absolutely positioned, animates above everything */}
        <Animated.View style={[styles.labelContainer, labelContainerStyle]} pointerEvents="none">
          <Animated.Text style={labelTextStyle} numberOfLines={1}>
            {label}
          </Animated.Text>
        </Animated.View>
      </Pressable>

      {/* Supporting text */}
      {clonedSupportingText}
    </View>
  );
}

// =============================================================================
// TextFieldLeadingIcon
// =============================================================================

function TextFieldLeadingIcon({
  name,
  __internal__disabled = false,
  __internal__error: _error = false,
}: TextFieldLeadingIconProps) {
  return <Icon name={name} size={ICON_SIZE} style={[styles.leadingIcon, __internal__disabled && styles.disabled]} />;
}
TextFieldLeadingIcon.displayName = TEXT_FIELD_LEADING_ICON;

// =============================================================================
// TextFieldInput
// =============================================================================

function TextFieldInput({
  value,
  onChangeText,
  placeholder,
  prefix,
  suffix,
  onSubmitEditing,
  autoFocus,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
  multiline,
  numberOfLines,
  contentStyle,
  __internal__disabled = false,
  __internal__error = false,
  __internal__focused = false,
  __internal__onFocus,
  __internal__onBlur,
  __internal__onTextChange,
  __internal__inputRef,
}: TextFieldInputProps) {
  const showPrefix = prefix && (__internal__focused || (value ?? '').length > 0);
  const showSuffix = suffix && (__internal__focused || (value ?? '').length > 0);

  const handleChangeText = React.useCallback((text: string) => {
    onChangeText?.(text);
    __internal__onTextChange?.(text);
  }, [onChangeText, __internal__onTextChange]);

  return (
    <View style={styles.textInputRow}>
      {showPrefix && (
        <Text variant="body" size="large" style={[styles.prefixSuffix, __internal__disabled && styles.disabled]}>
          {prefix}
        </Text>
      )}
      <UniTextInput
        ref={__internal__inputRef}
        value={value}
        onChangeText={handleChangeText}
        onFocus={__internal__onFocus}
        onBlur={__internal__onBlur}
        onSubmitEditing={onSubmitEditing}
        placeholder={__internal__focused ? placeholder : undefined}
        style={[styles.textInput, __internal__disabled && styles.disabled, contentStyle]}
        editable={!__internal__disabled}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        numberOfLines={numberOfLines}
        uniProps={(uniTheme) => ({
          cursorColor: __internal__error ? uniTheme.scheme.error : uniTheme.scheme.primary,
          selectionColor: __internal__error ? uniTheme.scheme.error : uniTheme.scheme.primary,
          placeholderTextColor: uniTheme.scheme.onSurfaceVariant,
        })}
      />
      {showSuffix && (
        <Text variant="body" size="large" style={[styles.prefixSuffix, __internal__disabled && styles.disabled]}>
          {suffix}
        </Text>
      )}
    </View>
  );
}
TextFieldInput.displayName = TEXT_FIELD_INPUT;

// =============================================================================
// TextFieldTrailingIcon
// =============================================================================

function TextFieldTrailingIcon({
  name,
  onPress,
  __internal__disabled = false,
  __internal__error = false,
}: TextFieldTrailingIconProps) {
  if (onPress) {
    return <IconButton name={name} variant="standard" size="small" onPress={onPress} disabled={__internal__disabled} />;
  }

  return (
    <Icon
      name={name}
      size={ICON_SIZE}
      style={[
        styles.trailingIcon,
        __internal__error && !__internal__disabled && styles.trailingIconError,
        __internal__disabled && styles.disabled,
      ]}
    />
  );
}
TextFieldTrailingIcon.displayName = TEXT_FIELD_TRAILING_ICON;

// =============================================================================
// TextFieldSupportingText
// =============================================================================

function TextFieldSupportingText({
  children,
  __internal__disabled = false,
  __internal__error = false,
}: TextFieldSupportingTextProps) {
  return (
    <Text
      variant="body"
      size="small"
      style={[
        styles.supportingText,
        __internal__error && !__internal__disabled && styles.supportingTextError,
        __internal__disabled && styles.disabled,
      ]}
    >
      {children}
    </Text>
  );
}
TextFieldSupportingText.displayName = TEXT_FIELD_SUPPORTING_TEXT;

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  wrapper: {
    width: '100%',

    variants: {
      variant: {
        filled: {},
        outlined: {},
      },
      error: {
        true: {},
        false: {},
      },
    },
  },

  // -- Container --
  container: {
    minHeight: CONTAINER_HEIGHT,
    position: 'relative',

    variants: {
      variant: {
        filled: {
          backgroundColor: theme.scheme.surfaceContainerHighest,
          borderTopLeftRadius: theme.shape.xsmall,
          borderTopRightRadius: theme.shape.xsmall,
        },
        outlined: {
          borderRadius: theme.shape.xsmall,
        },
      },
    },
  },

  // -- Border: filled = bottom underline, outlined = full border --
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
  },

  outline: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: theme.shape.xsmall,
    borderWidth: 1,
  },

  // -- Disabled overlay for filled (onSurface @ 0.04) --
  filledDisabledOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.scheme.onSurface,
    opacity: 0.04,
    borderTopLeftRadius: theme.shape.xsmall,
    borderTopRightRadius: theme.shape.xsmall,
  },

  // -- Content row --
  contentRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: ICON_TEXT_GAP,
    minHeight: CONTAINER_HEIGHT,
  },

  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputArea: {
    flex: 1,
    minHeight: 24,

    variants: {
      variant: {
        filled: {
          alignSelf: 'stretch',
          justifyContent: 'flex-end',
          paddingBottom: 8,
        },
        outlined: {
          justifyContent: 'center',
        },
      },
    },
  },

  // -- Label --
  labelContainer: {
    position: 'absolute',
    pointerEvents: 'none',
  },

  // -- TextInput --
  textInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInput: {
    flex: 1,
    color: theme.scheme.onSurface,
    ...theme.typography.body.large,
    lineHeight: undefined,
    paddingVertical: 0,
    margin: 0,
  },

  prefixSuffix: {
    color: theme.scheme.onSurfaceVariant,
  },

  // -- Icons --
  leadingIcon: {
    color: theme.scheme.onSurfaceVariant,
  },

  trailingIcon: {
    color: theme.scheme.onSurfaceVariant,
  },

  trailingIconError: {
    color: theme.scheme.error,
  },

  trailingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  disabled: {
    color: theme.scheme.onSurface,
    opacity: theme.state.disabledContent,
  },

  // -- Supporting text --
  supportingText: {
    paddingTop: SUPPORTING_TEXT_TOP_PADDING,
    paddingHorizontal: PADDING_HORIZONTAL,
    color: theme.scheme.onSurfaceVariant,
  },

  supportingTextError: {
    color: theme.scheme.error,
  },
}));

// =============================================================================
// Exports
// =============================================================================

export type {
  TextFieldInputProps,
  TextFieldLeadingIconProps,
  TextFieldProps,
  TextFieldSupportingTextProps,
  TextFieldTrailingIconProps,
  TextFieldVariant,
};
export { TextField, TextFieldInput, TextFieldLeadingIcon, TextFieldSupportingText, TextFieldTrailingIcon };
