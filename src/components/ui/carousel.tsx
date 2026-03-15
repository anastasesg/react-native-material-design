/// Material Design Carousel
/// Overview: https://m3.material.io/components/carousel/overview
/// Specs: https://m3.material.io/components/carousel/specs
/// Guidelines: https://m3.material.io/components/carousel/guidelines
/// Accessibility: https://m3.material.io/components/carousel/accessibility

import React from 'react';
import { type ImageSourcePropType, type StyleProp, type ViewStyle } from 'react-native';
import { ImageBackground, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  type SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

import { createComponentContext } from '../../utilities';
import { Pressable, StateLayer } from '../custom';
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
};

type CarouselItemImageProps = {
  source: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
};

type CarouselItemLabelProps = {
  children: string;
  style?: StyleProp<ViewStyle>;
};

// =============================================================================
// Context
// =============================================================================

type CarouselContextValue = {
  scrollX: SharedValue<number>;
  layout: CarouselLayout;
  itemHeight: number;
  largeItemWidth: number;
  pageWidth: number;
  uncontainedItemWidth: number;
  mediumItemWidth: number;
  totalItems: number;
};

type CarouselItemContextValue = {
  index: number;
  scrollX: SharedValue<number>;
  layout: CarouselLayout;
  pageWidth: number;
  uncontainedItemWidth: number;
  largeItemWidth: number;
  mediumItemWidth: number;
  computedItemWidth: number;
};

const [CarouselProvider, useCarouselCtx] = createComponentContext<CarouselContextValue>('Carousel');
const [CarouselItemProvider, useCarouselItemCtx] = createComponentContext<CarouselItemContextValue>('CarouselItem');
const [CarouselItemIndexProvider, useCarouselItemIndex] = createComponentContext<number>('CarouselItemIndex');

// =============================================================================
// CarouselItemImage
// =============================================================================

function CarouselItemImage({ source, style }: CarouselItemImageProps) {
  const { index, scrollX, layout, pageWidth, uncontainedItemWidth, computedItemWidth } = useCarouselItemCtx();

  const animatedImageStyle = useAnimatedStyle(() => {
    if (layout === 'full-screen') return {};

    const isHeroLike = layout === 'hero' || layout === 'center-aligned-hero';
    const isMultiBrowse = layout === 'multi-browse';
    const isMultiAspect = layout === 'uncontained-multi-aspect';
    const uncontainedWidth = isMultiAspect && computedItemWidth ? computedItemWidth : uncontainedItemWidth;
    const stepWidth = isHeroLike || isMultiBrowse ? pageWidth : uncontainedWidth + ITEM_GAP;

    if (stepWidth <= 0) return {};

    const itemStart = index * stepWidth;

    const translateX = interpolate(
      scrollX.value,
      [itemStart - stepWidth, itemStart, itemStart + stepWidth],
      [PARALLAX_OVERFLOW, 0, -PARALLAX_OVERFLOW],
      Extrapolation.CLAMP,
    );

    return { transform: [{ translateX }] };
  }, [index, layout, pageWidth, uncontainedItemWidth, computedItemWidth]);

  return (
    <Animated.View style={[styles.imageContainer, animatedImageStyle]}>
      <ImageBackground source={source} style={[styles.image, style]} resizeMode="cover" />
    </Animated.View>
  );
}

// =============================================================================
// CarouselItemLabel
// =============================================================================

