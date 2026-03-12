/// Material Design Carousel
/// Overview: https://m3.material.io/components/carousel/overview
/// Specs: https://m3.material.io/components/carousel/specs
/// Guidelines: https://m3.material.io/components/carousel/guidelines
/// Accessibility: https://m3.material.io/components/carousel/accessibility

import React from 'react';
import { type ImageSourcePropType, type StyleProp, type ViewStyle } from 'react-native';
import { ImageBackground, Pressable as RNPressable, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { useInteraction } from '../../hooks';
import { childGuard, warnUnexpectedChild } from '../../utilities';
import { StateLayer } from '../custom';
import { Text } from './text';

// =============================================================================
// Constants (M3 specs)
// =============================================================================

const ITEM_BORDER_RADIUS = 28;
const SMALL_ITEM_WIDTH = 56;
const ITEM_GAP = 8;
const HORIZONTAL_PADDING = 16;
const VERTICAL_PADDING = 8;
const PARALLAX_OVERFLOW = 40;
const FULL_SCREEN_GAP = 16;
const LABEL_HIDE_THRESHOLD = 120;

// =============================================================================
// Types
// =============================================================================

type CarouselLayout =
  | 'hero'
  | 'center-aligned-hero'
  | 'uncontained'
  | 'full-screen'
  | 'uncontained-multi-aspect'
  | 'multi-browse';

type CarouselProps = {
  layout?: CarouselLayout;
  /** Height of the carousel items in dp. Defaults to 200. */
  itemHeight?: number;
  /** Width of each item in the uncontained layout. Defaults to 200. */
  uncontainedItemWidth?: number;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};

type CarouselItemProps = {
  onPress?: () => void;
  accessibilityLabel?: string;
  /** Aspect ratio (width/height) for uncontained-multi-aspect layout. */
  aspectRatio?: number;
  /** Style applied to the item container. */
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;

  /** @internal Injected by Carousel */
  __internal__index?: number;
  __internal__totalItems?: number;
  __internal__scrollX?: SharedValue<number>;
  __internal__layout?: CarouselLayout;
  __internal__itemHeight?: number;
  __internal__largeItemWidth?: number;
  __internal__pageWidth?: number;
  __internal__uncontainedItemWidth?: number;
  __internal__mediumItemWidth?: number;
};

type CarouselItemImageProps = {
  source: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;

  /** @internal Injected by CarouselItem */
  __internal__index?: number;
  __internal__scrollX?: SharedValue<number>;
  __internal__layout?: CarouselLayout;
  __internal__pageWidth?: number;
  __internal__uncontainedItemWidth?: number;
  /** @internal For multi-aspect: the item's own computed width (used as parallax step) */
  __internal__computedItemWidth?: number;
};

type CarouselItemLabelProps = {
  children: string;
  style?: StyleProp<ViewStyle>;

  /** @internal Injected by CarouselItem */
  __internal__index?: number;
  __internal__scrollX?: SharedValue<number>;
  __internal__layout?: CarouselLayout;
  __internal__pageWidth?: number;
  __internal__largeItemWidth?: number;
  __internal__mediumItemWidth?: number;
};

const isCarouselItem = childGuard<CarouselItemProps>('CarouselItem');
const isCarouselItemImage = childGuard<CarouselItemImageProps>('CarouselItemImage');
const isCarouselItemLabel = childGuard<CarouselItemLabelProps>('CarouselItemLabel');
const CAROUSEL_CHILDREN = ['CarouselItem'];
const CAROUSEL_ITEM_CHILDREN = ['CarouselItemImage', 'CarouselItemLabel'];

// =============================================================================
// CarouselItemImage
// =============================================================================

function CarouselItemImage({
  source,
  style,
  __internal__index = 0,
  __internal__scrollX,
  __internal__layout = 'hero',
  __internal__pageWidth = 0,
  __internal__uncontainedItemWidth = 200,
  __internal__computedItemWidth,
}: CarouselItemImageProps) {
  const animatedImageStyle = useAnimatedStyle(() => {
    if (!__internal__scrollX || __internal__layout === 'full-screen') return {};

    const isHeroLike = __internal__layout === 'hero' || __internal__layout === 'center-aligned-hero';
    const isMultiBrowse = __internal__layout === 'multi-browse';
    const isMultiAspect = __internal__layout === 'uncontained-multi-aspect';
    const uncontainedWidth =
      isMultiAspect && __internal__computedItemWidth ? __internal__computedItemWidth : __internal__uncontainedItemWidth;
    const stepWidth = isHeroLike || isMultiBrowse ? __internal__pageWidth : uncontainedWidth + ITEM_GAP;

    if (stepWidth <= 0) return {};

    const itemStart = __internal__index * stepWidth;

    const translateX = interpolate(
      __internal__scrollX.value,
      [itemStart - stepWidth, itemStart, itemStart + stepWidth],
      [PARALLAX_OVERFLOW, 0, -PARALLAX_OVERFLOW],
      Extrapolation.CLAMP,
    );

    return { transform: [{ translateX }] };
  }, [
    __internal__index,
    __internal__layout,
    __internal__pageWidth,
    __internal__uncontainedItemWidth,
    __internal__computedItemWidth,
  ]);

  return (
    <Animated.View style={[styles.imageContainer, animatedImageStyle]}>
      <ImageBackground source={source} style={[styles.image, style]} resizeMode="cover" />
    </Animated.View>
  );
}

// =============================================================================
// CarouselItemLabel
// =============================================================================

function CarouselItemLabel({
  children,
  style,
  __internal__index = 0,
  __internal__scrollX,
  __internal__layout = 'hero',
  __internal__pageWidth = 0,
  __internal__largeItemWidth = 0,
  __internal__mediumItemWidth = 0,
}: CarouselItemLabelProps) {
  const animatedLabelStyle = useAnimatedStyle(() => {
    const isHeroLike = __internal__layout === 'hero' || __internal__layout === 'center-aligned-hero';
    const isMultiBrowse = __internal__layout === 'multi-browse';

    if ((!isHeroLike && !isMultiBrowse) || !__internal__scrollX || __internal__largeItemWidth <= 0) {
      return { opacity: 1 };
    }

    const itemStart = __internal__index * __internal__pageWidth;

    // Multi-browse: 4-point asymmetric [small, medium, large, small]
    // Hero/center-aligned: 3-point symmetric [small, large, small]
    const width = isMultiBrowse
      ? interpolate(
          __internal__scrollX.value,
          [
            itemStart - 2 * __internal__pageWidth,
            itemStart - __internal__pageWidth,
            itemStart,
            itemStart + __internal__pageWidth,
          ],
          [SMALL_ITEM_WIDTH, __internal__mediumItemWidth, __internal__largeItemWidth, SMALL_ITEM_WIDTH],
          Extrapolation.CLAMP,
        )
      : interpolate(
          __internal__scrollX.value,
          [itemStart - __internal__pageWidth, itemStart, itemStart + __internal__pageWidth],
          [SMALL_ITEM_WIDTH, __internal__largeItemWidth, SMALL_ITEM_WIDTH],
          Extrapolation.CLAMP,
        );

    const opacity = interpolate(width, [LABEL_HIDE_THRESHOLD, LABEL_HIDE_THRESHOLD + 40], [0, 1], Extrapolation.CLAMP);

    return { opacity };
  }, [
    __internal__index,
    __internal__layout,
    __internal__pageWidth,
    __internal__largeItemWidth,
    __internal__mediumItemWidth,
  ]);

  return (
    <Animated.View style={[styles.labelOverlay, animatedLabelStyle]}>
      <Text variant="title" size="medium" style={[styles.label, style]} numberOfLines={2}>
        {children}
      </Text>
    </Animated.View>
  );
}

// =============================================================================
// CarouselItem
// =============================================================================

function CarouselItem({
  onPress,
  accessibilityLabel,
  aspectRatio,
  style: itemStyle,
  children,
  __internal__index = 0,
  __internal__totalItems = 1,
  __internal__scrollX,
  __internal__layout = 'hero',
  __internal__itemHeight = 200,
  __internal__largeItemWidth = 0,
  __internal__pageWidth = 0,
  __internal__uncontainedItemWidth = 200,
  __internal__mediumItemWidth = 0,
}: CarouselItemProps) {
  const { progress, handlers } = useInteraction('press');

  const isHeroLike = __internal__layout === 'hero' || __internal__layout === 'center-aligned-hero';

  const isCenteredHero = __internal__layout === 'center-aligned-hero';

  const isMultiBrowse = __internal__layout === 'multi-browse';

  const animatedItemStyle = useAnimatedStyle(() => {
    // Multi-browse: 4-point asymmetric interpolation for width + marginLeft
    if (isMultiBrowse && __internal__scrollX && __internal__largeItemWidth > 0) {
      const pw = __internal__pageWidth;
      const itemStart = __internal__index * pw;

      const width = interpolate(
        __internal__scrollX.value,
        [itemStart - 2 * pw, itemStart - pw, itemStart, itemStart + pw],
        [SMALL_ITEM_WIDTH, __internal__mediumItemWidth, __internal__largeItemWidth, SMALL_ITEM_WIDTH],
        Extrapolation.CLAMP,
      );

      // marginLeft positions items within their uniform wrapper to maintain 8dp visual gaps
      const mlMedium = __internal__largeItemWidth + ITEM_GAP - pw;
      const mlSmall = __internal__largeItemWidth + __internal__mediumItemWidth + ITEM_GAP * 2 - pw * 2;

      const marginLeft = interpolate(
        __internal__scrollX.value,
        [itemStart - 2 * pw, itemStart - pw, itemStart, itemStart + pw],
        [mlSmall, mlMedium, 0, 0],
        Extrapolation.CLAMP,
      );

      const isFocal = width > __internal__mediumItemWidth + 1;

      return { width, marginLeft, zIndex: isFocal ? 1 : 0 };
    }

    if (!isHeroLike || !__internal__scrollX || __internal__largeItemWidth <= 0) {
      return {};
    }

    const itemStart = __internal__index * __internal__pageWidth;

    // Item 0 in center-aligned-hero gets wider focal width (hero-like, fills left space)
    const focalWidth =
      isCenteredHero && __internal__index === 0
        ? __internal__largeItemWidth + SMALL_ITEM_WIDTH + ITEM_GAP
        : __internal__largeItemWidth;

    const width = interpolate(
      __internal__scrollX.value,
      [itemStart - __internal__pageWidth, itemStart, itemStart + __internal__pageWidth],
      [SMALL_ITEM_WIDTH, focalWidth, SMALL_ITEM_WIDTH],
      Extrapolation.CLAMP,
    );

    if (!isCenteredHero) {
      return { width };
    }

    // Center-aligned hero: items to the LEFT of focal right-align in their wrapper.
    // Item 0 when focal uses negative margin to pull left (hero-like start).
    const focalMargin = __internal__index === 0 ? -(SMALL_ITEM_WIDTH + ITEM_GAP) : 0;
    const leftMargin = __internal__pageWidth - SMALL_ITEM_WIDTH - ITEM_GAP;

    const marginLeft = interpolate(
      __internal__scrollX.value,
      [itemStart - __internal__pageWidth, itemStart, itemStart + __internal__pageWidth],
      [0, focalMargin, leftMargin],
      Extrapolation.CLAMP,
    );

    return { width, marginLeft };
  }, [
    isHeroLike,
    isCenteredHero,
    isMultiBrowse,
    __internal__index,
    __internal__pageWidth,
    __internal__largeItemWidth,
    __internal__mediumItemWidth,
  ]);

  const isFullScreen = __internal__layout === 'full-screen';
  const isMultiAspect = __internal__layout === 'uncontained-multi-aspect';

  const computedItemWidth =
    isMultiAspect && aspectRatio ? __internal__itemHeight * aspectRatio : __internal__uncontainedItemWidth;

  const staticWidth = isHeroLike
    ? isCenteredHero && __internal__index === 0
      ? __internal__largeItemWidth + SMALL_ITEM_WIDTH + ITEM_GAP
      : __internal__largeItemWidth
    : isMultiBrowse
      ? __internal__largeItemWidth
      : isFullScreen
        ? __internal__largeItemWidth
        : isMultiAspect
          ? computedItemWidth
          : __internal__uncontainedItemWidth;
  const itemStaticStyle = {
    width: staticWidth,
    height: __internal__itemHeight,
    ...(isFullScreen && { borderRadius: 0 }),
  };

  const needsWrapper = isHeroLike || isMultiBrowse;
  const wrapperStyle = needsWrapper
    ? {
        width: __internal__pageWidth,
        height: __internal__itemHeight,
        ...(isMultiBrowse && { overflow: 'visible' as const }),
      }
    : undefined;

  const label = accessibilityLabel ?? `Item ${__internal__index + 1} of ${__internal__totalItems}`;

  // Pass internal props down to CarouselItemImage and CarouselItemLabel children
  const enrichedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    if (isCarouselItemImage(child)) {
      return React.cloneElement(child, {
        __internal__index,
        __internal__scrollX,
        __internal__layout: __internal__layout,
        __internal__pageWidth: __internal__pageWidth,
        __internal__uncontainedItemWidth: __internal__uncontainedItemWidth,
        ...(isMultiAspect && { __internal__computedItemWidth: computedItemWidth }),
      });
    }
    if (isCarouselItemLabel(child)) {
      return React.cloneElement(child, {
        __internal__index,
        __internal__scrollX,
        __internal__layout: __internal__layout,
        __internal__pageWidth: __internal__pageWidth,
        __internal__largeItemWidth: __internal__largeItemWidth,
        __internal__mediumItemWidth: __internal__mediumItemWidth,
      });
    }

    warnUnexpectedChild('CarouselItem', child, CAROUSEL_ITEM_CHILDREN);
    return child;
  });

  const inner = (
    <Animated.View style={[styles.item, itemStaticStyle, animatedItemStyle, itemStyle]}>
      {enrichedChildren}
      <StateLayer progress={progress} color="onSurface" />
    </Animated.View>
  );

  if (needsWrapper) {
    return (
      <RNPressable
        style={wrapperStyle}
        accessibilityRole="button"
        accessibilityLabel={label}
        onPress={onPress}
        {...handlers}
      >
        {inner}
      </RNPressable>
    );
  }

  return (
    <RNPressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress} {...handlers}>
      {inner}
    </RNPressable>
  );
}

