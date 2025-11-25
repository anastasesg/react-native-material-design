import { useEvent } from 'expo';
import { Href, useRouter } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Image, ScrollView, View } from 'react-native';
import { Card } from 'react-native-material-design/ui/card';
import { IconButton } from 'react-native-material-design/ui/icon-button';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

const HERO_VIDEO_URL =
  'https://kstatic.googleusercontent.com/files/957183d66ec5fd675f9aad6974f12fcf231bb370922c3719b74ee95d5b9def6efe2f8ebdff687440c688fd14ffc3da460013010ad90dffd34e05b525acbb65f8';

// ---------------------------------------------------------------------------
// Firebase Storage base for M3 component preview images
// ---------------------------------------------------------------------------

const M3_IMG = (id: string) =>
  `https://firebasestorage.googleapis.com/v0/b/design-spec/o/${encodeURIComponent(id)}?alt=media`;

// ---------------------------------------------------------------------------
// Component data — organized by category to match the M3 components page
// route: string  = implemented, navigable
// route: undefined = not yet implemented, shown greyed out
// ---------------------------------------------------------------------------

type ComponentItem = {
  label: string;
  description: string;
  image: string;
  route?: Href;
};

type Section = {
  title: string;
  items: ComponentItem[];
};

const SECTIONS: Section[] = [
  {
    title: 'Buttons',
    items: [
      {
        label: 'Button groups',
        description: 'Organize buttons and add interactions between them',
        route: '/components/button-groups',
        image: M3_IMG('projects/m3/images/ma6q2gsx-button group.png'),
      },
      {
        label: 'Buttons',
        description: 'Prompt most actions in a UI',
        route: '/components/buttons',
        image: M3_IMG('projects/m3/images/ma6q4px1-2x1-light.png'),
      },
      {
        label: 'Extended FABs',
        description: 'Help people take primary actions',
        route: '/components/extended-fabs',
        image: M3_IMG('projects/m3/images/ma6q6y1e-2x1-light.png'),
      },
      {
        label: 'FAB menu',
        description: 'Opens from a FAB to display related actions',
        route: '/components/fab-menu',
        image: M3_IMG('projects/m3/images/ma6q93rk-fab menu.png'),
      },
      {
        label: 'FABs',
        description: 'Floating action buttons for primary actions',
        route: '/components/fabs',
        image: M3_IMG('projects/m3/images/ma6qai8w-2x1-light.png'),
      },
      {
        label: 'Icon buttons',
        description: 'Take actions with a single tap',
        route: '/components/icon-buttons',
        image: M3_IMG('projects/m3/images/ma6qcchq-2x1-light.png'),
      },
      {
        label: 'Split button',
        description: 'Open a menu for more options related to an action',
        route: '/components/split-buttons',
        image: M3_IMG('projects/m3/images/ma6qg2mt-split-button.png'),
      },
    ],
  },
  {
    title: 'Date & time pickers',
    items: [
      {
        label: 'Date pickers',
        description: 'Let people select a date or range of dates',
        route: '/components/date-picker',
        image: M3_IMG('projects/m3/images/ma6qpzm4-2x1-light.png'),
      },
      {
        label: 'Time pickers',
        description: 'Help people select and set a specific time',
        route: '/components/time-picker',
        image: M3_IMG('projects/m3/images/ma6qqz37-2x1-light.png'),
      },
    ],
  },
  {
    title: 'Loading & progress',
    items: [
      {
        label: 'Loading indicator',
        description: 'Show progress for a short wait time',
        route: '/components/loading-indicator',
        image: M3_IMG('projects/google-material-3/images/m03xcmsr-1.png'),
      },
      {
        label: 'Progress indicators',
        description: 'Show the status of a process in real time',
        route: '/components/progress-indicators',
        image: M3_IMG('projects/google-material-3/images/m0gzxt6f-01.png'),
      },
    ],
  },
  {
    title: 'Navigation',
    items: [
      {
        label: 'Navigation bar',
        description: 'Switch between views on smaller devices',
        route: '/components/navigation-bar',
        image: M3_IMG('projects/m3/images/ma6r76gv-2x1-light.png'),
      },
      {
        label: 'Navigation drawer',
        description: 'Switch between views on larger devices',
        route: '/components/navigation-drawer',
        image: M3_IMG('projects/m3/images/ma6r82hx-2x1-light.png'),
      },
      {
        label: 'Navigation rail',
        description: 'Switch between views on mid-sized devices',
        route: '/components/navigation-rail',
        image: M3_IMG('projects/m3/images/ma6r8yf7-2x1-light.png'),
      },
    ],
  },
  {
    title: 'Sheets',
    items: [
      {
        label: 'Bottom sheets',
        description: 'Secondary content anchored to the bottom',
        route: '/components/bottom-sheets',
        image: M3_IMG('projects/m3/images/ma6rejmj-2x1-light.png'),
      },
      {
        label: 'Side sheets',
        description: 'Secondary content anchored to the side',
        route: '/components/side-sheets',
        image: M3_IMG('projects/m3/images/ma6rfl8x-2x1-light.png'),
      },
    ],
  },
  {
    title: 'All other components',
    items: [
      {
        label: 'App bars',
        description: 'Help people navigate through a product',
        route: '/components/app-bars',
        image: M3_IMG('projects/m3/images/ma6pqht6-2x1-light.png'),
      },
      {
        label: 'Badges',
        description: 'Show notifications, counts, or status info',
        route: '/components/badges',
        image: M3_IMG('projects/m3/images/ma6pvsvh-2x1-light.png'),
      },
      {
        label: 'Cards',
        description: 'Display content and actions about a single subject',
        route: '/components/cards',
        image: M3_IMG('projects/m3/images/ma6qihzw-2x1-light.png'),
      },
      {
        label: 'Carousel',
        description: 'A collection of items scrolled on and off screen',
        route: '/components/carousel',
        image: M3_IMG('projects/m3/images/ma6qkltu-2x1-light.png'),
      },
      {
        label: 'Checkbox',
        description: 'Select one or more items from a list',
        route: '/components/checkbox',
        image: M3_IMG('projects/m3/images/ma6qm28q-2x1-light.png'),
      },
      {
        label: 'Chips',
        description: 'Enter info, make selections, filter, or trigger actions',
        route: '/components/chips',
        image: M3_IMG('projects/m3/images/m0pfid3e-2x1-light.png'),
      },
      {
        label: 'Dialogs',
        description: 'Provide important prompts in a user flow',
        route: '/components/dialog',
        image: M3_IMG('projects/m3/images/ma6qt67v-2x1-light.png'),
      },
      {
        label: 'Divider',
        description: 'Thin lines that group content in lists or containers',
        route: '/components/divider',
        image: M3_IMG('projects/m3/images/ma6qux6c-2x1-light.png'),
      },
      {
        label: 'Lists',
        description: 'Continuous, vertical indexes of text and images',
        route: '/components/lists',
        image: M3_IMG('projects/m3/images/miz66cct-2x1-light.png'),
      },
      {
        label: 'Menus',
        description: 'Display a list of choices on a temporary surface',
        route: '/components/menus',
        image: M3_IMG('projects/m3/images/mi48ekpi-3x2-light.png'),
      },
      {
        label: 'Radio button',
        description: 'Select one option from a set of options',
        route: '/components/radio-button',
        image: M3_IMG('projects/m3/images/ma6ra76p-2x1-light.png'),
      },
      {
        label: 'Search',
        description: 'Enter a keyword or phrase to get relevant information',
        route: '/components/search',
        image: M3_IMG('projects/m3/images/ma6rcvjg-2x1-light.png'),
      },
      {
        label: 'Sliders',
        description: 'Make selections from a range of values',
        route: '/components/slider',
        image: M3_IMG('projects/m3/images/ma6rh83z-2x1-light.png'),
      },
      {
        label: 'Snackbar',
        description: 'Show short updates about app processes',
        route: '/components/snackbar',
        image: M3_IMG('projects/m3/images/ma6rjaji-2x1-light.png'),
      },
      {
        label: 'Switch',
        description: 'Toggle the selection of an item on and off',
        route: '/components/switch',
        image: M3_IMG('projects/m3/images/ma6rkt0w-2x1-light.png'),
      },
      {
        label: 'Tabs',
        description: 'Organize content across different screens and views',
        route: '/components/tabs',
        image: M3_IMG('projects/m3/images/ma6rmcwq-2x1-light.png'),
      },
      {
        label: 'Text fields',
        description: 'Let users enter text into a UI',
        route: '/components/text-field',
        image: M3_IMG('projects/m3/images/ma6rngen-2x1-light.png'),
      },
      {
        label: 'Toolbars',
        description: 'Display frequently used actions for the current page',
        route: '/components/toolbars',
        image: M3_IMG('projects/m3/images/maflx6jb-toolbar.png'),
      },
      {
        label: 'Tooltips',
        description: 'Display brief labels or messages',
        route: '/components/tooltip',
        image: M3_IMG('projects/m3/images/ma6rp36f-2x1-light.png'),
      },
    ],
  },
];

