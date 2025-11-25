import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, ButtonLabel } from 'react-native-material-design/ui/button';
import { Divider } from 'react-native-material-design/ui/divider';
import {
  NavigationDrawer,
  NavigationDrawerBadge,
  NavigationDrawerIcon,
  NavigationDrawerItem,
  NavigationDrawerLabel,
  NavigationDrawerSectionLabel,
} from 'react-native-material-design/ui/navigation-drawer';
import { Text } from 'react-native-material-design/ui/text';
import { StyleSheet } from 'react-native-unistyles';

function DemoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.card}>
      <Text variant="title" size="medium" style={styles.cardTitle}>
        {title}
      </Text>
      {children}
    </View>
  );
}

function StandardDrawerDemo() {
  const [active, setActive] = React.useState('inbox');

  return (
    <View style={styles.standardDemoContainer}>
      <NavigationDrawer variant="standard" open headline="Mail" value={active} onValueChange={setActive}>
        <NavigationDrawerItem value="inbox">
          <NavigationDrawerIcon name="inbox" />
          <NavigationDrawerLabel>Inbox</NavigationDrawerLabel>
          <NavigationDrawerBadge>24</NavigationDrawerBadge>
        </NavigationDrawerItem>
        <NavigationDrawerItem value="outbox">
          <NavigationDrawerIcon name="send" />
          <NavigationDrawerLabel>Outbox</NavigationDrawerLabel>
        </NavigationDrawerItem>
        <NavigationDrawerItem value="favorites">
          <NavigationDrawerIcon name="favorite" />
          <NavigationDrawerLabel>Favorites</NavigationDrawerLabel>
        </NavigationDrawerItem>
        <NavigationDrawerItem value="trash">
          <NavigationDrawerIcon name="delete" />
          <NavigationDrawerLabel>Trash</NavigationDrawerLabel>
        </NavigationDrawerItem>
      </NavigationDrawer>
    </View>
  );
}

function StandardDrawerWithSectionsDemo() {
  const [active, setActive] = React.useState('inbox');

  return (
    <View style={styles.standardDemoContainer}>
      <NavigationDrawer variant="standard" open headline="Mail" value={active} onValueChange={setActive}>
        <NavigationDrawerSectionLabel>Primary</NavigationDrawerSectionLabel>
        <NavigationDrawerItem value="inbox">
          <NavigationDrawerIcon name="inbox" />
          <NavigationDrawerLabel>Inbox</NavigationDrawerLabel>
          <NavigationDrawerBadge>24</NavigationDrawerBadge>
        </NavigationDrawerItem>
        <NavigationDrawerItem value="outbox">
          <NavigationDrawerIcon name="send" />
          <NavigationDrawerLabel>Outbox</NavigationDrawerLabel>
        </NavigationDrawerItem>

        <Divider />

        <NavigationDrawerSectionLabel>Labels</NavigationDrawerSectionLabel>
        <NavigationDrawerItem value="favorites">
          <NavigationDrawerIcon name="favorite" />
          <NavigationDrawerLabel>Favorites</NavigationDrawerLabel>
        </NavigationDrawerItem>
        <NavigationDrawerItem value="trash">
          <NavigationDrawerIcon name="delete" />
          <NavigationDrawerLabel>Trash</NavigationDrawerLabel>
          <NavigationDrawerBadge>5</NavigationDrawerBadge>
        </NavigationDrawerItem>
      </NavigationDrawer>
    </View>
  );
}

function TextOnlyDemo() {
  const [active, setActive] = React.useState('inbox');

  return (
    <View style={styles.standardDemoContainer}>
      <NavigationDrawer variant="standard" open headline="Mail" value={active} onValueChange={setActive}>
        <NavigationDrawerItem value="inbox">
          <NavigationDrawerLabel>Inbox</NavigationDrawerLabel>
          <NavigationDrawerBadge>24</NavigationDrawerBadge>
        </NavigationDrawerItem>
        <NavigationDrawerItem value="outbox">
          <NavigationDrawerLabel>Outbox</NavigationDrawerLabel>
        </NavigationDrawerItem>
        <NavigationDrawerItem value="favorites">
          <NavigationDrawerLabel>Favorites</NavigationDrawerLabel>
        </NavigationDrawerItem>
        <NavigationDrawerItem value="trash">
          <NavigationDrawerLabel>Trash</NavigationDrawerLabel>
        </NavigationDrawerItem>
      </NavigationDrawer>
    </View>
  );
}