// =============================================================================
// Carousel
// =============================================================================

function Carousel({ layout = 'hero', itemHeight = 200, uncontainedItemWidth = 200, style, children }: CarouselProps) {
  const scrollX = useSharedValue(0);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [containerHeight, setContainerHeight] = React.useState(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const handleLayout = React.useCallback((event: { nativeEvent: { layout: { width: number; height: number } } }) => {
    setContainerWidth(event.nativeEvent.layout.width);
    setContainerHeight(event.nativeEvent.layout.height);
  }, []);

  const isHero = layout === 'hero';
  const isCenteredHero = layout === 'center-aligned-hero';
  const isHeroLike = isHero || isCenteredHero;
  const isFullScreen = layout === 'full-screen';
  const isMultiBrowse = layout === 'multi-browse';

  // Layout math per variant:
  // Hero: large = container - padding*2 - gap - small
  // Center-aligned hero: large = container - padding*2 - 2*gap - 2*small
  // Full-screen: large = container width
  // Multi-browse: 3 equal-width wrappers fill the visible area;
  //   large ≈ 52% of visible, medium = visible - large - small - 2*gap, small = 56dp
  const multiBrowsePageWidth = Math.floor((containerWidth - HORIZONTAL_PADDING * 2) / 3);
  const multiBrowseVisible = multiBrowsePageWidth * 3;
  const multiBrowseLarge = Math.floor(multiBrowseVisible * 0.52);
  const multiBrowseMedium = multiBrowseVisible - multiBrowseLarge - SMALL_ITEM_WIDTH - ITEM_GAP * 2;

  const largeItemWidth =
    containerWidth > 0
      ? isFullScreen
        ? containerWidth
        : isMultiBrowse
          ? multiBrowseLarge
          : isCenteredHero
            ? containerWidth - HORIZONTAL_PADDING * 2 - ITEM_GAP * 2 - SMALL_ITEM_WIDTH * 2
            : containerWidth - HORIZONTAL_PADDING * 2 - ITEM_GAP - SMALL_ITEM_WIDTH
      : 0;
  const mediumItemWidth = isMultiBrowse ? multiBrowseMedium : 0;
  const pageWidth = isFullScreen
    ? containerWidth + FULL_SCREEN_GAP
    : isMultiBrowse
      ? multiBrowsePageWidth
      : largeItemWidth + ITEM_GAP;

  if (containerWidth === 0 || (isFullScreen && containerHeight === 0)) {
    return (
      <View style={[styles.container, isFullScreen && styles.fullScreenContainer, style]} onLayout={handleLayout} />
    );
  }

  const totalItems = React.Children.count(children);

  const enrichedChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;

    if (isCarouselItem(child)) {
      return React.cloneElement(child, {
        __internal__index: index,
        __internal__totalItems: totalItems,
        __internal__scrollX: scrollX,
        __internal__layout: layout,
        __internal__itemHeight: isFullScreen ? containerHeight : itemHeight,
        __internal__largeItemWidth: largeItemWidth,
        __internal__pageWidth: pageWidth,
        __internal__uncontainedItemWidth: uncontainedItemWidth,
        __internal__mediumItemWidth: mediumItemWidth,
      });
    }

    warnUnexpectedChild('Carousel', child, CAROUSEL_CHILDREN);
    return child;
  });

  const snaps = isHeroLike || isFullScreen || isMultiBrowse;

  return (
    <View style={[styles.container, isFullScreen && styles.fullScreenContainer, style]} onLayout={handleLayout}>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        snapToInterval={snaps ? pageWidth : undefined}
        disableIntervalMomentum={snaps}
        decelerationRate={snaps ? 'fast' : 'normal'}
        contentContainerStyle={[
          styles.scrollContent,
          isFullScreen
            ? { gap: FULL_SCREEN_GAP }
            : isMultiBrowse
              ? {
                  paddingLeft: HORIZONTAL_PADDING,
                  paddingRight: containerWidth - pageWidth - HORIZONTAL_PADDING,
                }
              : isHero
                ? { paddingLeft: HORIZONTAL_PADDING, paddingRight: containerWidth - pageWidth - HORIZONTAL_PADDING }
                : isCenteredHero
                  ? {
                      paddingLeft: HORIZONTAL_PADDING + SMALL_ITEM_WIDTH + ITEM_GAP,
                      paddingRight: HORIZONTAL_PADDING + SMALL_ITEM_WIDTH + ITEM_GAP,
                    }
                  : styles.scrollContentUncontained,
          !isHeroLike && !isFullScreen && !isMultiBrowse && { gap: ITEM_GAP },
        ]}
        accessibilityLabel={`Carousel with ${totalItems} items`}
      >
        {enrichedChildren}
      </Animated.ScrollView>
    </View>
  );
}

