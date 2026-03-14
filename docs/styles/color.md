# Color — M3 Style Reference

> A dynamic color system that generates accessible, personal color schemes from a single source color, with 26+ color roles mapped to components across light/dark themes and three contrast levels.

Sources: [Color System Overview](https://m3.material.io/styles/color/system/overview) · [How the System Works](https://m3.material.io/styles/color/system/how-the-system-works) · [Color Roles](https://m3.material.io/styles/color/roles) · [Choosing a Scheme](https://m3.material.io/styles/color/choosing-a-scheme) · [Static: Baseline](https://m3.material.io/styles/color/static/baseline) · [Static: Custom Brand](https://m3.material.io/styles/color/static/custom-brand) · [Dynamic: Choosing a Source](https://m3.material.io/styles/color/dynamic/choosing-a-source) · [Dynamic: User-Generated](https://m3.material.io/styles/color/dynamic/user-generated-source) · [Dynamic: Content-Based](https://m3.material.io/styles/color/dynamic/content-based-source) · [Advanced Overview](https://m3.material.io/styles/color/advanced/overview) · [Apply Colors](https://m3.material.io/styles/color/advanced/apply-colors) · [Define New Colors](https://m3.material.io/styles/color/advanced/define-new-colors) · [Adjust Existing Colors](https://m3.material.io/styles/color/advanced/adjust-existing-colors) · [Color Resources](https://m3.material.io/styles/color/resources)

---

## Color System

The Material color system provides:

- Built-in accessible color relationships
- 26+ color roles mapped to Material Components
- Built-in dark theme colors
- A static baseline scheme with default color assignments
- Dynamic color from user wallpapers or in-app content
- Three levels of user-controlled contrast

### How It Works: Paint-by-Number

Each UI element is assigned a "number" (a **color role**). Each role maps to a color. You can hand-pick colors for a static scheme, or use Material's dynamic color system to generate an entire accessible palette from a single source color — sourced from a wallpaper, in-app content, or a hand-picked value.

![UI in "x-ray" view where each element has a number instead of a color](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4mxjs2l-1.png?alt=media&token=a123a83d-6785-40ed-9dae-13d566e3399d=s0)

![Green icon button in the UI, assigned a hand-picked color using a color picker](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4mxjwiz-2.png?alt=media&token=b53af031-c021-4fb8-ba5e-1c6c2b4c9c10=s0)

![Image showcasing how a source color is automatically applied to each "number"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4mxk5mu-3.png?alt=media&token=b2543282-21d2-472f-87ed-ef63ec926c4f=s0)

![Image showing a color wheel where a light red color is picked, which then populates the UI](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4mxkasm-4.png?alt=media&token=b0cb1a67-16ef-44dd-b951-d63f75ce011b=s0)

### Dynamic Color Pipeline

The dynamic color process converts a single source color into a full scheme in five steps:

**1. Source color** — obtained from a wallpaper (quantization), in-app content (quantization), or hand-picked.

![Red source color is extracted from a wallpaper](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9v1jfc-wallpaper-source-color.png?alt=media&token=6fe82ae6-f02c-488e-b0e1-e1b94ee1ca78=s0)

![Blue source color is extracted from a podcast cover](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9v2356-in-app-content.png?alt=media&token=07c31cfd-52e9-493a-a4d6-b92fbeaf80ea=s0)

![Green source color selected from a color picker](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9v32x5-hand-picked-color.png?alt=media&token=66bd9129-5bbd-447c-bb2d-98ce379b9bf1=s0)

**2. Algorithm** — powered by [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) (MCU). Three algorithm types exist:

- **User-generated** — uses wallpaper source; maps tones according to system design choices and user preferences
- **Content-based** — uses image source; tones are adjusted to match the source image's appearance while maintaining accessible contrast
- **Custom** — colors closely match chosen input colors (brand, semantic meaning)

![Color palette made by the user-generated algorithm](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9v56si-content-vs-user-left-user.png?alt=media&token=e6855edb-f3f7-4c8b-96c5-53a54ae48ca6=s0)

![Color palette made by the content-based algorithm](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9v5j63-content-vs-user-right-content.png?alt=media&token=7fd0ac00-3154-4d51-a4cf-75758d48022b=s0)

![Color palette made by the custom color algorithm](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flnc8pq3o-content-vs-user-right-content.png?alt=media&token=c5300a4d-cbf4-4670-8e80-0dab375f0e6a=s0)

**3. Key colors** — the algorithm generates five complementary key colors from the source: Primary, Secondary, Tertiary, Neutral, and Neutral Variant.

![Diagram of a source color generating five key colors](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9w1sps-from-source-color-to-key-colors.png?alt=media&token=44238439-ec0c-4d45-b7a2-6f2aea5f3dee=s0)

**4. Tonal palettes** — each key color is expanded into a palette with tones from 0 (black) to 100 (white) in increments of 10, plus 95, 98, and 99.

![Primary, secondary, tertiary, neutral and neutral variant tonal palettes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm612xcmj-13.png?alt=media&token=8cdf6484-55c8-45f7-b989-b2becd9ef8f8=s0)

**5. Color roles** — the algorithm assigns specific tones to the 26 standard color roles in both light and dark theme using accessible color relationships. For example, `primary40` → **primary** role, `primary100` → **on primary** role.

![Diagram mapping color tones to roles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm612xkza-14.png?alt=media&token=65142248-ae42-4818-9ade-d30b5cf2c110=s0)

![Diagram of tonal palettes mapped to all color roles across light and dark themes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm612xrj4-15.png?alt=media&token=141b2627-4abd-4db8-9342-37432e4b162b=s0)

![Diagram of dark theme colors](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flnem28e4-color-roles-dark-theme.png?alt=media&token=cfc39eb0-67a9-4414-9bb6-b0e43087babf=s0)

![Diagram of all the color roles applied to a UI](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5nn2o-color-roles-UI-elements.png?alt=media&token=09e3359f-ca02-4ee0-b762-d2e14e1bfe33=s0)

### HCT Color Space

The system uses **HCT** (Hue, Chroma, Tone) to define all colors:

- **Hue** — the color's position on the spectrum (0–360, circular). Red, orange, yellow, green, blue, violet, etc.
- **Chroma** — how colorful vs. neutral a color appears (0 = grey/black/white, max ≈ 120). Different hues and tones have different max chroma values due to biological and display limitations.
- **Tone** — lightness/darkness (0 = pure black, 100 = pure white). Tone determines contrast — greater tone difference = higher contrast.

Unlike HSL or RGB, HCT allows changing hue and chroma without affecting tone, making it ideal for generating accessible color relationships.

![The hue spectrum](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5w3u0-hue.png?alt=media&token=61b24e9f-2268-4135-b3e3-df102b6ee769=s0)

![Diagram showing chroma range](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5x1is-chroma.png?alt=media&token=f7e93869-ad3a-4938-95c3-66f5d344339f=s0)

![Gradient showing the range of tones](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5xncz-tone.png?alt=media&token=665bed68-9373-41e6-b15d-d5d7d1e1a05f=s0)

### Accessible Tone Pairing

The algorithms pair contrasting tones to create accessible color combinations. A dark tone on a container paired with a light tone on its label ensures 3:1 contrast. For higher accessibility, tones farther apart achieve 7:1 contrast — this powers user-controlled contrast.

![Tones 50 and 98 create 3:1 contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm612yd3c-26.png?alt=media&token=1ebd4f8b-1e78-4589-bc02-f411dbf29283=s0)

![Tones 30 and 98 create 7:1 contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6134eza-27.png?alt=media&token=17bc3773-7657-4067-9821-a118a42a0909=s0)

![13 tones derived from a key color](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm612y8rt-25.png?alt=media&token=e4d5c0e1-185c-44fa-908b-9c3002839c62=s0)

### Three Contrast Levels

Color roles support three levels of contrast so users can select the one that best suits their vision needs:

- **Standard** (default) — emphasizes visual hierarchy using mixed contrast levels to reduce cognitive load
- **Medium** — provides a minimum 3:1 contrast ratio; for those who need more contrast but may experience visual discomfort (e.g. halation) with higher settings
- **High** — 7:1 contrast ratio; emphasizes essential elements and reduces visual distractions

![Standard contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhpboqil-05.png?alt=media&token=7929e04e-f18a-40f8-9d49-e136beadbb3c=s0)

![Medium contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhpbny9u-06.png?alt=media&token=017a2472-3dc0-4251-bebf-493eb445ea9c=s0)

![High contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhpblpsr-07.png?alt=media&token=5891da95-e18f-4b97-b8c2-354b6b209dd4=s0)

Contrast levels are automatically applied to both light and dark themes.

![Three contrast levels in light theme](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5qia9-user-controlled-contrast_07.png?alt=media&token=021ee96e-c069-488f-bbb4-c1f507001ee2=s0)

![Three contrast levels in dark theme](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5qyca-user-controlled-contrast_08.png?alt=media&token=a7815dcb-53cf-4090-93c4-703638708d80=s0)

Custom components support contrast levels by using appropriate color role pairings (e.g., **primary container** with **on primary container**).

![Custom volume slider at standard contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5s0mi-user-controlled-contrast_12.png?alt=media&token=7a4b2a09-68dc-44e6-bcc2-84ae230ac73f=s0)

![Custom volume slider at medium contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5shuk-user-controlled-contrast_13.png?alt=media&token=98766331-252a-48d2-a820-53dc11630029=s0)

### Resources & Availability

| Type           | Link                                                                                                                | Status    |
| -------------- | ------------------------------------------------------------------------------------------------------------------- | --------- |
| Design         | [Design Kit](https://www.figma.com/community/file/1035203688168086460)                                              | Available |
| Implementation | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/theming/Color.md) | Available |
|                | [Jetpack Compose](https://developer.android.com/develop/ui/compose/designsystems/material3#dynamic_color_schemes)   | Available |
|                | [Flutter](https://pub.dev/packages/dynamic_color)                                                                   | Available |
| Tools          | [Material Theme Builder](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder)         | Available |

### What's New

**May 2025** — Three levels of contrast (standard, medium, high). Contrast values are tokenized.

**August 2024** — On-container color roles (`on primary container`, `on secondary container`, `on tertiary container`, `on error container`) updated in light theme to be more colorful while maintaining accessible contrast. Affects badges, buttons, extended FAB, FAB, icon buttons, segmented buttons, chips, lists, menus, navigation bar/drawer/rail, and switches.

![Before/after comparison of colorful on-container colors](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzij6msk-whats-new-on-color.png?alt=media&token=73b4aa74-f663-4f67-a65e-a4ed97b6a556=s0)

**Feb 2023** — Tone-based surface colors replaced the previous surface +1 to +5 elevation approach. Technical changes: default light theme surface moved from tone 99 to 98; neutral palette chroma increased from 4 to 6; surface roles slightly darkened in dark theme. Additional fixed accent colors added for primary, secondary, and tertiary.

![Tone-based surface colors](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9urd5o-%5B1P%5D%20what-is-new-surface.png?alt=media&token=0c9aba76-eda9-4503-ac75-6114e7e99d8b=s0)

![Chroma and tone changes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9urxta-chroma-tone-update.png?alt=media&token=9ae5f3c9-525d-4602-b0ed-d59af40ba43e=s0)

![Fixed accent colors](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9utr1z-whats-new-fixed-colors.png?alt=media&token=5f8ce61b-6eb8-4b8f-a336-08b01c9af58a=s0)

---

## Color Roles

Color roles are the "numbers" on the paint-by-number canvas — the connection between UI elements and their colors. They are:

- **Mapped to Material Components** — work with both static baseline and dynamic color schemes
- **Accessible** — built on accessible color pairings with minimum 3:1 contrast
- **Tokenized** — implemented through design tokens

![All 45 color roles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2ms4t2-1.png?alt=media&token=722d8f55-45a4-4340-98ad-9ae1aa71b7ae=s0)

### Naming Conventions

- **Surface** — backgrounds and large low-emphasis areas
- **Primary/Secondary/Tertiary** — accent colors for emphasis
- **Container** — fill for foreground elements like buttons (not for text/icons)
- **On** — text/icons on top of paired parent color (e.g., **on primary** goes on **primary**)
- **Variant** — lower-emphasis alternative to the non-variant pair

### Pairing Rules

Apply colors only in intended pairs or layering orders. Improper combinations break contrast, especially when user-controlled contrast is enabled.

![Proper color pairing stays legible across contrast levels](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2msstb-2.png?alt=media&token=1e401465-0ddb-4506-bc85-8e943e993490=s0)

![Improper color pairing breaks legibility](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2mt0z5-3.png?alt=media&token=4129b18b-0f80-4b92-b2cc-f6d2abeb4947=s0)

### Accent Roles

Accent roles include primary, secondary, and tertiary. Assign them based on importance and emphasis needed.

- **Primary** — most important actions and elements (FAB to start a new message)
- **Secondary** — less prominent elements without immediate attention need (selected nav icon, dismissive button)
- **Tertiary** — smaller elements needing special emphasis but not immediate attention (badge, notification)

![Mail app with primary, secondary, and tertiary accent usage](https://lh3.googleusercontent.com/zBAGamdJZfsDyiTUOll5jETI5pAQCimbOVfWX3IOqit-JKa_213YRHjLwhlcDDFt5CE5ACu6NDc_jAO3EWPiQ0hhV_jAnipweoAiUcZ8OyU=s0)

### Primary

For the most prominent components: FAB, high-emphasis buttons, active states.

- **Primary** — high-emphasis fills, text, and icons against surface
- **On primary** — text and icons against primary
- **Primary container** — standout fill against surface for key components like FAB
- **On primary container** — text and icons against primary container

![Primary color roles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2mtbil-4.png?alt=media&token=77137c3b-3782-4366-9d88-729623c2d6c1=s0)

![Primary on button](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2muo2k-5.png?alt=media&token=8ba5fb9a-6079-4dbb-9023-77f1f169e4f8=s0)

![Primary container on FAB](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2kwfth2-6.png?alt=media&token=53da80e7-f3f8-4279-9e7c-0400302889fc=s0)

### Secondary

For less prominent components: filter chips, tonal buttons.

- **Secondary** — less prominent fills, text, and icons against surface
- **On secondary** — text and icons against secondary
- **Secondary container** — less prominent fill for recessive components
- **On secondary container** — text and icons against secondary container

![Secondary color roles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2mvccz-7.png?alt=media&token=942165b4-8244-4142-8165-aa7667e4a662=s0)

![Secondary container on icon button](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2mvlj0-8.png?alt=media&token=1443111c-0408-4584-98a9-34980437c35b=s0)

### Tertiary

For contrasting accents that balance primary/secondary or draw attention to specific elements like input fields. Applied at the designer's discretion.

- **Tertiary** — complementary fills, text, and icons against surface
- **On tertiary** — text and icons against tertiary
- **Tertiary container** — complementary container for components like input fields
- **On tertiary container** — text and icons against tertiary container

![Tertiary color roles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2mzjt8-9.png?alt=media&token=9a14358b-d46f-4bbf-854b-8110f14af4e6=s0)

![Tertiary container usage](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n0pba-10.png?alt=media&token=c8225d06-dcbd-47da-aa77-b275550f4002=s0)

### Error

For communicating error states (e.g., incorrect password). Error is a **static color** — it doesn't change even in dynamic schemes, but still adapts to light/dark theme.

- **Error** — attention-grabbing fills, icons, text indicating urgency
- **On error** — text and icons against error
- **Error container** — attention-grabbing fill against surface
- **On error container** — text and icons against error container

![Error color roles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n10jv-11.png?alt=media&token=2894bbf7-1507-46e4-af6d-a69436f2f89c=s0)

### Surface

For neutral backgrounds and container colors (cards, sheets, dialogs).

- **Surface** — default background color
- **On surface** — text and icons against any surface or surface container color
- **On surface variant** — lower-emphasis text and icons against any surface or surface container color

![Surface and on surface roles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n1cbu-12.png?alt=media&token=622ece1d-3225-4c06-ba60-ab3d5ae4f717=s0)

Five **surface container** roles provide hierarchy:

- **Surface container lowest** — lowest emphasis
- **Surface container low** — low emphasis
- **Surface container** — default container
- **Surface container high** — high emphasis
- **Surface container highest** — highest emphasis

The most common combination is **surface** for the background and **surface container** for navigation areas. This mapping should remain consistent across window size classes.

![Surface and surface container usage](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n20l4-14.png?alt=media&token=0b8d1cc2-2a4f-4c58-ab0e-393b0cd1996a=s0)

![Consistent surface mapping across mobile and tablet](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n2btl-15.png?alt=media&token=1cd58070-3840-4e53-b160-df4309cbf43b=s0)

![Surface container roles on components](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n2wcp-17.png?alt=media&token=b86187a0-00e2-4546-9a5f-35593b0297a8=s0)

#### Inverse Colors

Applied selectively to create contrasting effects against the surrounding UI:

- **Inverse surface** — background fills for elements contrasting against surface
- **Inverse on surface** — text and icons against inverse surface
- **Inverse primary** — actionable elements (text buttons) against inverse surface

![Inverse color roles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n4uvc-24.png?alt=media&token=a0ac78ab-206a-4017-a93b-65caa80157c6=s0)

![Snackbar using inverse colors](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n6f78-25.png?alt=media&token=f536573c-5c9a-440d-bac9-723c7a65c094=s0)

### Outline

Two outline colors against surface:

- **Outline** — important boundaries (text field outlines)
- **Outline variant** — decorative elements (dividers) and where other elements already provide 4.5:1 contrast

![Outline and outline variant](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n6s89-18.png?alt=media&token=42a74524-96ff-451f-ab8f-2ea1de7ba188=s0)

![Outline vs outline variant usage](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n7081-19.png?alt=media&token=8b2ad35a-0b3b-4652-8de4-204c51723221=s0)

- **Don't** use outline for dividers — use outline variant instead.
- **Don't** use outline for multi-element components like cards — use outline variant.
- **Don't** use outline variant to create visual hierarchy or define visual boundaries of targets — use outline or another color with 3:1 contrast.
- **Caution**: Outline variant can be used for borders of targets like chips/buttons if those targets contain elements inside them that provide 4.5:1 contrast.

![Don't use outline for dividers](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n7i8q-20_dont.png?alt=media&token=accae0d3-0a04-49f5-8f74-10eb22452dc6=s0)

![Don't use outline for cards](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n7yd0-21_dont.png?alt=media&token=10fb9ebd-55e3-4afc-9081-8682017fcbdd=s0)

![Don't use outline variant for visual hierarchy](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm38uvq2h-23_dont.png?alt=media&token=294e6a8a-6a3a-4dc0-aac8-eeea104c7115=s0)

![Caution: outline variant on chips with internal contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4iofvjf-23_caution.png?alt=media&token=be594ca5-e4d1-47e5-a2d6-850e59b1720a=s0)

### Add-on Color Roles

Most products won't need these. They provide greater flexibility for advanced use cases.

#### Fixed Accent Colors

**Primary/Secondary/Tertiary fixed** — fill colors against surface that maintain the **same tone** in light and dark themes (unlike regular container colors which change). Use instead of container roles when fixed behavior is desired.

**Fixed dim** variants provide a stronger, more emphasized tone relative to the fixed color.

![Fixed and fixed dim roles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n8qum-26.png?alt=media&token=15044478-5a62-4704-a373-6ba69cbceebd=s0)

![FAB using primary fixed across themes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n922v-27.png?alt=media&token=0cd22363-7942-4433-876f-89a575543901=s0)

![FAB using primary container across themes (for comparison)](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n9b76-28.png?alt=media&token=c3e3b6d1-90d1-41ca-b96e-7e9461474217=s0)

- **Don't** use fixed colors where contrast is necessary — they don't change with theme, so they may cause contrast issues.
- **Do** use primary/secondary/tertiary roles for accent colors where contrast is needed.

![Don't use fixed where contrast is needed](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2n9vnb-30_dont.png?alt=media&token=2139b6e3-d8c3-4839-8c39-58d2884edd3a=s0)

![Do use regular accent roles for contrast](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2na1i9-31_do.png?alt=media&token=f9e9816f-4017-47ac-9f00-2ca0300ed145=s0)

#### On Fixed Accent Colors

**On fixed** — text/icons on fixed colors. **On fixed variant** — lower-emphasis text/icons on fixed colors.

![On fixed and on fixed variant roles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2nacto-32.png?alt=media&token=07de8ed6-affe-40e8-a005-5f358f0e1f6a=s0)

![Banner using on primary fixed variant and on primary fixed](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2nappf-33.png?alt=media&token=560dab4a-68fc-4c3a-8690-00fb04297739=s0)

#### Surface Bright & Dim

- **Surface dim** — dimmest surface color in both themes
- **Surface bright** — brightest surface color in both themes

Unlike the default **surface** role (which inverts completely between light/dark), bright and dim keep their **relative brightness** across both themes. Surface bright is always the brightest surface, in both light and dark; surface dim is always the dimmest.

![Surface bright and surface dim examples in light and dark](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2nb208-34.png?alt=media&token=66472140-f56e-4ea0-a435-d96321b728ee=s0)

![Surface bright and dim in dark theme](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2nbbzl-35.png?alt=media&token=48ac623d-4455-4246-a766-ca4042d7d5f7=s0)

![Large screen using surface dim and surface bright](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fly2nfqah-40.png?alt=media&token=562063ff-97b5-470c-8664-92eed7f843d5=s0)

---

## Choosing a Scheme

A **color scheme** describes all of a product's colors, color roles, and color relationships across light and dark themes. There are two kinds: static and dynamic.

### Static Color

Colors that don't change based on user input or content. Material provides a static **baseline** scheme with default color assignments.

**You get:** accessible colors, pre-made baseline scheme, M2 compatibility, easy upgrade path to dynamic color.
**You don't get:** personalized colors, wallpaper/content-based color, user-controlled contrast.

**Use static if:** migrating from M2, enterprise users who don't need personalization, building for iOS, or not ready to implement dynamic color.

### Dynamic Color

Automatically generates an accessible scheme from a specific source color. The source can change (wallpaper, content), causing the UI to update.

**You get:** accessible colors, personalized colors, advanced customizations, user-controlled contrast.
**You don't get:** identical UI colors across all devices.

**Use dynamic if:** you want personalization, wallpaper/content-based color changes, user-controlled contrast, or potential future mix of static + dynamic.

---

## Static Schemes

### Baseline

The default static scheme using accessible color pairings for both light and dark themes.

![Baseline scheme in light theme](https://lh3.googleusercontent.com/j-JLmGXG9zrnK7fJ7-FsVu1lEpz9oLlYVlRAmaTA3tcI_BYxJETtJ2ukAB5EPokqWwzsKHdBEFBYY11G4tm4BmP64HNPxwybufl2eozWyTE=s0)

![Baseline color swatches light](https://lh3.googleusercontent.com/rfxJv95pIoJ3cEZ9ypfimJFC5Ps8sEEVBNWD36C-fy3DYvec8J_VLRosBkwTNsnpSCgSpxWXBypOXT8Ydm4fJOQ2ajWoy7SjocrzJcK7KA8=s0)

![Baseline color swatches dark](https://lh3.googleusercontent.com/S-tgf061eUWcbEBhyicTYR9PWVDeXSsSgZ2e2yYSr6Jn4W-F9z5czZCG6sv58wgJQODQakVRBDvUX5gaotfq3BuqMDLROrCO4D0Kz9F494LW=s0)

#### Baseline Color Tokens

**Primary colors**

| Name                 | Token                               | Value                     |
| -------------------- | ----------------------------------- | ------------------------- |
| Primary              | `md.sys.color.primary`              | md.ref.palette.primary40  |
| On primary           | `md.sys.color.on-primary`           | md.ref.palette.primary100 |
| Primary container    | `md.sys.color.primary-container`    | md.ref.palette.primary90  |
| On primary container | `md.sys.color.on-primary-container` | md.ref.palette.primary30  |

**Secondary colors**

| Name                   | Token                                 | Value                       |
| ---------------------- | ------------------------------------- | --------------------------- |
| Secondary              | `md.sys.color.secondary`              | md.ref.palette.secondary40  |
| On secondary           | `md.sys.color.on-secondary`           | md.ref.palette.secondary100 |
| Secondary container    | `md.sys.color.secondary-container`    | md.ref.palette.secondary90  |
| On secondary container | `md.sys.color.on-secondary-container` | md.ref.palette.secondary30  |

**Tertiary colors**

| Name                  | Token                                | Value                      |
| --------------------- | ------------------------------------ | -------------------------- |
| Tertiary              | `md.sys.color.tertiary`              | md.ref.palette.tertiary40  |
| On tertiary           | `md.sys.color.on-tertiary`           | md.ref.palette.tertiary100 |
| Tertiary container    | `md.sys.color.tertiary-container`    | md.ref.palette.tertiary90  |
| On tertiary container | `md.sys.color.on-tertiary-container` | md.ref.palette.tertiary30  |

**Error colors**

| Name               | Token                             | Value                   |
| ------------------ | --------------------------------- | ----------------------- |
| Error              | `md.sys.color.error`              | md.ref.palette.error40  |
| On error           | `md.sys.color.on-error`           | md.ref.palette.error100 |
| Error container    | `md.sys.color.error-container`    | md.ref.palette.error90  |
| On error container | `md.sys.color.on-error-container` | md.ref.palette.error30  |

**Surface colors**

| Name                      | Token                                    | Value                            |
| ------------------------- | ---------------------------------------- | -------------------------------- |
| Surface                   | `md.sys.color.surface`                   | md.ref.palette.neutral98         |
| On surface                | `md.sys.color.on-surface`                | md.ref.palette.neutral10         |
| Surface Variant           | `md.sys.color.surface-variant`           | md.ref.palette.neutral-variant90 |
| On surface variant        | `md.sys.color.on-surface-variant`        | md.ref.palette.neutral-variant30 |
| Surface Container Highest | `md.sys.color.surface-container-highest` | md.ref.palette.neutral90         |
| Surface Container High    | `md.sys.color.surface-container-high`    | md.ref.palette.neutral92         |
| Surface Container         | `md.sys.color.surface-container`         | md.ref.palette.neutral94         |
| Surface Container Low     | `md.sys.color.surface-container-low`     | md.ref.palette.neutral96         |
| Surface Container Lowest  | `md.sys.color.surface-container-lowest`  | md.ref.palette.neutral100        |
| Inverse surface           | `md.sys.color.inverse-surface`           | md.ref.palette.neutral20         |
| Inverse on surface        | `md.sys.color.inverse-on-surface`        | md.ref.palette.neutral95         |
| Surface tint              | `md.sys.color.surface-tint`              | md.sys.color.primary             |
| Surface tint color        | `md.sys.color.surface-tint-color`        | md.sys.color.primary             |

**Outline colors**

| Name            | Token                          | Value                            |
| --------------- | ------------------------------ | -------------------------------- |
| Outline         | `md.sys.color.outline`         | md.ref.palette.neutral-variant50 |
| Outline Variant | `md.sys.color.outline-variant` | md.ref.palette.neutral-variant80 |

**Add-on primary colors**

| Name                     | Token                                   | Value                    |
| ------------------------ | --------------------------------------- | ------------------------ |
| Primary fixed            | `md.sys.color.primary-fixed`            | md.ref.palette.primary90 |
| On primary fixed         | `md.sys.color.on-primary-fixed`         | md.ref.palette.primary10 |
| Primary fixed dim        | `md.sys.color.primary-fixed-dim`        | md.ref.palette.primary80 |
| On primary fixed variant | `md.sys.color.on-primary-fixed-variant` | md.ref.palette.primary30 |
| Inverse primary          | `md.sys.color.inverse-primary`          | md.ref.palette.primary80 |

**Add-on secondary colors**

| Name                       | Token                                     | Value                      |
| -------------------------- | ----------------------------------------- | -------------------------- |
| Secondary fixed            | `md.sys.color.secondary-fixed`            | md.ref.palette.secondary90 |
| On secondary fixed         | `md.sys.color.on-secondary-fixed`         | md.ref.palette.secondary10 |
| Secondary fixed dim        | `md.sys.color.secondary-fixed-dim`        | md.ref.palette.secondary80 |
| On secondary fixed variant | `md.sys.color.on-secondary-fixed-variant` | md.ref.palette.secondary30 |

**Add-on tertiary colors**

| Name                      | Token                                    | Value                     |
| ------------------------- | ---------------------------------------- | ------------------------- |
| Tertiary fixed            | `md.sys.color.tertiary-fixed`            | md.ref.palette.tertiary90 |
| On tertiary fixed         | `md.sys.color.on-tertiary-fixed`         | md.ref.palette.tertiary10 |
| Tertiary fixed dim        | `md.sys.color.tertiary-fixed-dim`        | md.ref.palette.tertiary80 |
| On tertiary fixed variant | `md.sys.color.on-tertiary-fixed-variant` | md.ref.palette.tertiary30 |

**Add-on surface colors**

| Name           | Token                         | Value                    |
| -------------- | ----------------------------- | ------------------------ |
| Background     | `md.sys.color.background`     | md.ref.palette.neutral98 |
| On background  | `md.sys.color.on-background`  | md.ref.palette.neutral10 |
| Surface Bright | `md.sys.color.surface-bright` | md.ref.palette.neutral98 |
| Surface Dim    | `md.sys.color.surface-dim`    | md.ref.palette.neutral87 |
| Scrim          | `md.sys.color.scrim`          | md.ref.palette.neutral0  |
| Shadow         | `md.sys.color.shadow`         | md.ref.palette.neutral0  |

#### Baseline Tonal Palettes

**Primary**

| Name        | Token                       | Value   |
| ----------- | --------------------------- | ------- |
| Primary 100 | `md.ref.palette.primary100` | #FFFFFF |
| Primary 99  | `md.ref.palette.primary99`  | #FFFBFE |
| Primary 98  | `md.ref.palette.primary98`  | #FEF7FF |
| Primary 95  | `md.ref.palette.primary95`  | #F6EDFF |
| Primary 90  | `md.ref.palette.primary90`  | #EADDFF |
| Primary 80  | `md.ref.palette.primary80`  | #D0BCFF |
| Primary 70  | `md.ref.palette.primary70`  | #B69DF8 |
| Primary 60  | `md.ref.palette.primary60`  | #9A82DB |
| Primary 50  | `md.ref.palette.primary50`  | #7F67BE |
| Primary 40  | `md.ref.palette.primary40`  | #6750A4 |
| Primary 30  | `md.ref.palette.primary30`  | #4F378B |
| Primary 20  | `md.ref.palette.primary20`  | #381E72 |
| Primary 10  | `md.ref.palette.primary10`  | #21005D |
| Primary 0   | `md.ref.palette.primary0`   | #000000 |

**Secondary**

| Name          | Token                         | Value   |
| ------------- | ----------------------------- | ------- |
| Secondary 100 | `md.ref.palette.secondary100` | #FFFFFF |
| Secondary 99  | `md.ref.palette.secondary99`  | #FFFBFE |
| Secondary 98  | `md.ref.palette.secondary98`  | #FEF7FF |
| Secondary 95  | `md.ref.palette.secondary95`  | #F6EDFF |
| Secondary 90  | `md.ref.palette.secondary90`  | #E8DEF8 |
| Secondary 80  | `md.ref.palette.secondary80`  | #CCC2DC |
| Secondary 70  | `md.ref.palette.secondary70`  | #B0A7C0 |
| Secondary 60  | `md.ref.palette.secondary60`  | #958DA5 |
| Secondary 50  | `md.ref.palette.secondary50`  | #7A7289 |
| Secondary 40  | `md.ref.palette.secondary40`  | #625B71 |
| Secondary 30  | `md.ref.palette.secondary30`  | #4A4458 |
| Secondary 20  | `md.ref.palette.secondary20`  | #332D41 |
| Secondary 10  | `md.ref.palette.secondary10`  | #1D192B |
| Secondary 0   | `md.ref.palette.secondary0`   | #000000 |

**Tertiary**

| Name         | Token                        | Value   |
| ------------ | ---------------------------- | ------- |
| Tertiary 100 | `md.ref.palette.tertiary100` | #FFFFFF |
| Tertiary 99  | `md.ref.palette.tertiary99`  | #FFFBFA |
| Tertiary 98  | `md.ref.palette.tertiary98`  | #FFF8F8 |
| Tertiary 95  | `md.ref.palette.tertiary95`  | #FFECF1 |
| Tertiary 90  | `md.ref.palette.tertiary90`  | #FFD8E4 |
| Tertiary 80  | `md.ref.palette.tertiary80`  | #EFB8C8 |
| Tertiary 70  | `md.ref.palette.tertiary70`  | #D29DAC |
| Tertiary 60  | `md.ref.palette.tertiary60`  | #B58392 |
| Tertiary 50  | `md.ref.palette.tertiary50`  | #986977 |
| Tertiary 40  | `md.ref.palette.tertiary40`  | #7D5260 |
| Tertiary 30  | `md.ref.palette.tertiary30`  | #633B48 |
| Tertiary 20  | `md.ref.palette.tertiary20`  | #492532 |
| Tertiary 10  | `md.ref.palette.tertiary10`  | #31111D |
| Tertiary 0   | `md.ref.palette.tertiary0`   | #000000 |

**Error**

| Name      | Token                     | Value   |
| --------- | ------------------------- | ------- |
| Error 100 | `md.ref.palette.error100` | #FFFFFF |
| Error 99  | `md.ref.palette.error99`  | #FFFBF9 |
| Error 98  | `md.ref.palette.error98`  | #FFF8F7 |
| Error 95  | `md.ref.palette.error95`  | #FCEEEE |
| Error 90  | `md.ref.palette.error90`  | #F9DEDC |
| Error 80  | `md.ref.palette.error80`  | #F2B8B5 |
| Error 70  | `md.ref.palette.error70`  | #EC928E |
| Error 60  | `md.ref.palette.error60`  | #E46962 |
| Error 50  | `md.ref.palette.error50`  | #DC362E |
| Error 40  | `md.ref.palette.error40`  | #B3261E |
| Error 30  | `md.ref.palette.error30`  | #8C1D18 |
| Error 20  | `md.ref.palette.error20`  | #601410 |
| Error 10  | `md.ref.palette.error10`  | #410E0B |
| Error 0   | `md.ref.palette.error0`   | #000000 |

**Neutral**

| Name        | Token                       | Value   |
| ----------- | --------------------------- | ------- |
| Neutral 100 | `md.ref.palette.neutral100` | #FFFFFF |
| Neutral 99  | `md.ref.palette.neutral99`  | #FFFBFF |
| Neutral 98  | `md.ref.palette.neutral98`  | #FEF7FF |
| Neutral 96  | `md.ref.palette.neutral96`  | #F7F2FA |
| Neutral 95  | `md.ref.palette.neutral95`  | #F5EFF7 |
| Neutral 94  | `md.ref.palette.neutral94`  | #F3EDF7 |
| Neutral 92  | `md.ref.palette.neutral92`  | #ECE6F0 |
| Neutral 90  | `md.ref.palette.neutral90`  | #E6E0E9 |
| Neutral 87  | `md.ref.palette.neutral87`  | #DED8E1 |
| Neutral 80  | `md.ref.palette.neutral80`  | #CAC5CD |
| Neutral 70  | `md.ref.palette.neutral70`  | #AEA9B1 |
| Neutral 60  | `md.ref.palette.neutral60`  | #938F96 |
| Neutral 50  | `md.ref.palette.neutral50`  | #79767D |
| Neutral 40  | `md.ref.palette.neutral40`  | #605D64 |
| Neutral 30  | `md.ref.palette.neutral30`  | #48464C |
| Neutral 24  | `md.ref.palette.neutral24`  | #3B383E |
| Neutral 22  | `md.ref.palette.neutral22`  | #36343B |
| Neutral 20  | `md.ref.palette.neutral20`  | #322F35 |
| Neutral 17  | `md.ref.palette.neutral17`  | #2B2930 |
| Neutral 12  | `md.ref.palette.neutral12`  | #211F26 |
| Neutral 10  | `md.ref.palette.neutral10`  | #1D1B20 |
| Neutral 6   | `md.ref.palette.neutral6`   | #141218 |
| Neutral 4   | `md.ref.palette.neutral4`   | #0F0D13 |
| Neutral 0   | `md.ref.palette.neutral0`   | #000000 |

**Neutral Variant**

| Name                | Token                               | Value   |
| ------------------- | ----------------------------------- | ------- |
| Neutral Variant 100 | `md.ref.palette.neutral-variant100` | #FFFFFF |
| Neutral Variant 99  | `md.ref.palette.neutral-variant99`  | #FFFBFE |
| Neutral Variant 98  | `md.ref.palette.neutral-variant98`  | #FDF7FF |
| Neutral Variant 95  | `md.ref.palette.neutral-variant95`  | #F5EEFA |
| Neutral Variant 90  | `md.ref.palette.neutral-variant90`  | #E7E0EC |
| Neutral Variant 80  | `md.ref.palette.neutral-variant80`  | #CAC4D0 |
| Neutral Variant 70  | `md.ref.palette.neutral-variant70`  | #AEA9B4 |
| Neutral Variant 60  | `md.ref.palette.neutral-variant60`  | #938F99 |
| Neutral Variant 50  | `md.ref.palette.neutral-variant50`  | #79747E |
| Neutral Variant 40  | `md.ref.palette.neutral-variant40`  | #605D66 |
| Neutral Variant 30  | `md.ref.palette.neutral-variant30`  | #49454F |
| Neutral Variant 20  | `md.ref.palette.neutral-variant20`  | #322F37 |
| Neutral Variant 10  | `md.ref.palette.neutral-variant10`  | #1D1A22 |
| Neutral Variant 0   | `md.ref.palette.neutral-variant0`   | #000000 |

**Static palettes** (Black/White, Blue, Yellow, Red, Purple, Blue Variant, Cyan, Grey, Green, Grey Variant, Orange, Pink) are also available — see the [baseline specs page](https://m3.material.io/styles/color/static/baseline) for all hex values.

### Custom Brand

In a brand-based static scheme, colors are hand-picked to align with product brand colors. This requires more effort than baseline but ensures the product "looks like its brand."

![Brand color scheme example](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln4ilrfy-brand-baseline.png?alt=media&token=7831c3fc-1a36-4aa2-a583-65474ec97d3d=s0)

To create a custom brand scheme: use the Material Theme Builder to input your brand color as the Primary source. It generates a full custom scheme. Optionally set custom sources for Secondary, Tertiary, Error, Neutral, and Neutral Variant.

---

## Dynamic Schemes

### Choosing a Source

Two ways to get a source color for dynamic color:

1. **User-generated color** — from a user's wallpaper. Choose this for personalized experience.
2. **Content-based color** — from in-app content (album art, logo, video preview). Choose this when content is front-and-center.

Products can also use **multiple color sources** — e.g., user-generated for the overall UI and content-based for a specific contained area.

![User-generated color from wallpaper](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flnc8u840-01.png?alt=media&token=2a28a37a-c566-4ebf-a20f-5b92b16e5b66=s0)

![Content-based color from album art](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln4j2i04-02.png?alt=media&token=ef023ff4-6763-48d9-bab6-9ec0aa078ca0=s0)

![Multiple color sources in one app](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln4j3qu9-03.png?alt=media&token=e06645b9-aa5e-4cf7-9ecc-e04edc9de657=s0)

### User-Generated Color

Sourced from an Android user's wallpaper via quantization. The key design principle: **focus on applying color roles correctly** rather than specific hex values, since the final colors are generated on each user's device. Use Material Theme Builder to test how designs function across a range of source colors.

### Content-Based Color

Sourced from in-app content (album thumbnail, logo, video preview). The image is analyzed via quantization, a source color selected, and tones assigned to each role.

Best used for contained screen elements adjacent to the source image. Applications include media players, news feeds (differentiating publications), and photo editing contexts.

---

## Advanced Customizations

### Apply Colors

#### Combine Multiple Color Schemes

Use multiple color schemes in the same app — e.g., a baseline scheme combined with content-based color for a specific area.

![Multiple schemes: teal content-based + red user-generated](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt7bogx-1.png?alt=media&token=4c59af6e-46ca-4c4c-a4f0-2829054456ca=s0)

Best practices:

- Use content-based color to **build hierarchy** and direct attention to content
- **Link and associate** related content items in lists/collections
- **Immerse users** in full-screen content-based color for media/purchase flows
- **Pair with source content** — keep the color source visible on screen
- **Limit to two** color scheme source types per screen
- **Don't replace semantic colors** (red error, green success) with content-based color

![Content-based color for hierarchy](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt7czj9-2.png?alt=media&token=a6e7bf59-72ed-4963-a3b5-2489ab3d0648=s0)

![Content-based color differentiating list items](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt7dkn6-3.png?alt=media&token=52cd3d4a-51f7-4b52-bb97-e26c218b279f=s0)

![Full-screen content-based color for media control](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt7dy9t-4.png?alt=media&token=46406651-a27d-4f5b-b7a8-0f55e31c7438=s0)

#### Map or Remap Colors on UI Elements

Change a component's default color mapping, or apply colors to custom-built components. Choose an appropriate color role based on how the color is used.

![Color remapping on custom volume slider](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt7eaxg-5.png?alt=media&token=837bf820-4912-462f-9d8f-a1e37ff97d2f=s0)

Best practices:

- Use "on-" roles for foreground — they guarantee sufficient contrast with the corresponding background role
- Test under multiple themes (light/dark, various hues) for dynamic schemes
- Always use **color roles**, not static hex values or tonal palette values — static values break with light/dark themes, contrast control, and other features

### Define New Colors

#### Static Colors (Custom Colors)

Additional colors that stay static even in dynamic schemes. Input a reference color and Material returns four derived roles (main, on-main, container, on-container) that align with existing scheme roles. Useful for semantic colors (green success state) or brand expression.

![Static color definition for "Success"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt7wrjx-1.png?alt=media&token=ca9d1728-afc1-4229-8280-ae94ad9f31f8=s0)

- Material provides red **Error** out of the box, so no need to define a custom red semantic color
- Static colors in dynamic schemes can be [harmonized](#harmonize-colors) to shift their hue slightly toward the primary color for a more cohesive appearance

![Harmonized static colors across schemes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt7xb07-2.png?alt=media&token=7b719f7f-7e35-4efc-b95d-62e3e5d341c1=s0)

![Static colors without harmonization (brand/real-world signage)](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt7xlqa-3.png?alt=media&token=2707ae8e-94a9-4133-9693-1ea419940a1b=s0)

#### Custom Color Roles

Define entirely new color roles beyond the 26 standard ones by specifying:

- **Palettes and reference tones** — which Material palette (primary/secondary/tertiary/neutral/neutralVariant/error) and which tone for light and dark themes
- **Color pairings** — foreground/background pairs and tone deltas
- **Contrast** — confirm pairings meet Material's contrast minimums

![Custom primary graphic role definition](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt7y1c2-4.png?alt=media&token=fb1cc70e-1323-4ad9-bd3c-3fb2e4229bdd=s0)

Only use custom color roles if standard roles and static colors cannot meet your needs.

### Adjust Existing Colors

#### Define Your Own Baseline Scheme

Input your own colors for primary, secondary, tertiary, neutral, and neutral variant to generate a static scheme reflecting your brand.

![Custom baseline scheme from logo colors](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt7zkg8-1.png?alt=media&token=d6aa53db-1686-443c-b47a-89cb0c4a6cfd=s0)

Best practices: conventionally, primary and tertiary are most prominent; tertiary changes hue for complementary feel. Secondary, neutral variant, and neutral match primary in hue but are progressively less chromatic.

#### Define Your Own Dynamic Scheme

Provide custom hue and chroma values for each color group to control the dynamic color algorithm's output. Call MCU to dynamically generate the scheme with your custom variant.

![Default vs. custom dynamic scheme specs from same wallpaper](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt809t2-2.png?alt=media&token=2f6a951b-89fe-4154-a188-61939ae892dd=s0)

#### Color Fidelity

A feature that adjusts tones to make scheme colors better match input colors. Material maps colors to specific tones for accessible contrast, which can sometimes make colors appear differently than intended (e.g., too light to appear vibrant). Color fidelity compensates without harming contrast.

![With vs. without color fidelity](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt80nic-3.png?alt=media&token=3c8ada3b-6184-4d34-8763-5b20288ddb22=s0)

Enabled by default in Theme Builder for custom baseline schemes and static colors. Toggle on/off to determine which setting better suits your design.

#### Harmonize Colors

In dynamic schemes, automatically adjust the hue of static colors so they look better alongside the scheme's primary color. Harmonization shifts hues closer to the primary, making colors more visually pleasing together.

To preserve semantic meaning (e.g., red for errors), harmonization **limits** how much a color's hue can change — a red can become warmer or cooler but won't appear purple or orange.

![Harmonization concept](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt814il-4.png?alt=media&token=c451da1d-f5cb-43ef-ad1c-d1e8e23c68bd=s0)

![Harmonization limits preserve semantic meaning](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwt81svm-5.png?alt=media&token=75856d62-6223-4263-9919-8996940fa1c6=s0)

- Don't harmonize colors whose appearance must stay absolutely consistent (brand colors).
- Use the `Blend` function from [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) in code.

---

## Color Resources

### Material Theme Builder

A Figma plugin for emulating the color extraction process, creating custom tonal schemes, contrast checking, and generating tokens.

[Material Theme Builder plugin](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder)

![Material Theme Builder in Figma](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln49elwq-1-mtb.png?alt=media&token=07b587e4-4adb-4c06-b94d-15bdd408345b=s0)

### Tutorials & Codelabs

- [Visualizing dynamic color in your app](https://codelabs.developers.google.com/visualize-dynamic-color?hl=en#0)
- [Designing with accessible colors](https://codelabs.developers.google.com/color-contrast-accessibility?hl=en#0)
- [Customizing Material color](https://codelabs.developers.google.com/customizing-material-color?hl=en#0)
- [Build a Material color scheme](https://www.figma.com/community/file/1248805263844976008/Build-a-Material-color-scheme)