function ModalDrawerDemo() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('home');

  return (
    <View>
      <Button variant="filled" onPress={() => setOpen(true)}>
        <ButtonLabel>Open Modal Drawer</ButtonLabel>
      </Button>
      <NavigationDrawer
        variant="modal"
        open={open}
        onOpenChange={setOpen}
        headline="Navigation"
        value={active}
        onValueChange={(v) => {
          setActive(v);
          setOpen(false);
        }}
      >
        <NavigationDrawerItem value="home">
          <NavigationDrawerIcon name="home" />
          <NavigationDrawerLabel>Home</NavigationDrawerLabel>
        </NavigationDrawerItem>
        <NavigationDrawerItem value="explore">
          <NavigationDrawerIcon name="explore" />
          <NavigationDrawerLabel>Explore</NavigationDrawerLabel>
        </NavigationDrawerItem>
        <NavigationDrawerItem value="saved">
          <NavigationDrawerIcon name="bookmark" />
          <NavigationDrawerLabel>Saved</NavigationDrawerLabel>
          <NavigationDrawerBadge>12</NavigationDrawerBadge>
        </NavigationDrawerItem>

        <Divider />

        <NavigationDrawerSectionLabel>Other</NavigationDrawerSectionLabel>
        <NavigationDrawerItem value="settings">
          <NavigationDrawerIcon name="settings" />
          <NavigationDrawerLabel>Settings</NavigationDrawerLabel>
        </NavigationDrawerItem>
        <NavigationDrawerItem value="help">
          <NavigationDrawerIcon name="help" />
          <NavigationDrawerLabel>Help</NavigationDrawerLabel>
        </NavigationDrawerItem>
      </NavigationDrawer>
    </View>
  );
}

export default function NavigationDrawerScreen() {
  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text variant="headline" size="small">
          Navigation Drawer
        </Text>
        <Text variant="body" size="large" style={styles.heroBody}>
          Navigation drawers let people switch between UI views on larger devices
        </Text>
        <View style={styles.heroBullets}>
          <Text variant="body" size="medium" style={styles.heroBullet}>
            Two variants: standard and modal
          </Text>
          <Text variant="body" size="medium" style={styles.heroBullet}>
            Standard for expanded/large windows, modal for compact/medium
          </Text>
          <Text variant="body" size="medium" style={styles.heroBullet}>
            Supports icons, labels, badges, section labels, and dividers
          </Text>
        </View>
      </View>

      {/* Standard variant */}
      <Text variant="title" size="large" style={styles.typeHeader}>
        Standard
      </Text>

      <DemoCard title="With Icons and Badges">
        <StandardDrawerDemo />
      </DemoCard>

      <DemoCard title="With Sections and Dividers">
        <StandardDrawerWithSectionsDemo />
      </DemoCard>

      <DemoCard title="Text Only (No Icons)">
        <TextOnlyDemo />
      </DemoCard>

      {/* Modal variant */}
      <Text variant="title" size="large" style={styles.typeHeader}>
        Modal
      </Text>

      <DemoCard title="Modal with Scrim">
        <ModalDrawerDemo />
      </DemoCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  scrollContainer: {
    flex: 1,
    backgroundColor: theme.scheme.background,
  },
  content: {
    paddingBottom: rt.insets.bottom + 24,
  },

  // Hero
  hero: {
    backgroundColor: theme.scheme.surfaceContainerLow,
    padding: 20,
    gap: 8,
  },
  heroBody: {
    color: theme.scheme.onSurfaceVariant,
  },
  heroBullets: {
    gap: 2,
    paddingTop: 4,
  },
  heroBullet: {
    color: theme.scheme.onSurfaceVariant,
  },

  // Type section headers
  typeHeader: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 4,
    color: theme.scheme.primary,
  },

  // Demo card
  card: {
    marginHorizontal: 16,
    marginTop: 12,
    backgroundColor: theme.scheme.surfaceContainerLowest,
    borderRadius: theme.shape.large,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: theme.scheme.outlineVariant,
    overflow: 'hidden',
  },
  cardTitle: {
    color: theme.scheme.onSurface,
  },

  // Standard demo container — constrain height
  standardDemoContainer: {
    height: 360,
    borderRadius: theme.shape.medium,
    overflow: 'hidden',
    backgroundColor: theme.scheme.surface,
  },
}));
