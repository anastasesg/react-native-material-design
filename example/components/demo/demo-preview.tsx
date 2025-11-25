import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type DemoPreviewProps = {
  children: React.ReactNode;
};

export function DemoPreview({ children }: DemoPreviewProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.scheme.surfaceContainerLowest,
    minHeight: 250,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
}));