function CarouselItemLabel({ children, style }: CarouselItemLabelProps) {
  const { index, scrollX, layout, pageWidth, largeItemWidth, mediumItemWidth } = useCarouselItemCtx();

  const animatedLabelStyle = useAnimatedStyle(() => {
    const isHeroLike = layout === 'hero' || layout === 'center-aligned-hero';
    const isMultiBrowse = layout === 'multi-browse';

    if ((!isHeroLike && !isMultiBrowse) || largeItemWidth <= 0) {
      return { opacity: 1 };
    }

    const itemStart = index * pageWidth;

    // Multi-browse: 4-point asymmetric [small, medium, large, small]
    // Hero/center-aligned: 3-point symmetric [small, large, small]
    const width = isMultiBrowse
      ? interpolate(
          scrollX.value,
          [itemStart - 2 * pageWidth, itemStart - pageWidth, itemStart, itemStart + pageWidth],
          [SMALL_ITEM_WIDTH, mediumItemWidth, largeItemWidth, SMALL_ITEM_WIDTH],
          Extrapolation.CLAMP,
        )
      : interpolate(
          scrollX.value,
          [itemStart - pageWidth, itemStart, itemStart + pageWidth],
          [SMALL_ITEM_WIDTH, largeItemWidth, SMALL_ITEM_WIDTH],
          Extrapolation.CLAMP,
        );

    const opacity = interpolate(width, [LABEL_HIDE_THRESHOLD, LABEL_HIDE_THRESHOLD + 40], [0, 1], Extrapolation.CLAMP);

    return { opacity };
  }, [index, layout, pageWidth, largeItemWidth, mediumItemWidth]);

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

function CarouselItem({ onPress, accessibilityLabel, aspectRatio, style: itemStyle, children }: CarouselItemProps) {
  const itemIndex = useCarouselItemIndex();
  const { scrollX, layout, itemHeight, largeItemWidth, pageWidth, uncontainedItemWidth, mediumItemWidth, totalItems } =
    useCarouselCtx();

  const isHeroLike = layout === 'hero' || layout === 'center-aligned-hero';
  const isCenteredHero = layout === 'center-aligned-hero';
  const isMultiBrowse = layout === 'multi-browse';

  const animatedItemStyle = useAnimatedStyle(() => {
    // Multi-browse: 4-point asymmetric interpolation for width + marginLeft
    if (isMultiBrowse && largeItemWidth > 0) {
      const pw = pageWidth;
      const itemStart = itemIndex * pw;

      const width = interpolate(
        scrollX.value,
        [itemStart - 2 * pw, itemStart - pw, itemStart, itemStart + pw],
        [SMALL_ITEM_WIDTH, mediumItemWidth, largeItemWidth, SMALL_ITEM_WIDTH],
        Extrapolation.CLAMP,
      );

      // marginLeft positions items within their uniform wrapper to maintain 8dp visual gaps
      const mlMedium = largeItemWidth + ITEM_GAP - pw;
      const mlSmall = largeItemWidth + mediumItemWidth + ITEM_GAP * 2 - pw * 2;

      const marginLeft = interpolate(
        scrollX.value,
        [itemStart - 2 * pw, itemStart - pw, itemStart, itemStart + pw],
        [mlSmall, mlMedium, 0, 0],
        Extrapolation.CLAMP,
      );

      const isFocal = width > mediumItemWidth + 1;

      return { width, marginLeft, zIndex: isFocal ? 1 : 0 };
    }

    if (!isHeroLike || largeItemWidth <= 0) {
      return {};
    }

    const itemStart = itemIndex * pageWidth;

    // Item 0 in center-aligned-hero gets wider focal width (hero-like, fills left space)
    const focalWidth =
      isCenteredHero && itemIndex === 0 ? largeItemWidth + SMALL_ITEM_WIDTH + ITEM_GAP : largeItemWidth;

    const width = interpolate(
      scrollX.value,
      [itemStart - pageWidth, itemStart, itemStart + pageWidth],
      [SMALL_ITEM_WIDTH, focalWidth, SMALL_ITEM_WIDTH],
      Extrapolation.CLAMP,
    );

    if (!isCenteredHero) {
      return { width };
    }

    // Center-aligned hero: items to the LEFT of focal right-align in their wrapper.
    // Item 0 when focal uses negative margin to pull left (hero-like start).
    const focalMargin = itemIndex === 0 ? -(SMALL_ITEM_WIDTH + ITEM_GAP) : 0;
    const leftMargin = pageWidth - SMALL_ITEM_WIDTH - ITEM_GAP;

    const marginLeft = interpolate(
      scrollX.value,
      [itemStart - pageWidth, itemStart, itemStart + pageWidth],
      [0, focalMargin, leftMargin],
      Extrapolation.CLAMP,
    );

    return { width, marginLeft };
  }, [isHeroLike, isCenteredHero, isMultiBrowse, itemIndex, pageWidth, largeItemWidth, mediumItemWidth]);

  const isFullScreen = layout === 'full-screen';
  const isMultiAspect = layout === 'uncontained-multi-aspect';

  const computedItemWidth = isMultiAspect && aspectRatio ? itemHeight * aspectRatio : uncontainedItemWidth;

  const staticWidth = isHeroLike
    ? isCenteredHero && itemIndex === 0
      ? largeItemWidth + SMALL_ITEM_WIDTH + ITEM_GAP
      : largeItemWidth
    : isMultiBrowse
      ? largeItemWidth
      : isFullScreen
        ? largeItemWidth
        : isMultiAspect
          ? computedItemWidth
          : uncontainedItemWidth;
  const itemStaticStyle = {
    width: staticWidth,
    height: itemHeight,
    ...(isFullScreen && { borderRadius: 0 }),
  };

  const needsWrapper = isHeroLike || isMultiBrowse;
  const wrapperStyle = needsWrapper
    ? {
        width: pageWidth,
        height: itemHeight,
        ...(isMultiBrowse && { overflow: 'visible' as const }),
      }
    : undefined;

  const label = accessibilityLabel ?? `Item ${itemIndex + 1} of ${totalItems}`;

  const itemCtx = React.useMemo<CarouselItemContextValue>(
    () => ({
      index: itemIndex,
      scrollX,
      layout,
      pageWidth,
      uncontainedItemWidth,
      largeItemWidth,
      mediumItemWidth,
      computedItemWidth,
    }),
    [itemIndex, scrollX, layout, pageWidth, uncontainedItemWidth, largeItemWidth, mediumItemWidth, computedItemWidth],
  );

  const inner = (
    <Animated.View style={[styles.item, itemStaticStyle, animatedItemStyle, itemStyle]}>
      <CarouselItemProvider value={itemCtx}>{children}</CarouselItemProvider>
      <StateLayer color="onSurface" />
    </Animated.View>
  );

  if (needsWrapper) {
    return (
      <Pressable style={wrapperStyle} accessibilityRole="button" accessibilityLabel={label} onPress={onPress}>
        {inner}
      </Pressable>
    );
  }

  return (
    <Pressable accessibilityRole="button" accessibilityLabel={label} onPress={onPress}>
      {inner}
    </Pressable>
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

  const totalItems = React.Children.count(children);

  const ctx = React.useMemo<CarouselContextValue>(
    () => ({
      scrollX,
      layout,
      itemHeight: isFullScreen ? containerHeight : itemHeight,
      largeItemWidth,
      pageWidth,
      uncontainedItemWidth,
      mediumItemWidth,
      totalItems,
    }),
    [
      scrollX,
      layout,
      isFullScreen,
      containerHeight,
      itemHeight,
      largeItemWidth,
      pageWidth,
      uncontainedItemWidth,
      mediumItemWidth,
      totalItems,
    ],
  );

  if (containerWidth === 0 || (isFullScreen && containerHeight === 0)) {
    return (
      <View style={[styles.container, isFullScreen && styles.fullScreenContainer, style]} onLayout={handleLayout} />
    );
  }

  const enrichedChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;
    return <CarouselItemIndexProvider value={index}>{child}</CarouselItemIndexProvider>;
  });

  const snaps = isHeroLike || isFullScreen || isMultiBrowse;

  return (
    <View style={[styles.container, isFullScreen && styles.fullScreenContainer, style]} onLayout={handleLayout}>
      <CarouselProvider value={ctx}>
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
      </CarouselProvider>
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