// =============================================================================
// Styles
// =============================================================================

const styles = StyleSheet.create((theme) => ({
  container: {
    paddingVertical: VERTICAL_PADDING,
  },
  fullScreenContainer: {
    flex: 1,
    paddingVertical: 0,
  },
  scrollContent: {
    alignItems: 'center' as const,
  },
  scrollContentUncontained: {
    paddingLeft: HORIZONTAL_PADDING,
  },
  item: {
    borderRadius: ITEM_BORDER_RADIUS,
    overflow: 'hidden',
    backgroundColor: theme.scheme.surfaceContainerLow,
  },
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    left: -PARALLAX_OVERFLOW,
    right: -PARALLAX_OVERFLOW,
  },
  image: {
    flex: 1,
  },
  labelOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  label: {
    color: 'white',
    // Hardcoded because theme.scheme.shadow is opaque black — needs partial opacity to soften
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
    textAlign: 'center',
  },
}));

// =============================================================================
// Exports
// =============================================================================

Carousel.displayName = 'Carousel';
CarouselItem.displayName = 'CarouselItem';
CarouselItemImage.displayName = 'CarouselItemImage';
CarouselItemLabel.displayName = 'CarouselItemLabel';

export type { CarouselItemImageProps, CarouselItemLabelProps, CarouselItemProps, CarouselLayout, CarouselProps };
export { Carousel, CarouselItem, CarouselItemImage, CarouselItemLabel };
