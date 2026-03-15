import React from 'react';
import { Modal, View } from 'react-native';
import { Button, ButtonLabel } from 'react-native-material-design/ui/button';
import { Carousel, CarouselItem, CarouselItemImage, CarouselItemLabel } from 'react-native-material-design/ui/carousel';
import { IconButton, IconButtonIcon } from 'react-native-material-design/ui/icon-button';
import { StyleSheet } from 'react-native-unistyles';

import { DemoPage } from '../../components/demo/demo-page';
import type { ConfigSchema } from '../../components/demo/types';
import { useConfig } from '../../components/demo/use-config';

const SAMPLE_ITEMS = [
  { uri: 'https://picsum.photos/seed/carousel1/800/600', label: 'Mountain Sunrise' },
  { uri: 'https://picsum.photos/seed/carousel2/800/600', label: 'Ocean Waves' },
  { uri: 'https://picsum.photos/seed/carousel3/800/600', label: 'Forest Path' },
  { uri: 'https://picsum.photos/seed/carousel4/800/600', label: 'Desert Dunes' },
  { uri: 'https://picsum.photos/seed/carousel5/800/600', label: 'City Skyline' },
  { uri: 'https://picsum.photos/seed/carousel6/800/600', label: 'Autumn Leaves' },
  { uri: 'https://picsum.photos/seed/carousel7/800/600', label: 'Snowy Peaks' },
  { uri: 'https://picsum.photos/seed/carousel8/800/600', label: 'Tropical Beach' },
];

const schema = {
  layout: {
    type: 'select',
    label: 'Layout',
    options: ['hero', 'center-aligned-hero', 'uncontained', 'multi-browse', 'uncontained-multi-aspect', 'full-screen'],
    default: 'hero',
  },
  itemCount: {
    type: 'number',
    label: 'Item count',
    min: 3,
    max: 8,
    default: 5,
  },
  itemHeight: {
    type: 'number',
    label: 'Item height',
    min: 120,
    max: 400,
    step: 20,
    default: 200,
  },
  labels: { type: 'switch', label: 'Show labels', default: true },
} as const satisfies ConfigSchema;

export default function CarouselScreen() {
  const config = useConfig(schema);
  const v = config.values;
  const [fullScreenVisible, setFullScreenVisible] = React.useState(false);

  const items = SAMPLE_ITEMS.slice(0, v.itemCount);
  const isFullScreen = v.layout === 'full-screen';

  const carouselContent = (
    <Carousel key={`${v.layout}-${v.itemCount}-${v.itemHeight}`} layout={v.layout} itemHeight={v.itemHeight}>
      {items.map((item) => (
        <CarouselItem key={item.uri}>
          <CarouselItemImage source={{ uri: item.uri }} />
          {v.labels && <CarouselItemLabel>{item.label}</CarouselItemLabel>}
        </CarouselItem>
      ))}
    </Carousel>
  );

  return (
    <>
      <DemoPage
        title="Carousel"
        description="Show a collection of items that can be scrolled on and off screen"
        schema={schema}
        config={config}
        preview={() =>
          isFullScreen ? (
            <Button variant="tonal" onPress={() => setFullScreenVisible(true)}>
              <ButtonLabel>Open Full Screen Carousel</ButtonLabel>
            </Button>
          ) : (
            <View style={{ alignSelf: 'stretch' }}>{carouselContent}</View>
          )
        }
      />

      {isFullScreen && (
        <Modal visible={fullScreenVisible} animationType="slide" statusBarTranslucent>
          <View style={styles.fullScreenOverlay}>
            {carouselContent}
            <IconButton
              onPress={() => setFullScreenVisible(false)}
              style={styles.closeButton}
              accessibilityLabel="Close"
            >
              <IconButtonIcon name="close" />
            </IconButton>
          </View>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create((_theme, rt) => ({
  fullScreenOverlay: {
    flex: 1,
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: rt.insets.top + 8,
    right: 16,
  },
}));
