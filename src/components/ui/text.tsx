/// Material Design Text
/// Overview: https://m3.material.io/styles/typography/overview
/// Specs: https://m3.material.io/styles/typography/type-scale-tokens
/// Guidelines: https://m3.material.io/styles/typography/applying-type

import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type TextVariant = 'label' | 'body' | 'title' | 'headline' | 'display';
type TextSize = 'small' | 'medium' | 'large';

type TextProps = RNTextProps & {
  variant?: TextVariant;
  size?: TextSize;
};

function Text({ style, variant = 'body', size = 'medium', ...props }: TextProps) {
  styles.useVariants({ variant, size });
  return <RNText style={[styles.label, style]} {...props} />;
}

const styles = StyleSheet.create((theme) => ({
  label: {
    color: theme.scheme.onSurface,

    variants: {
      variant: {
        label: {},
        body: {},
        title: {},
        headline: {},
        display: {},
      },
      size: {
        small: {},
        medium: {},
        large: {},
      },
    },
    compoundVariants: [
      {
        variant: 'label',
        size: 'small',
        styles: theme.typography.label.small,
      },
      {
        variant: 'label',
        size: 'medium',
        styles: theme.typography.label.medium,
      },
      {
        variant: 'label',
        size: 'large',
        styles: theme.typography.label.large,
      },
      {
        variant: 'body',
        size: 'small',
        styles: theme.typography.body.small,
      },
      {
        variant: 'body',
        size: 'medium',
        styles: theme.typography.body.medium,
      },
      {
        variant: 'body',
        size: 'large',
        styles: theme.typography.body.large,
      },
      {
        variant: 'title',
        size: 'small',
        styles: theme.typography.title.small,
      },
      {
        variant: 'title',
        size: 'medium',
        styles: theme.typography.title.medium,
      },
      {
        variant: 'title',
        size: 'large',
        styles: theme.typography.title.large,
      },
      {
        variant: 'headline',
        size: 'small',
        styles: theme.typography.headline.small,
      },
      {
        variant: 'headline',
        size: 'medium',
        styles: theme.typography.headline.medium,
      },
      {
        variant: 'headline',
        size: 'large',
        styles: theme.typography.headline.large,
      },
      {
        variant: 'display',
        size: 'small',
        styles: theme.typography.display.small,
      },
      {
        variant: 'display',
        size: 'medium',
        styles: theme.typography.display.medium,
      },
      {
        variant: 'display',
        size: 'large',
        styles: theme.typography.display.large,
      },
    ],
  },
}));

export type { TextProps, TextSize, TextVariant };
export { Text };