// ---------------------------------------------------------------------------

function ComponentCard({ item }: { item: ComponentItem }) {
  const router = useRouter();
  const implemented = !!item.route;

  return (
    <Card
      style={styles.componentCard}
      variant="elevated"
      disabled={!implemented}
      onPress={item.route ? () => router.push(item.route!) : undefined}
    >
      <Image source={{ uri: item.image }} style={styles.cardPreview} resizeMode="cover" />
      <View style={styles.cardBody}>
        <Text variant="headline" size="small" style={!implemented ? styles.labelDisabled : undefined} numberOfLines={1}>
          {item.label}
        </Text>
        <Text variant="body" size="medium" style={styles.cardDescription} numberOfLines={2}>
          {item.description}
        </Text>
      </View>
    </Card>
  );
}

// ---------------------------------------------------------------------------

export default function Page() {
  const player = useVideoPlayer(HERO_VIDEO_URL, (p) => {
    p.loop = true;
    p.muted = true;
  });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Card variant="filled" style={styles.heroTextCard}>
          <View style={styles.heroTextInner}>
            <Text variant="display" size="small">
              Components
            </Text>
            <Text variant="body" size="large" style={styles.heroBody}>
              Components are interactive building blocks for creating a user interface. They can be organized into
              categories based on their purpose: Action, containment, communication, navigation, selection, and text
              input.
            </Text>
          </View>
        </Card>
        <Card variant="filled" style={styles.heroVideoCard}>
          <VideoView
            player={player}
            style={styles.heroVideo}
            contentFit="fill"
            nativeControls={false}
            allowsPictureInPicture={false}
          />
          <IconButton
            name={isPlaying ? 'pause' : 'play_arrow'}
            variant="tonal"
            style={styles.heroPlayButton}
            onPress={() => (isPlaying ? player.pause() : player.play())}
          />
        </Card>
      </View>

      <View style={styles.sections}>
        {SECTIONS.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text variant="display" size="small" style={styles.sectionTitle}>
              {section.title}
            </Text>
            <View style={styles.sectionContent}>
              {section.items.map((item) => (
                <ComponentCard key={item.label} item={item} />
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// ---------------------------------------------------------------------------

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    backgroundColor: theme.scheme.background,
  },
  content: {
    paddingBottom: rt.insets.bottom + 32,
  },

  // Hero — two stacked cards: text + video
  hero: {
    paddingHorizontal: 8,
    paddingTop: {
      compact: 24,
      medium: undefined,
    },
    gap: 12,
    marginBottom: 40,
    flexDirection: {
      medium: 'row',
    },
  },
  heroTextCard: {
    width: {
      medium: '48%',
    },
    flexGrow: 1,
    justifyContent: {
      medium: 'center',
    },
  },
  heroTextInner: {
    padding: 24,
    gap: 8,
  },
  heroBody: {
    color: theme.scheme.onSurfaceVariant,
  },
  heroVideoCard: {
    width: {
      medium: '48%',
    },
    flexGrow: 1,
    overflow: 'hidden',
  },
  heroVideo: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  heroPlayButton: {
    position: 'absolute',
    bottom: 4,
    right: 4,
  },

  // Sections
  sections: {
    flex: 1,
    gap: 32,
    paddingHorizontal: {
      compact: 8,
      medium: 16,
    },
  },
  section: {},
  sectionTitle: {
    fontWeight: '500',
    padding: 24,
    color: theme.scheme.onSurface,
  },
  sectionContent: {
    gap: 12,
    flexDirection: {
      compact: 'column',
      medium: 'row',
    },
    flexWrap: {
      medium: 'wrap',
    },
  },

  // Individual card
  componentCard: {
    width: {
      compact: '100%',
      medium: '48%',
    },
    flexGrow: {
      medium: 1,
    },
  },
  cardPreview: {
    height: {
      compact: (rt.screen.width - 16) * (200 / 384), // ~ 2:3.8 aspect ratio
      medium: 200,
    },
    backgroundColor: theme.scheme.surfaceContainerHighest,
    borderBottomStartRadius: theme.shape.medium,
    borderBottomEndRadius: theme.shape.medium,
  },
  cardBody: {
    padding: 24,
    gap: 4,
  },
  cardDescription: {
    color: theme.scheme.onSurfaceVariant,
  },
  labelDisabled: {
    color: theme.scheme.onSurfaceVariant,
  },
}));
