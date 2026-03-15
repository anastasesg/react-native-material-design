# Buttons — M3 Component Reference

> Buttons prompt most actions in a UI.

Sources: [Overview](https://m3.material.io/components/buttons/overview) · [Specs](https://m3.material.io/components/buttons/specs) · [Guidelines](https://m3.material.io/components/buttons/guidelines) · [Accessibility](https://m3.material.io/components/buttons/accessibility)

---

## Variants

![Diagram comparing buttons with toggle buttons.](https://lh3.googleusercontent.com/aL3DQi0w3IY7RrzOTfarwNqsX5XCPMiDGzkIUr6qHdwOoAxu9_jKKtj826ErTjT1VMuT-0jcXnFDfwyW8FPHchPEr6YmTreDMSFhFLPBQrmK=s0)

Buttons come in two variants:

| Variant            | M3        | M3 Expressive |
| ------------------ | --------- | ------------- |
| Default            | Available | Available     |
| Toggle (selection) | --        | Available     |

- **Default** — triggers an action when pressed (e.g. Save, Submit, Delete)
- **Toggle** — acts as a binary selection control (e.g. Favorite, Save); changes color, shape, and label when toggled

---

## Anatomy

![Diagram labeling 3 parts of a button.](https://lh3.googleusercontent.com/vVI1dXiEpkfp0fUhsnQ_pO8UcdtvWvVpAyQ3kZpslYAkObypS1kuGDoJ3fDcVd0Uat8A5xTrAjiCDeHw8gkVIHaPsnG2mWBCYxgEM5MMwGJf=s0)

![3 parts of a button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gjxqph-10.png?alt=media&token=bc755cbb-a219-477d-a91d-b3ce2c5a1434=s0)

A button consists of three elements:

1. **Container** — holds the label text and optional icon; provides the visual surface (fill, outline, or invisible for text style)
2. **Label text** — the most important element; describes the action the button performs
3. **Icon** (optional) — placed on the leading side before the label text to visually reinforce the action

### Label text

Labels should be concise (1-3 words ideally), written in sentence case (capitalize only the first word and proper nouns). Never truncate or wrap button label text.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gk8677-11.png?alt=media&token=d2f72e60-bab0-4a59-94d4-f1efeef061ce=s0" /><br/><b>Do:</b> Use sentence case for label text</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gk8se0-12.png?alt=media&token=0c5de78d-eddc-4689-a877-64dde564a592=s0" /><br/><b>Don't:</b> Wrap label text to multiple lines</td>
</tr></table>

> **Caution:** Outlined buttons look visually similar to chips. Be mindful of context to avoid confusion.

![Chips next to an outlined button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gkb7by-13.png?alt=media&token=df8f8d15-6611-4468-a602-6729ae041553=s0)

### Container

The container holds the label and optional icon. Its shape and fill vary by color style:

- **Round shape** — fully rounded corners (default)
- **Square shape** — subtle rounding that varies by size

![Round button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gkdq21-14.png?alt=media&token=0e9f70da-da9b-4bad-bfd2-f18734eae074=s0)

![Square buttons with different radii.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gksq9w-15.png?alt=media&token=a66161dd-6f69-44db-97ec-8a6cfeed0192=s0)

The container width dynamically fits the label text. It can also stretch responsively to fill the available width. It must never be narrower than its label.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gkuacg-16.png?alt=media&token=212c260e-0c11-465b-91c6-dd6be48b5ad6=s0" /><br/><b>Do:</b> Width dynamically adjusts to fit label text</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gkv1ay-17.png?alt=media&token=3ea9e4e3-a13f-4541-a358-ad28c22b8b1b=s0" /><br/><b>Don't:</b> Fixed width smaller than the label text</td>
</tr></table>

### Icon (optional)

Icons visually communicate the button's action. They are always placed on the leading side (left in LTR, right in RTL), before the label text. Standard icon size is 20dp.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gky6ia-18.png?alt=media&token=5c0ec87d-81e5-4295-b113-51672dab7734=s0" /><br/><b>Do:</b> Icon placed to the left of label (LTR)</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gkyyny-19.png?alt=media&token=51e26964-7305-4dce-afa5-0b541dad4cd9=s0" /><br/><b>Do:</b> Icon placed to the right of label (RTL)</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gl0vn9-20.png?alt=media&token=616419d9-b098-4c01-8d5c-b25b932e01d9=s0" /><br/><b>Do:</b> Icons should clearly communicate the action</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gl28ks-21.png?alt=media&token=2407e30c-2180-459a-a2a2-0e071810ab22=s0" /><br/><b>Don't:</b> Vertically stack icon above label text</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gl3vbi-23.png?alt=media&token=3c2472a5-a4c1-443f-a2bf-24bc4d68a692=s0" /><br/><b>Don't:</b> Place two icons in a single button</td>
</tr></table>

---

## Usage & When to Use

![Buttons in various shapes and sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gjevop-1.png?alt=media&token=bc9f68db-d7d1-4ed9-bb58-6d9b443f6998=s0)

Buttons are the primary mechanism for triggering actions in a UI. They appear in dialogs, modal windows, forms, cards, toolbars, and button groups.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gjl9h3-3.png?alt=media&token=089a7158-a011-4852-bbc1-a608dcba04d7=s0" /><br/><b>Do:</b> Use buttons for discrete, focused actions</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gjm7we-4.png?alt=media&token=3c4c7650-83c0-4de0-aa00-84646b12bb0a=s0" /><br/><b>Don't:</b> Clutter the UI with too many buttons; use overflow menus or icon buttons instead</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gjnyrv-5.png?alt=media&token=024e3271-e607-4718-ae8e-93e08d20cca1=s0" /><br/><b>Do:</b> Container width dynamically fits label text</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gjpmov-6.png?alt=media&token=5e07ed7b-3d72-480d-aefd-e964adac3024=s0" /><br/><b>Don't:</b> Container narrower than its label text</td>
</tr></table>

![Filled button as wide as layout grid.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gjovh5-7.png?alt=media&token=32769a41-d8ed-43b2-a934-ef07a3f42ea2=s0)

Buttons can stretch responsively to fill the available horizontal space.

### Emphasis hierarchy

The five color styles form an emphasis hierarchy. Use them together to indicate relative importance of actions.

![Diagram of button styles and toggle behaviors.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gjromg-8.png?alt=media&token=568873b8-70ad-4f00-95a0-91f0f11f5ccc=s0)

1. Elevated, 2. Filled, 3. Filled tonal, 4. Outlined, 5. Text

Buttons can also be placed within [button groups](https://m3.material.io/m3/pages/button-groups/overview). In a button group, primary actions should have higher visual emphasis through size, color, or shape.

![Audio app with play, next, and back buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3t81e1q-9.png?alt=media&token=e2b715eb-67a4-43b8-91c6-9636566aa8e5=s0)

Different sized buttons in a button group help emphasize the main action from secondary actions.

---

## Configurations

![Diagram showing configurations of buttons.](https://lh3.googleusercontent.com/bdblUB_QVH5kKnklBiiVlf9Dfthpn80V_W4WBfItgmm5y17ft7FXqpZIh7xultL_P7Qi9eLP9QDmfekSnWOWZGTlCpPt9EyzYlKwoNjf4w5R=s0)

| Category             | Configuration                   | M3        | M3 Expressive |
| -------------------- | ------------------------------- | --------- | ------------- |
| Size                 | Small (default)                 | Available | Available     |
|                      | XS, M, L, XL                    | --        | Available     |
| Shape                | Round (default)                 | Available | Available     |
|                      | Square                          | --        | Available     |
| Color                | Filled (default)                | Available | Available     |
|                      | Elevated, Tonal, Outlined, Text | Available | Available     |
| Small button padding | 16dp (recommended)              | --        | Available     |
|                      | 24dp (not recommended)          | Available | Available     |

---

## Color Styles

### Elevated

Elevated buttons have the same color mapping as tonal buttons but add a shadow for visual separation. Use them sparingly — only when the button needs to stand out from a prominent background surface.

![Elevated button on scrim.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gm51od-24.png?alt=media&token=af14e4f0-a5a6-4b07-bc2b-0bf30523a412=s0)

> **Caution:** Higher elevation implies more emphasis. If the action is truly high-emphasis, prefer filled instead.

![Elevated button in shopping experience.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmah4jer3-25.png?alt=media&token=6bb135a0-9d8e-43dd-b7a9-6b4a83fd6bb9=s0)

### Filled

Filled buttons carry the most visual weight after the FAB. Reserve them for the most important, final actions on a screen — Save, Join now, Confirm. Ideally only one filled button per page. Tertiary color mappings are also supported.

![Filled button "Make payment".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gleigh-26.png?alt=media&token=f6c42433-0e5d-4d96-b76e-58abe238f037=s0)

![Filled "pause" button in music app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmah4doid-27.png?alt=media&token=53a41e3c-5173-4493-8549-676680214b84=s0)

### Tonal

Tonal buttons sit between filled and outlined in emphasis. They use the secondary color mapping and work well for actions that need slightly more visual weight than an outlined button without competing with a filled primary action.

![Shopping app with 2 tonal buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmah4i06x-28.png?alt=media&token=282186b4-5cc1-42f7-a452-e67bb4045219=s0)

### Outlined

Outlined buttons are medium-emphasis — important but not the primary action. They pair well alongside filled buttons for secondary actions. The container has a stroke border with no fill by default. Place them on simple backgrounds; over images or video, add a contrasting fill or switch to filled.

![Outlined buttons for less important actions.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0glqjfo-29.png?alt=media&token=6a2bcb89-a879-4618-98b2-f132ed77fe44=s0)

![Outlined "add to cart" in shopping app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmah4la12-30.png?alt=media&token=3125469c-37e9-499e-aa27-2c4271d62ac1=s0)

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmah4nkn4-31.png?alt=media&token=1ade5dd3-9e53-426c-8b31-0c01e54f8454=s0" /><br/><b>Do:</b> Outlined buttons work on color gradients</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmah4nyin-33.png?alt=media&token=6e65c32c-ed73-419c-9d9d-3ea352a2ceb5=s0" /><br/><b>Caution:</b> On images, add a contrasting fill or switch to filled</td>
</tr></table>

### Text

Text buttons are the lowest-priority action style. The container is invisible at rest — it only appears on hover, focus, or press. They are commonly used in cards, dialogs, and snackbars. Do not underline text buttons; use hyperlinks for that pattern. Text buttons have no toggle variant.

In dialogs, text buttons help unify the action with the dialog text. Align text buttons to the **trailing edge** of dialogs — right for LTR languages, left for RTL languages.

![Calendar screen with 2 text buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gm6pw1-34.png?alt=media&token=c46e7804-81f6-4ec3-a3d8-d8d19faed11b=s0)

![Text button "Retry" in snackbar.](https://lh3.googleusercontent.com/H36_SqjFfm4TS18z76cMTxMxIcg13xZ3eU6NI0yINuEomwQg4nT6Cm4VyJzI18WY1GjuwDJ1eOb2PIo5WY-HytGnJ3ST8utqjPz7KDPy8A=s0)

![Text button against image background.](https://lh3.googleusercontent.com/X87REmjcVSL1zhGYVxWM17HfYYmx1viKw2trkix5gpytY-uQkrtsTzdlJCtb3H7kLliyFR7S5DUkXUZKmAWDVWmo9KRCfpdpnV7f5UtE9eV_=s0)

![Text button "Learn more" in card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwp1tvqz-33.png?alt=media&token=15f63d9f-e6a2-430d-bf26-f469a627f359=s0)

![2 text buttons "Cancel" and "Subscribe" in dialog.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwp1uawi-34.png?alt=media&token=e0f8a3c9-c9fc-4d94-bf96-07db1feaa1f5=s0)

### Color summary

|                                   | 1. Default                                     | 2. Toggle unselected                           | 3. Toggle selected                   |
| --------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ------------------------------------ |
| Elevated container / icon & label | Surface container low / Primary                | Surface container low / Primary                | Primary / On primary                 |
| Filled container / icon & label   | Primary / On primary                           | Surface container / On surface variant         | Primary / On primary                 |
| Tonal container / icon & label    | Secondary container / On secondary container   | Secondary container / On secondary container   | Secondary / On secondary             |
| Outlined container / icon & label | Outline variant (outline) / On surface variant | Outline variant (outline) / On surface variant | Inverse surface / Inverse on surface |
| Text icon & label                 | Primary                                        | --                                             | --                                   |

![Diagram shows dark and light color schemes for buttons.](https://lh3.googleusercontent.com/WJ93jt7Wo2SqAeoEl3Igtaiz31qt6PDJAQEGgQja7iigSR7TutQCkN32h0YzKOnaEC1ilgJGYjFj1i7vVX3gCVvEMuQk4MM2coEuiNbyezs=s0)

> **Note:** The color roles listed above are defaults. They can be customized as long as a minimum 3:1 contrast ratio is maintained between the button and its background.

---

## Toggle Buttons

Toggle buttons handle binary selections like Save or Favorite. When toggled, they change color, shape, and label. Use outlined icons for the unselected state and filled icons for the selected state.

By default, a round toggle button morphs to square when selected, and a square toggle button morphs to round when selected.

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5xpelfc-40.png?alt=media&token=76b5fdbf-51a4-4bf7-a7fa-18a8344c5223=s0" /><br/><b>Do:</b> Keep toggle labels concise and similar in length between states</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5xpfhkc-41.png?alt=media&token=70674385-cf93-4d45-8f25-f41c7550f2e0=s0" /><br/><b>Don't:</b> Use significantly different label lengths between states</td>
</tr></table>

---

## Shape Morph

### Pressed state

Buttons morph to become more square when pressed. Both round and square shape buttons share the same pressed shape corner radii.

![Shape changes of a button.](https://lh3.googleusercontent.com/8nBepkxLTh2-LZw41C57R3sB05HRK8eEhtPonnW84nLHJbq5RvM3hSQbRfeay0TYvDy2Zae4pn3s0PU3UVv8p4JZWoe3nduJScdjQwF1QCkUSw=s0)

1. Enabled, 2. Hovered, 3. Pressed

### When selected (toggle)

Toggle buttons change their resting shape on selection: round becomes square, and square becomes round.

![Shape changes of a toggle button.](https://lh3.googleusercontent.com/_z5_ibNlIkEfNkcYLDj5UZ_UaH0EVzPp8OsyUDDLfHt9UQ9yS6PVp1ZjzslD85Gi4uUJdOLJYDJYBFtU7-jd-k5s4QXnINc4nuet00zk_iQ=s0)

1. Enabled, 2. Hovered, 3. Pressed, 4. Selected

---

## Measurements

![Diagram of measurements of all button sizes.](https://lh3.googleusercontent.com/U1HSZvJ64XZAVoKDD7c_aNskPPvKMw7T4dqs4dwruzlFAhdqAaS33FaIwqq5Gt_ba4S5kGnI0x-fmtZcL5rcT4vz0gOPi0TPra9yWf1P2mjd6Q=s0)

1. Extra small, 2. Small, 3. Medium, 4. Large, 5. Extra large

### Target areas

XS and small buttons must maintain a minimum touch target of 48 x 48dp.

![Diagram of small button target areas.](https://lh3.googleusercontent.com/Kasep-SEdWUyUggfzteERh09ncJmgDUhHXT8siwlktcqKqL74LA66SSYlsR9uhuVcvbV7_DMoFknDNKAhP_n8ujKpAc522mekCDAaWMkVYUz-A=s0)

### Corner sizes

![Diagram of corner radii of buttons.](https://lh3.googleusercontent.com/kKTL_UCWMxbciYbRgSPsv935B-pm5bidxEORTK0GjJNTClRuwPinW-rgkFOI3uGip6oXh_G41hMIqhFmMLIHxFDWyQualCPJaR-bYxHxWyU=s0)

|                  | XS   | S    | M    | L    | XL   |
| ---------------- | ---- | ---- | ---- | ---- | ---- |
| A. Round button  | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp  | 8dp  | 12dp | 16dp | 16dp |

### Size tokens

#### Extra small (XS)

| Name                                           | Token                                                                       | Value                                       |
| ---------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------- |
| Button xsmall container height                 | md.comp.button.xsmall.container.height                                      | 32dp                                        |
| Button xsmall outline width                    | md.comp.button.xsmall.outlined.outline.width                                | 1dp                                         |
| Button xsmall label size                       | md.comp.button.xsmall.label-text                                            | Aa                                          |
| Button xsmall icon size                        | md.comp.button.xsmall.icon.size                                             | 20dp                                        |
| Button xsmall shape round                      | md.comp.button.xsmall.container.shape.round                                 | md.sys.shape.corner.full                    |
| Button xsmall shape square                     | md.comp.button.xsmall.container.shape.square                                | md.sys.shape.corner.medium                  |
| Button xsmall leading space                    | md.comp.button.xsmall.leading-space                                         | 12dp                                        |
| Button xsmall between icon label space         | md.comp.button.xsmall.icon-label-space                                      | 8dp                                         |
| Button xsmall trailing space                   | md.comp.button.xsmall.trailing-space                                        | 12dp                                        |
| Button xsmall shape pressed morph              | md.comp.button.xsmall.pressed.container.shape                               | md.sys.shape.corner.small                   |
| Button xsmall shape spring animation damping   | md.comp.button.xsmall.pressed.container.corner-size.motion.spring.damping   | md.sys.motion.spring.fast.spatial.damping   |
| Button xsmall shape spring animation stiffness | md.comp.button.xsmall.pressed.container.corner-size.motion.spring.stiffness | md.sys.motion.spring.fast.spatial.stiffness |
| Button xsmall selected container shape round   | md.comp.button.xsmall.selected.container.shape.round                        | md.sys.shape.corner.medium                  |
| Button xsmall selected container shape square  | md.comp.button.xsmall.selected.container.shape.square                       | md.sys.shape.corner.full                    |

#### Small (S) — default

| Name                                          | Token                                                                      | Value                                       |
| --------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| Button small container height                 | md.comp.button.small.container.height                                      | 40dp                                        |
| Button small outline width                    | md.comp.button.small.outlined.outline.width                                | 1dp                                         |
| Button small label size                       | md.comp.button.small.label-text                                            | Aa                                          |
| Button small icon size                        | md.comp.button.small.icon.size                                             | 20dp                                        |
| Button small shape round                      | md.comp.button.small.container.shape.round                                 | md.sys.shape.corner.full                    |
| Button small shape square                     | md.comp.button.small.container.shape.square                                | md.sys.shape.corner.medium                  |
| Button small leading space                    | md.comp.button.small.leading-space                                         | 16dp                                        |
| Button small between icon label space         | md.comp.button.small.icon-label-space                                      | 8dp                                         |
| Button small trailing space                   | md.comp.button.small.trailing-space                                        | 16dp                                        |
| Button small shape pressed morph              | md.comp.button.small.pressed.container.shape                               | md.sys.shape.corner.small                   |
| Button small shape spring animation damping   | md.comp.button.small.pressed.container.corner-size.motion.spring.damping   | md.sys.motion.spring.fast.spatial.damping   |
| Button small shape spring animation stiffness | md.comp.button.small.pressed.container.corner-size.motion.spring.stiffness | md.sys.motion.spring.fast.spatial.stiffness |
| Button small selected container shape round   | md.comp.button.small.selected.container.shape.round                        | md.sys.shape.corner.medium                  |
| Button small selected container shape square  | md.comp.button.small.selected.container.shape.square                       | md.sys.shape.corner.full                    |

#### Medium (M)

| Name                                           | Token                                                                       | Value                                       |
| ---------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------- |
| Button medium container height                 | md.comp.button.medium.container.height                                      | 56dp                                        |
| Button medium outline width                    | md.comp.button.medium.outlined.outline.width                                | 1dp                                         |
| Button medium label size                       | md.comp.button.medium.label-text                                            | Aa                                          |
| Button medium icon size                        | md.comp.button.medium.icon.size                                             | 24dp                                        |
| Button medium shape round                      | md.comp.button.medium.container.shape.round                                 | md.sys.shape.corner.full                    |
| Button medium shape square                     | md.comp.button.medium.container.shape.square                                | md.sys.shape.corner.large                   |
| Button medium leading space                    | md.comp.button.medium.leading-space                                         | 24dp                                        |
| Button medium between icon label space         | md.comp.button.medium.icon-label-space                                      | 8dp                                         |
| Button medium trailing space                   | md.comp.button.medium.trailing-space                                        | 24dp                                        |
| Button medium shape pressed morph              | md.comp.button.medium.pressed.container.shape                               | md.sys.shape.corner.medium                  |
| Button medium shape spring animation damping   | md.comp.button.medium.pressed.container.corner-size.motion.spring.damping   | md.sys.motion.spring.fast.spatial.damping   |
| Button medium shape spring animation stiffness | md.comp.button.medium.pressed.container.corner-size.motion.spring.stiffness | md.sys.motion.spring.fast.spatial.stiffness |
| Button medium selected container shape round   | md.comp.button.medium.selected.container.shape.round                        | md.sys.shape.corner.large                   |
| Button medium selected container shape square  | md.comp.button.medium.selected.container.shape.square                       | md.sys.shape.corner.full                    |

#### Large (L)

| Name                                          | Token                                                                      | Value                                       |
| --------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------- |
| Button large container height                 | md.comp.button.large.container.height                                      | 96dp                                        |
| Button large outline width                    | md.comp.button.large.outlined.outline.width                                | 2dp                                         |
| Button large label size                       | md.comp.button.large.label-text                                            | Aa                                          |
| Button large icon size                        | md.comp.button.large.icon.size                                             | 32dp                                        |
| Button large shape round                      | md.comp.button.large.container.shape.round                                 | md.sys.shape.corner.full                    |
| Button large shape square                     | md.comp.button.large.container.shape.square                                | md.sys.shape.corner.extra-large             |
| Button large leading space                    | md.comp.button.large.leading-space                                         | 48dp                                        |
| Button large between icon label space         | md.comp.button.large.icon-label-space                                      | 12dp                                        |
| Button large trailing space                   | md.comp.button.large.trailing-space                                        | 48dp                                        |
| Button large shape pressed morph              | md.comp.button.large.pressed.container.shape                               | md.sys.shape.corner.large                   |
| Button large shape spring animation damping   | md.comp.button.large.pressed.container.corner-size.motion.spring.damping   | md.sys.motion.spring.fast.spatial.damping   |
| Button large shape spring animation stiffness | md.comp.button.large.pressed.container.corner-size.motion.spring.stiffness | md.sys.motion.spring.fast.spatial.stiffness |
| Button large selected container shape round   | md.comp.button.large.selected.container.shape.round                        | md.sys.shape.corner.extra-large             |
| Button large selected container shape square  | md.comp.button.large.selected.container.shape.square                       | md.sys.shape.corner.full                    |

#### Extra large (XL)

| Name                                           | Token                                                                       | Value                                       |
| ---------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------- |
| Button xlarge container height                 | md.comp.button.xlarge.container.height                                      | 136dp                                       |
| Button xlarge outline width                    | md.comp.button.xlarge.outlined.outline.width                                | 3dp                                         |
| Button xlarge label size                       | md.comp.button.xlarge.label-text                                            | Aa                                          |
| Button xlarge icon size                        | md.comp.button.xlarge.icon.size                                             | 40dp                                        |
| Button xlarge shape round                      | md.comp.button.xlarge.container.shape.round                                 | md.sys.shape.corner.full                    |
| Button xlarge shape square                     | md.comp.button.xlarge.container.shape.square                                | md.sys.shape.corner.extra-large             |
| Button xlarge leading space                    | md.comp.button.xlarge.leading-space                                         | 64dp                                        |
| Button xlarge between icon label space         | md.comp.button.xlarge.icon-label-space                                      | 16dp                                        |
| Button xlarge trailing space                   | md.comp.button.xlarge.trailing-space                                        | 64dp                                        |
| Button xlarge shape pressed morph              | md.comp.button.xlarge.pressed.container.shape                               | md.sys.shape.corner.large                   |
| Button xlarge shape spring animation damping   | md.comp.button.xlarge.pressed.container.corner-size.motion.spring.damping   | md.sys.motion.spring.fast.spatial.damping   |
| Button xlarge shape spring animation stiffness | md.comp.button.xlarge.pressed.container.corner-size.motion.spring.stiffness | md.sys.motion.spring.fast.spatial.stiffness |
| Button xlarge selected container shape round   | md.comp.button.xlarge.selected.container.shape.round                        | md.sys.shape.corner.extra-large             |
| Button xlarge selected container shape square  | md.comp.button.xlarge.selected.container.shape.square                       | md.sys.shape.corner.full                    |

---

## Color Tokens

### Elevated

#### Enabled

| Name                                                  | Token                                                 | Value                                |
| ----------------------------------------------------- | ----------------------------------------------------- | ------------------------------------ |
| Button elevated container color                       | `md.comp.button.elevated.container.color`             | `md.sys.color.surface-container-low` |
| Button elevated container color - toggle (unselected) | `md.comp.button.elevated.unselected.container.color`  | `md.sys.color.surface-container-low` |
| Button elevated container color - toggle (selected)   | `md.comp.button.elevated.selected.container.color`    | `md.sys.color.primary`               |
| Button elevated shadow color                          | `md.comp.button.elevated.container.shadow-color`      | `md.sys.color.shadow`                |
| Button elevated elevation                             | `md.comp.button.elevated.container.elevation`         | `md.sys.elevation.level1`            |
| Button elevated label color                           | `md.comp.button.elevated.label-text.color`            | `md.sys.color.primary`               |
| Button elevated label color - toggle (unselected)     | `md.comp.button.elevated.unselected.label-text.color` | `md.sys.color.primary`               |
| Button elevated label color - toggle (selected)       | `md.comp.button.elevated.selected.label-text.color`   | `md.sys.color.on-primary`            |
| Button elevated icon color                            | `md.comp.button.elevated.icon.color`                  | `md.sys.color.primary`               |
| Button elevated icon color - toggle (unselected)      | `md.comp.button.elevated.unselected.icon.color`       | `md.sys.color.primary`               |
| Button elevated icon color - toggle (selected)        | `md.comp.button.elevated.selected.icon.color`         | `md.sys.color.on-primary`            |

#### Disabled

| Name                                         | Token                                                  | Value                     |
| -------------------------------------------- | ------------------------------------------------------ | ------------------------- |
| Button elevated disabled container color     | `md.comp.button.elevated.disabled.container.color`     | `md.sys.color.on-surface` |
| Button elevated disabled container opacity   | `md.comp.button.elevated.disabled.container.opacity`   | 0.1                       |
| Button elevated disabled container elevation | `md.comp.button.elevated.disabled.container.elevation` | `md.sys.elevation.level0` |
| Button elevated disabled label color         | `md.comp.button.elevated.disabled.label-text.color`    | `md.sys.color.on-surface` |
| Button elevated disabled label opacity       | `md.comp.button.elevated.disabled.label-text.opacity`  | 0.38                      |
| Button elevated disabled icon color          | `md.comp.button.elevated.disabled.icon.color`          | `md.sys.color.on-surface` |
| Button elevated disabled icon opacity        | `md.comp.button.elevated.disabled.icon.opacity`        | 0.38                      |

#### Hovered

| Name                                                                      | Token                                                          | Value                                    |
| ------------------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Button elevated hovered container state layer color                       | `md.comp.button.elevated.hovered.state-layer.color`            | `md.sys.color.primary`                   |
| Button elevated hovered container state layer color - toggle (unselected) | `md.comp.button.elevated.unselected.hovered.state-layer.color` | `md.sys.color.primary`                   |
| Button elevated hovered container state layer color - toggle (selected)   | `md.comp.button.elevated.selected.hovered.state-layer.color`   | `md.sys.color.on-primary`                |
| Button elevated hovered container state layer opacity                     | `md.comp.button.elevated.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Button elevated hovered container elevation                               | `md.comp.button.elevated.hovered.container.elevation`          | `md.sys.elevation.level2`                |
| Button elevated hovered label color                                       | `md.comp.button.elevated.hovered.label-text.color`             | `md.sys.color.primary`                   |
| Button elevated hovered label color - toggle (unselected)                 | `md.comp.button.elevated.unselected.hovered.label-text.color`  | `md.sys.color.primary`                   |
| Button elevated hovered label color - toggle (selected)                   | `md.comp.button.elevated.selected.hovered.label-text.color`    | `md.sys.color.on-primary`                |
| Button elevated hovered icon color                                        | `md.comp.button.elevated.hovered.icon.color`                   | `md.sys.color.primary`                   |
| Button elevated hovered icon color - toggle (unselected)                  | `md.comp.button.elevated.unselected.hovered.icon.color`        | `md.sys.color.primary`                   |
| Button elevated hovered icon color - toggle (selected)                    | `md.comp.button.elevated.selected.hovered.icon.color`          | `md.sys.color.on-primary`                |

#### Focused

| Name                                                                      | Token                                                          | Value                                    |
| ------------------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Button elevated focused container state layer color                       | `md.comp.button.elevated.focused.state-layer.color`            | `md.sys.color.primary`                   |
| Button elevated focused container state layer color - toggle (unselected) | `md.comp.button.elevated.unselected.focused.state-layer.color` | `md.sys.color.primary`                   |
| Button elevated focused container state layer color - toggle (selected)   | `md.comp.button.elevated.selected.focused.state-layer.color`   | `md.sys.color.on-primary`                |
| Button elevated focused container state layer opacity                     | `md.comp.button.elevated.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Button elevated focused container state layer elevation                   | `md.comp.button.elevated.focused.container.elevation`          | `md.sys.elevation.level1`                |
| Button elevated focused label color                                       | `md.comp.button.elevated.focused.label-text.color`             | `md.sys.color.primary`                   |
| Button elevated focused label color - toggle (unselected)                 | `md.comp.button.elevated.unselected.focused.label-text.color`  | `md.sys.color.primary`                   |
| Button elevated focused label color - toggle (selected)                   | `md.comp.button.elevated.selected.focused.label-text.color`    | `md.sys.color.on-primary`                |
| Button elevated focused icon color                                        | `md.comp.button.elevated.focused.icon.color`                   | `md.sys.color.primary`                   |
| Button elevated focused icon color - toggle (unselected)                  | `md.comp.button.elevated.unselected.focused.icon.color`        | `md.sys.color.primary`                   |
| Button elevated focused icon color - toggle (selected)                    | `md.comp.button.elevated.selected.focused.icon.color`          | `md.sys.color.on-primary`                |

#### Pressed

| Name                                                                      | Token                                                          | Value                                      |
| ------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| Button elevated pressed container state layer color                       | `md.comp.button.elevated.pressed.state-layer.color`            | `md.sys.color.primary`                     |
| Button elevated pressed container state layer color - toggle (unselected) | `md.comp.button.elevated.unselected.pressed.state-layer.color` | `md.sys.color.primary`                     |
| Button elevated pressed container state layer color - toggle (selected)   | `md.comp.button.elevated.selected.pressed.state-layer.color`   | `md.sys.color.on-primary`                  |
| Button elevated pressed container state layer opacity                     | `md.comp.button.elevated.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Button elevated pressed container state layer elevation                   | `md.comp.button.elevated.pressed.container.elevation`          | `md.sys.elevation.level1`                  |
| Button elevated pressed label color                                       | `md.comp.button.elevated.pressed.label-text.color`             | `md.sys.color.primary`                     |
| Button elevated pressed label color - toggle (unselected)                 | `md.comp.button.elevated.unselected.pressed.label-text.color`  | `md.sys.color.primary`                     |
| Button elevated pressed label color - toggle (selected)                   | `md.comp.button.elevated.selected.pressed.label-text.color`    | `md.sys.color.on-primary`                  |
| Button elevated pressed icon color                                        | `md.comp.button.elevated.pressed.icon.color`                   | `md.sys.color.primary`                     |
| Button elevated pressed icon color - toggle (unselected)                  | `md.comp.button.elevated.unselected.pressed.icon.color`        | `md.sys.color.primary`                     |
| Button elevated pressed icon color - toggle (selected)                    | `md.comp.button.elevated.selected.pressed.icon.color`          | `md.sys.color.on-primary`                  |

### Filled

#### Enabled

| Name                                                | Token                                               | Value                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------- |
| Button filled container color                       | `md.comp.button.filled.container.color`             | `md.sys.color.primary`            |
| Button filled container color - toggle (unselected) | `md.comp.button.filled.unselected.container.color`  | `md.sys.color.surface-container`  |
| Button filled container color - toggle (selected)   | `md.comp.button.filled.selected.container.color`    | `md.sys.color.primary`            |
| Button filled shadow color                          | `md.comp.button.filled.container.shadow-color`      | `md.sys.color.shadow`             |
| Button filled elevation                             | `md.comp.button.filled.container.elevation`         | `md.sys.elevation.level0`         |
| Button filled label color                           | `md.comp.button.filled.label-text.color`            | `md.sys.color.on-primary`         |
| Button filled label color - toggle (unselected)     | `md.comp.button.filled.unselected.label-text.color` | `md.sys.color.on-surface-variant` |
| Button filled label color - toggle (selected)       | `md.comp.button.filled.selected.label-text.color`   | `md.sys.color.on-primary`         |
| Button filled icon color                            | `md.comp.button.filled.icon.color`                  | `md.sys.color.on-primary`         |
| Button filled icon color - toggle (unselected)      | `md.comp.button.filled.unselected.icon.color`       | `md.sys.color.on-surface-variant` |
| Button filled icon color - toggle (selected)        | `md.comp.button.filled.selected.icon.color`         | `md.sys.color.on-primary`         |

#### Disabled

| Name                                       | Token                                                | Value                     |
| ------------------------------------------ | ---------------------------------------------------- | ------------------------- |
| Button filled disabled container color     | `md.comp.button.filled.disabled.container.color`     | `md.sys.color.on-surface` |
| Button filled disabled container opacity   | `md.comp.button.filled.disabled.container.opacity`   | 0.1                       |
| Button filled disabled container elevation | `md.comp.button.filled.disabled.container.elevation` | `md.sys.elevation.level0` |
| Button filled disabled label color         | `md.comp.button.filled.disabled.label-text.color`    | `md.sys.color.on-surface` |
| Button filled disabled label opacity       | `md.comp.button.filled.disabled.label-text.opacity`  | 0.38                      |
| Button filled disabled icon color          | `md.comp.button.filled.disabled.icon.color`          | `md.sys.color.on-surface` |
| Button filled disabled icon opacity        | `md.comp.button.filled.disabled.icon.opacity`        | 0.38                      |

#### Hovered

| Name                                                                    | Token                                                        | Value                                    |
| ----------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Button filled hovered container state layer color                       | `md.comp.button.filled.hovered.state-layer.color`            | `md.sys.color.on-primary`                |
| Button filled hovered container state layer color - toggle (unselected) | `md.comp.button.filled.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Button filled hovered container state layer color - toggle (selected)   | `md.comp.button.filled.selected.hovered.state-layer.color`   | `md.sys.color.on-primary`                |
| Button filled hovered container state layer opacity                     | `md.comp.button.filled.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Button filled hovered container elevation                               | `md.comp.button.filled.hovered.container.elevation`          | `md.sys.elevation.level1`                |
| Button filled hovered label color                                       | `md.comp.button.filled.hovered.label-text.color`             | `md.sys.color.on-primary`                |
| Button filled hovered label color - toggle (unselected)                 | `md.comp.button.filled.unselected.hovered.label-text.color`  | `md.sys.color.on-surface-variant`        |
| Button filled hovered label color - toggle (selected)                   | `md.comp.button.filled.selected.hovered.label-text.color`    | `md.sys.color.on-primary`                |
| Button filled hovered icon color                                        | `md.comp.button.filled.hovered.icon.color`                   | `md.sys.color.on-primary`                |
| Button filled hovered icon color - toggle (unselected)                  | `md.comp.button.filled.unselected.hovered.icon.color`        | `md.sys.color.on-surface-variant`        |
| Button filled hovered icon color - toggle (selected)                    | `md.comp.button.filled.selected.hovered.icon.color`          | `md.sys.color.on-primary`                |

#### Focused

| Name                                                                    | Token                                                        | Value                                    |
| ----------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- |
| Button filled focused container state layer color                       | `md.comp.button.filled.focused.state-layer.color`            | `md.sys.color.on-primary`                |
| Button filled focused container state layer color - toggle (unselected) | `md.comp.button.filled.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Button filled focused container state layer color - toggle (selected)   | `md.comp.button.filled.selected.focused.state-layer.color`   | `md.sys.color.on-primary`                |
| Button filled focused container state layer opacity                     | `md.comp.button.filled.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Button filled focused container state layer elevation                   | `md.comp.button.filled.focused.container.elevation`          | `md.sys.elevation.level0`                |
| Button filled focused label color                                       | `md.comp.button.filled.focused.label-text.color`             | `md.sys.color.on-primary`                |
| Button filled focused label color - toggle (unselected)                 | `md.comp.button.filled.unselected.focused.label-text.color`  | `md.sys.color.on-surface-variant`        |
| Button filled focused label color - toggle (selected)                   | `md.comp.button.filled.selected.focused.label-text.color`    | `md.sys.color.on-primary`                |
| Button filled focused icon color                                        | `md.comp.button.filled.focused.icon.color`                   | `md.sys.color.on-primary`                |
| Button filled focused icon color - toggle (unselected)                  | `md.comp.button.filled.unselected.focused.icon.color`        | `md.sys.color.on-surface-variant`        |
| Button filled focused icon color - toggle (selected)                    | `md.comp.button.filled.selected.focused.icon.color`          | `md.sys.color.on-primary`                |

#### Pressed

| Name                                                                    | Token                                                        | Value                                      |
| ----------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| Button filled pressed container state layer color                       | `md.comp.button.filled.pressed.state-layer.color`            | `md.sys.color.on-primary`                  |
| Button filled pressed container state layer color - toggle (unselected) | `md.comp.button.filled.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant`          |
| Button filled pressed container state layer color - toggle (selected)   | `md.comp.button.filled.selected.pressed.state-layer.color`   | `md.sys.color.on-primary`                  |
| Button filled pressed container state layer opacity                     | `md.comp.button.filled.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Button filled pressed container state layer elevation                   | `md.comp.button.filled.pressed.container.elevation`          | `md.sys.elevation.level0`                  |
| Button filled pressed label color                                       | `md.comp.button.filled.pressed.label-text.color`             | `md.sys.color.on-primary`                  |
| Button filled pressed label color - toggle (unselected)                 | `md.comp.button.filled.unselected.pressed.label-text.color`  | `md.sys.color.on-surface-variant`          |
| Button filled pressed label color - toggle (selected)                   | `md.comp.button.filled.selected.pressed.label-text.color`    | `md.sys.color.on-primary`                  |
| Button filled pressed icon color                                        | `md.comp.button.filled.pressed.icon.color`                   | `md.sys.color.on-primary`                  |
| Button filled pressed icon color - toggle (unselected)                  | `md.comp.button.filled.unselected.pressed.icon.color`        | `md.sys.color.on-surface-variant`          |
| Button filled pressed icon color - toggle (selected)                    | `md.comp.button.filled.selected.pressed.icon.color`          | `md.sys.color.on-primary`                  |

### Tonal

#### Enabled

| Name                                               | Token                                              | Value                                 |
| -------------------------------------------------- | -------------------------------------------------- | ------------------------------------- |
| Button tonal container color                       | `md.comp.button.tonal.container.color`             | `md.sys.color.secondary-container`    |
| Button tonal container color - toggle (unselected) | `md.comp.button.tonal.unselected.container.color`  | `md.sys.color.secondary-container`    |
| Button tonal container color - toggle (selected)   | `md.comp.button.tonal.selected.container.color`    | `md.sys.color.secondary`              |
| Button tonal shadow color                          | `md.comp.button.tonal.container.shadow-color`      | `md.sys.color.shadow`                 |
| Button tonal elevation                             | `md.comp.button.tonal.container.elevation`         | `md.sys.elevation.level0`             |
| Button tonal label color                           | `md.comp.button.tonal.label-text.color`            | `md.sys.color.on-secondary-container` |
| Button tonal label color - toggle (unselected)     | `md.comp.button.tonal.unselected.label-text.color` | `md.sys.color.on-secondary-container` |
| Button tonal label color - toggle (selected)       | `md.comp.button.tonal.selected.label-text.color`   | `md.sys.color.on-secondary`           |
| Button tonal icon color                            | `md.comp.button.tonal.icon.color`                  | `md.sys.color.on-secondary-container` |
| Button tonal icon color - toggle (unselected)      | `md.comp.button.tonal.unselected.icon.color`       | `md.sys.color.on-secondary-container` |
| Button tonal icon color - toggle (selected)        | `md.comp.button.tonal.selected.icon.color`         | `md.sys.color.on-secondary`           |

#### Disabled

| Name                                      | Token                                               | Value                     |
| ----------------------------------------- | --------------------------------------------------- | ------------------------- |
| Button tonal disabled container color     | `md.comp.button.tonal.disabled.container.color`     | `md.sys.color.on-surface` |
| Button tonal disabled container opacity   | `md.comp.button.tonal.disabled.container.opacity`   | 0.1                       |
| Button tonal disabled container elevation | `md.comp.button.tonal.disabled.container.elevation` | `md.sys.elevation.level0` |
| Button tonal disabled label color         | `md.comp.button.tonal.disabled.label-text.color`    | `md.sys.color.on-surface` |
| Button tonal disabled label opacity       | `md.comp.button.tonal.disabled.label-text.opacity`  | 0.38                      |
| Button tonal disabled icon color          | `md.comp.button.tonal.disabled.icon.color`          | `md.sys.color.on-surface` |
| Button tonal disabled icon opacity        | `md.comp.button.tonal.disabled.icon.opacity`        | 0.38                      |

#### Hovered

| Name                                                                   | Token                                                       | Value                                    |
| ---------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| Button tonal hovered container state layer color                       | `md.comp.button.tonal.hovered.state-layer.color`            | `md.sys.color.on-secondary-container`    |
| Button tonal hovered container state layer color - toggle (unselected) | `md.comp.button.tonal.unselected.hovered.state-layer.color` | `md.sys.color.on-secondary-container`    |
| Button tonal hovered container state layer color - toggle (selected)   | `md.comp.button.tonal.selected.hovered.state-layer.color`   | `md.sys.color.on-secondary`              |
| Button tonal hovered container state layer opacity                     | `md.comp.button.tonal.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Button tonal hovered container elevation                               | `md.comp.button.tonal.hovered.container.elevation`          | `md.sys.elevation.level1`                |
| Button tonal hovered label color                                       | `md.comp.button.tonal.hovered.label-text.color`             | `md.sys.color.on-secondary-container`    |
| Button tonal hovered label color - toggle (unselected)                 | `md.comp.button.tonal.unselected.hovered.label-text.color`  | `md.sys.color.on-secondary-container`    |
| Button tonal hovered label color - toggle (selected)                   | `md.comp.button.tonal.selected.hovered.label-text.color`    | `md.sys.color.on-secondary`              |
| Button tonal hovered icon color                                        | `md.comp.button.tonal.hovered.icon.color`                   | `md.sys.color.on-secondary-container`    |
| Button tonal hovered icon color - toggle (unselected)                  | `md.comp.button.tonal.unselected.hovered.icon.color`        | `md.sys.color.on-secondary-container`    |
| Button tonal hovered icon color - toggle (selected)                    | `md.comp.button.tonal.selected.hovered.icon.color`          | `md.sys.color.on-secondary`              |

#### Focused

| Name                                                                   | Token                                                       | Value                                    |
| ---------------------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| Button tonal focused container state layer color                       | `md.comp.button.tonal.focused.state-layer.color`            | `md.sys.color.on-secondary-container`    |
| Button tonal focused container state layer color - toggle (unselected) | `md.comp.button.tonal.unselected.focused.state-layer.color` | `md.sys.color.on-secondary-container`    |
| Button tonal focused container state layer color - toggle (selected)   | `md.comp.button.tonal.selected.focused.state-layer.color`   | `md.sys.color.on-secondary`              |
| Button tonal focused container state layer opacity                     | `md.comp.button.tonal.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Button tonal focused container state layer elevation                   | `md.comp.button.tonal.focused.container.elevation`          | `md.sys.elevation.level0`                |
| Button tonal focused label color                                       | `md.comp.button.tonal.focused.label-text.color`             | `md.sys.color.on-secondary-container`    |
| Button tonal focused label color - toggle (unselected)                 | `md.comp.button.tonal.unselected.focused.label-text.color`  | `md.sys.color.on-secondary-container`    |
| Button tonal focused label color - toggle (selected)                   | `md.comp.button.tonal.selected.focused.label-text.color`    | `md.sys.color.on-secondary`              |
| Button tonal focused icon color                                        | `md.comp.button.tonal.focused.icon.color`                   | `md.sys.color.on-secondary-container`    |
| Button tonal focused icon color - toggle (unselected)                  | `md.comp.button.tonal.unselected.focused.icon.color`        | `md.sys.color.on-secondary-container`    |
| Button tonal focused icon color - toggle (selected)                    | `md.comp.button.tonal.selected.focused.icon.color`          | `md.sys.color.on-secondary`              |

#### Pressed

| Name                                                                   | Token                                                       | Value                                      |
| ---------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------ |
| Button tonal pressed container state layer color                       | `md.comp.button.tonal.pressed.state-layer.color`            | `md.sys.color.on-secondary-container`      |
| Button tonal pressed container state layer color - toggle (unselected) | `md.comp.button.tonal.unselected.pressed.state-layer.color` | `md.sys.color.on-secondary-container`      |
| Button tonal pressed container state layer color - toggle (selected)   | `md.comp.button.tonal.selected.pressed.state-layer.color`   | `md.sys.color.on-secondary`                |
| Button tonal pressed container state layer opacity                     | `md.comp.button.tonal.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Button tonal pressed container state layer elevation                   | `md.comp.button.tonal.pressed.container.elevation`          | `md.sys.elevation.level0`                  |
| Button tonal pressed label color                                       | `md.comp.button.tonal.pressed.label-text.color`             | `md.sys.color.on-secondary-container`      |
| Button tonal pressed label color - toggle (unselected)                 | `md.comp.button.tonal.unselected.pressed.label-text.color`  | `md.sys.color.on-secondary-container`      |
| Button tonal pressed label color - toggle (selected)                   | `md.comp.button.tonal.selected.pressed.label-text.color`    | `md.sys.color.on-secondary`                |
| Button tonal pressed icon color                                        | `md.comp.button.tonal.pressed.icon.color`                   | `md.sys.color.on-secondary-container`      |
| Button tonal pressed icon color - toggle (unselected)                  | `md.comp.button.tonal.unselected.pressed.icon.color`        | `md.sys.color.on-secondary-container`      |
| Button tonal pressed icon color - toggle (selected)                    | `md.comp.button.tonal.selected.pressed.icon.color`          | `md.sys.color.on-secondary`                |

### Outlined

#### Enabled

| Name                                                | Token                                                 | Value                             |
| --------------------------------------------------- | ----------------------------------------------------- | --------------------------------- |
| Button outlined outline color                       | `md.comp.button.outlined.outline.color`               | `md.sys.color.outline-variant`    |
| Button outlined container color - toggle (selected) | `md.comp.button.outlined.selected.container.color`    | `md.sys.color.inverse-surface`    |
| Button outlined label color                         | `md.comp.button.outlined.label-text.color`            | `md.sys.color.on-surface-variant` |
| Button outlined label color - toggle (unselected)   | `md.comp.button.outlined.unselected.label-text.color` | `md.sys.color.on-surface-variant` |
| Button outlined label color - toggle (selected)     | `md.comp.button.outlined.selected.label-text.color`   | `md.sys.color.inverse-on-surface` |
| Button outlined icon color                          | `md.comp.button.outlined.icon.color`                  | `md.sys.color.on-surface-variant` |
| Button outlined icon color - toggle (unselected)    | `md.comp.button.outlined.unselected.icon.color`       | `md.sys.color.on-surface-variant` |
| Button outlined icon color - toggle (selected)      | `md.comp.button.outlined.selected.icon.color`         | `md.sys.color.inverse-on-surface` |

#### Disabled

| Name                                                | Token                                                       | Value                          |
| --------------------------------------------------- | ----------------------------------------------------------- | ------------------------------ |
| Button outlined disabled outline color              | `md.comp.button.outlined.disabled.outline.color`            | `md.sys.color.outline-variant` |
| Button outlined disabled outline color (unselected) | `md.comp.button.outlined.unselected.disabled.outline.color` | `md.sys.color.outline-variant` |
| Button outlined disabled container color (selected) | `md.comp.button.outlined.selected.disabled.container.color` | `md.sys.color.on-surface`      |
| Button outlined disabled container opacity          | `md.comp.button.outlined.disabled.container.opacity`        | 0.1                            |
| Button outlined disabled label color                | `md.comp.button.outlined.disabled.label-text.color`         | `md.sys.color.on-surface`      |
| Button outlined disabled label opacity              | `md.comp.button.outlined.disabled.label-text.opacity`       | 0.38                           |
| Button outlined disabled icon color                 | `md.comp.button.outlined.disabled.icon.color`               | `md.sys.color.on-surface`      |
| Button outlined disabled icon opacity               | `md.comp.button.outlined.disabled.icon.opacity`             | 0.38                           |

#### Hovered

| Name                                                            | Token                                                          | Value                                    |
| --------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Button outlined hovered state layer color                       | `md.comp.button.outlined.hovered.state-layer.color`            | `md.sys.color.on-surface-variant`        |
| Button outlined hovered state layer color - toggle (unselected) | `md.comp.button.outlined.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Button outlined hovered state layer color - toggle (selected)   | `md.comp.button.outlined.selected.hovered.state-layer.color`   | `md.sys.color.inverse-on-surface`        |
| Button outlined hovered state layer opacity                     | `md.comp.button.outlined.hovered.state-layer.opacity`          | `md.sys.state.hover.state-layer-opacity` |
| Button outlined hovered outline color                           | `md.comp.button.outlined.hovered.outline.color`                | `md.sys.color.outline-variant`           |
| Button outlined hovered outline color - toggle (unselected)     | `md.comp.button.outlined.unselected.hovered.outline.color`     | `md.sys.color.outline-variant`           |
| Button outlined hovered label color                             | `md.comp.button.outlined.hovered.label-text.color`             | `md.sys.color.on-surface-variant`        |
| Button outlined hovered label color - toggle (unselected)       | `md.comp.button.outlined.unselected.hovered.label-text.color`  | `md.sys.color.on-surface-variant`        |
| Button outlined hovered label color - toggle (selected)         | `md.comp.button.outlined.selected.hovered.label-text.color`    | `md.sys.color.inverse-on-surface`        |
| Button outlined hovered icon color                              | `md.comp.button.outlined.hovered.icon.color`                   | `md.sys.color.on-surface-variant`        |
| Button outlined hovered icon color - toggle (unselected)        | `md.comp.button.outlined.unselected.hovered.icon.color`        | `md.sys.color.on-surface-variant`        |
| Button outlined hovered icon color - toggle (selected)          | `md.comp.button.outlined.selected.hovered.icon.color`          | `md.sys.color.inverse-on-surface`        |

#### Focused

| Name                                                                      | Token                                                          | Value                                    |
| ------------------------------------------------------------------------- | -------------------------------------------------------------- | ---------------------------------------- |
| Button outlined focused container state layer color                       | `md.comp.button.outlined.focused.state-layer.color`            | `md.sys.color.on-surface-variant`        |
| Button outlined focused container state layer color - toggle (unselected) | `md.comp.button.outlined.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant`        |
| Button outlined focused container state layer color - toggle (selected)   | `md.comp.button.outlined.selected.focused.state-layer.color`   | `md.sys.color.inverse-on-surface`        |
| Button outlined focused container state layer opacity                     | `md.comp.button.outlined.focused.state-layer.opacity`          | `md.sys.state.focus.state-layer-opacity` |
| Button outlined focused outline color                                     | `md.comp.button.outlined.focused.outline.color`                | `md.sys.color.outline-variant`           |
| Button outlined focused outline color - toggle (unselected)               | `md.comp.button.outlined.unselected.focused.outline.color`     | `md.sys.color.outline-variant`           |
| Button outlined focused label color                                       | `md.comp.button.outlined.focused.label-text.color`             | `md.sys.color.on-surface-variant`        |
| Button outlined focused label color - toggle (unselected)                 | `md.comp.button.outlined.unselected.focused.label-text.color`  | `md.sys.color.on-surface-variant`        |
| Button outlined focused label color - toggle (selected)                   | `md.comp.button.outlined.selected.focused.label-text.color`    | `md.sys.color.inverse-on-surface`        |
| Button outlined focused icon color                                        | `md.comp.button.outlined.focused.icon.color`                   | `md.sys.color.on-surface-variant`        |
| Button outlined focused icon color - toggle (unselected)                  | `md.comp.button.outlined.unselected.focused.icon.color`        | `md.sys.color.on-surface-variant`        |
| Button outlined focused icon color - toggle (selected)                    | `md.comp.button.outlined.selected.focused.icon.color`          | `md.sys.color.inverse-on-surface`        |

#### Pressed

| Name                                                                      | Token                                                          | Value                                      |
| ------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------ |
| Button outlined pressed container state layer color                       | `md.comp.button.outlined.pressed.state-layer.color`            | `md.sys.color.on-surface-variant`          |
| Button outlined pressed container state layer color - toggle (unselected) | `md.comp.button.outlined.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant`          |
| Button outlined pressed container state layer color - toggle (selected)   | `md.comp.button.outlined.selected.pressed.state-layer.color`   | `md.sys.color.inverse-on-surface`          |
| Button outlined pressed container state layer opacity                     | `md.comp.button.outlined.pressed.state-layer.opacity`          | `md.sys.state.pressed.state-layer-opacity` |
| Button outlined pressed outline color                                     | `md.comp.button.outlined.pressed.outline.color`                | `md.sys.color.outline-variant`             |
| Button outlined pressed outline color - toggle (unselected)               | `md.comp.button.outlined.unselected.pressed.outline.color`     | `md.sys.color.outline-variant`             |
| Button outlined pressed label color                                       | `md.comp.button.outlined.pressed.label-text.color`             | `md.sys.color.on-surface-variant`          |
| Button outlined pressed label color - toggle (unselected)                 | `md.comp.button.outlined.unselected.pressed.label-text.color`  | `md.sys.color.on-surface-variant`          |
| Button outlined pressed label color - toggle (selected)                   | `md.comp.button.outlined.selected.pressed.label-text.color`    | `md.sys.color.inverse-on-surface`          |
| Button outlined pressed icon color                                        | `md.comp.button.outlined.pressed.icon.color`                   | `md.sys.color.on-surface-variant`          |
| Button outlined pressed icon color - toggle (unselected)                  | `md.comp.button.outlined.unselected.pressed.icon.color`        | `md.sys.color.on-surface-variant`          |
| Button outlined pressed icon color - toggle (selected)                    | `md.comp.button.outlined.selected.pressed.icon.color`          | `md.sys.color.inverse-on-surface`          |

### Text

#### Enabled

| Name                    | Token                                  | Value                  |
| ----------------------- | -------------------------------------- | ---------------------- |
| Button text label color | `md.comp.button.text.label-text.color` | `md.sys.color.primary` |
| Button text icon color  | `md.comp.button.text.icon.color`       | `md.sys.color.primary` |

#### Disabled

| Name                                   | Token                                             | Value                     |
| -------------------------------------- | ------------------------------------------------- | ------------------------- |
| Button text disabled container color   | `md.comp.button.text.disabled.container.color`    | `md.sys.color.on-surface` |
| Button text disabled container opacity | `md.comp.button.text.disabled.container.opacity`  | 0.1                       |
| Button text disabled label color       | `md.comp.button.text.disabled.label-text.color`   | `md.sys.color.on-surface` |
| Button text disabled label opacity     | `md.comp.button.text.disabled.label-text.opacity` | 0.38                      |
| Button text disabled icon color        | `md.comp.button.text.disabled.icon.color`         | `md.sys.color.on-surface` |
| Button text disabled icon opacity      | `md.comp.button.text.disabled.icon.opacity`       | 0.38                      |

#### Hovered

| Name                                    | Token                                             | Value                                    |
| --------------------------------------- | ------------------------------------------------- | ---------------------------------------- |
| Button text hovered state layer color   | `md.comp.button.text.hovered.state-layer.color`   | `md.sys.color.primary`                   |
| Button text hovered state layer opacity | `md.comp.button.text.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` |
| Button text hovered label color         | `md.comp.button.text.hovered.label-text.color`    | `md.sys.color.primary`                   |
| Button text hovered icon color          | `md.comp.button.text.hovered.icon.color`          | `md.sys.color.primary`                   |

#### Focused

| Name                                    | Token                                             | Value                                    |
| --------------------------------------- | ------------------------------------------------- | ---------------------------------------- |
| Button text focused state layer color   | `md.comp.button.text.focused.state-layer.color`   | `md.sys.color.primary`                   |
| Button text focused state layer opacity | `md.comp.button.text.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` |
| Button text focused label color         | `md.comp.button.text.focused.label-text.color`    | `md.sys.color.primary`                   |
| Button text focused icon color          | `md.comp.button.text.focused.icon.color`          | `md.sys.color.primary`                   |

#### Pressed

| Name                                    | Token                                             | Value                                      |
| --------------------------------------- | ------------------------------------------------- | ------------------------------------------ |
| Button text pressed state layer color   | `md.comp.button.text.pressed.state-layer.color`   | `md.sys.color.primary`                     |
| Button text pressed state layer opacity | `md.comp.button.text.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` |
| Button text pressed label color         | `md.comp.button.text.pressed.label-text.color`    | `md.sys.color.primary`                     |
| Button text pressed icon color          | `md.comp.button.text.pressed.icon.color`          | `md.sys.color.primary`                     |

### Deprecated baseline tokens

The M3 specs include deprecated baseline token sets under the old per-style namespaces (`md.comp.elevated-button.*`, `md.comp.filled-button.*`, `md.comp.filled-tonal-button.*`, `md.comp.outlined-button.*`, `md.comp.text-button.*`). These use the legacy pattern where each color style was a separate component type. Key differences from the current tokens:

- Fixed container height of **40dp** (only the small size)
- Icon size of **18dp** (now 20dp in current tokens)
- Disabled container opacity of **0.12** (now 0.1 in current tokens)
- Outlined button label color was **Primary** (now On surface variant)
- Include **focus indicator** tokens (color, thickness, offset) not present in current token sets
- Include **dragged** state tokens (filled style only) not present in current token sets
- Include **surface tint layer** color token (elevated style only)

These deprecated tokens are retained for backwards compatibility. New implementations should use the current unified `md.comp.button.*` token namespace. See the [full baseline token tables](https://m3.material.io/m3/pages/common-buttons/specs#c305d304-a6c0-466a-a48c-8d0718a29ae2) in the M3 specs.

---

## Interaction States

All button states follow a consistent pattern: 1. Enabled, 2. Disabled, 3. Hovered, 4. Focused, 5. Pressed.

### Elevated button states

Elevated buttons rest at elevation level 1 and lose their elevation when disabled.

![Elevated button states.](https://lh3.googleusercontent.com/k3KL_ghDviZ5fS2RvT0syvaePH29s86o5P0jE8LI6lFibKmdKnksaSN6lu2V-l-M_oJwnYgUklArsWfgnJIM7LdR1_hvcQNhpuawRaWpdyle=s0)

![Toggle elevated button states.](https://lh3.googleusercontent.com/rvb5iQsP5fQ4x1Y8XXPVRYiQbpR96rc7TZ2L4jh6g2vUGhJ-eAAvhRCUg73TULYZhpDX9Px86LJ9SoLOOSlxfOwdvEfd51BXbsnXlNaHRKWi=s0)

### Filled button states

![Filled button states.](https://lh3.googleusercontent.com/gyZ9rwGehmJUfgjq-BCWsP_HDS721DJTGFdkiiG-WQg79ySqKFUDQhwu0kz6s5AkAafWrc3cwbk5gAm8VJm0EP-fzi5Ji4RpDnUoEtFRFf4=s0)

![Toggle filled button states.](https://lh3.googleusercontent.com/k-czt2XcdxC4BDdPtCvt06Ha0RJq7m2EzilHni13-eY0lalc8OYzyvurYhUJ5s_5CfyrBwN5Jq7407y7Kkii0OWHnaukL8O--VnF2DhY14eU=s0)

### Tonal button states

![Tonal button states.](https://lh3.googleusercontent.com/--GyrKMzdXH697yW1JYJRU-29ZFA3rvrAoqb6E3i9Snc2JMMI-SZ8a6L9j8JA6Du-RMFzvIDO0y_ZV6LrlUBd5MRRJYy8o1Dy4vVYgT-hXQ=s0)

![Toggle tonal button states.](https://lh3.googleusercontent.com/e2DkdnVIGe1kG0D1p9Jn0xNsBw15SNvPdAiduO3-Ignc7KICFjLA-Ecxy2n6o5IPtirv5oE_X0jMlcyd8MPwMcgsIzwAVRhEDyrkFThjoTU=s0)

### Outlined button states

The outlined button's container fill is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed.

![Outlined button states.](https://lh3.googleusercontent.com/mhc3SPkZyACY5TjcwGaGEvNSoZvVkdpfjf-l2-7sxbvUDROahw5M_g7P093GkOoimGqn34YEnLKVBMDAYCzc7W69UhQq6Jsm9sCQok2QxjfW=s0)

![Toggle outlined button states.](https://lh3.googleusercontent.com/P6KyONzwpVV9sjgYN7ZdyOD4FoLpsdgaZp7j12m6Ya6-pV7IZniIHo_3mStHAzR-lHwvMqqx8-fwYkq3-3AI3KrlaPXr9k1iXVdeRE_ltjI5Hg=s0)

### Text button states

The container is invisible at rest, so the label text color must always be recognizable from non-button text and elements. Text buttons have no toggle variant.

![Default text button style states.](https://lh3.googleusercontent.com/5SpJ9rRuJK-SMCI1434wzYB_RTXJ5wL_7IeY56p_NWxt5qEO_JSqFlaP1Isnd_8iUaThQDu_rdxS9K68fLvpK0hHZng_MfnLdTa1iBULlOV9=s0)

---

## Responsive / Adaptive Design

### Resizing

Button position and layout should adapt to the available screen size. The icon and label always stay centered and grouped together as the container width changes.

<table><tr>
<td><img src="https://lh3.googleusercontent.com/3KW8V16JAsM6Cftkf-BuF1NgPsqnPwsCbkaPR578JISH1whoSSSiUJqVOye4wObutCg-f2WVHfIQXnmkmiw4k_ByGfl3O-MprLgThuwmITQ=s0" /><br/>Compact window: buttons below content</td>
<td><img src="https://lh3.googleusercontent.com/6tk1fDAXbtRkIkd797NYOAVCfBrhOkWByXKAZ28KPaxvlPlUaK-n7v16EwYERfQV_5KxDRSn4D78Cz-rnO2QilJaunxsa8X8Q6MExjBCijgB=s0" /><br/>Large window: buttons beside content</td>
</tr></table>

<table><tr>
<td><img src="https://lh3.googleusercontent.com/zNJswsz2xhLFG6fewuWbTQrjT-0HKkv1BSSQCzxrtBXBUxvS8M8REWEraIYu83ydMC01PsWINNAAvOfJ8cTT_QK9CnmcKpp1qlT9PDF6EaX9DQ=s0" /><br/><b>Do:</b> Keep icon and label centered and grouped</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gmzxhh-46.png?alt=media&token=b91d80aa-1a8c-4b29-8d8b-5282f8f3251d=s0" /><br/><b>Don't:</b> Ungroup or anchor icon and label to opposite sides</td>
</tr></table>

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gn1q8h-47.png?alt=media&token=647e1fe7-a661-4c34-8771-07099ff4758a=s0" /><br/><b>Don't:</b> Stretch buttons into excessively long, flat shapes</td>
</tr></table>

### Presentation

Button size and placement can change as their parent container adapts for larger screens. Maintain the same element order between compact and expanded layouts for accessibility consistency.

![2 buttons scaling for different sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gn2wej-48.png?alt=media&token=765e8d57-6e78-4cc8-8877-0cd32b3b9d39=s0)

---

## Accessibility

### Color contrast

Enabled buttons must maintain a minimum **3:1 contrast ratio** with their surrounding background. For elevated, filled, and tonal styles, contrast is measured from the container surface. For outlined and text styles, contrast is measured from the label text color.

![Diagram of color contrast ratios.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmah4xmp9-1.png?alt=media&token=5db71bb4-7aa7-44a0-80e5-3500cbf19527=s0)

### 200% text size

Keep labels concise to prevent wrapping or truncation when the user enlarges text to 200%. On Android, labels should fit within two lines at 200% scale; if truncation occurs, provide an alternative way to access the action.

> **Caution:** At 200% text size, longer labels may wrap or truncate.

![200% text size with wrapped button text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8x27kbt-2.png?alt=media&token=4cf85c66-b195-41c0-85cd-f516c70f50b4=s0)

### Rapid clicks

On web, use a modified motion curve to prevent resonant animation effects caused by overlapping state layer animations from rapid successive clicks.

### Keyboard navigation

| Key            | Action                     |
| -------------- | -------------------------- |
| Tab            | Navigate focus to a button |
| Space or Enter | Activate the button        |

### Labeling elements

The accessibility label should match the visible label text (e.g. "Done", "Send", "Reply"). Additional contextual information can be appended when the visible text alone is ambiguous.

![Accessibility tags for text-only button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ghhzjt-4.png?alt=media&token=e25d75b4-2d6d-4532-b5e9-fdc04c79ed46=s0)

---

## M2 → M3 Differences

<table><tr>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5r6kn3n-2.png?alt=media&token=b7295c30-9c9d-44cf-80d2-a48f56668966=s0" /><br/>M2: Rectangular button shapes</td>
<td><img src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5r6n6xk-3-1p.png?alt=media&token=b30a4d13-9717-4af8-9f2d-fa83d864a0a9=s0" /><br/>M3: Round-cornered button shapes</td>
</tr></table>

| Aspect | M2                   | M3                                                                                                                       |
| ------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Color  | Basic color mappings | New mappings, dynamic color compatible; icons and labels share the same color; neutral text button no longer recommended |
| Icons  | Varied sizes         | Standard size now 20dp                                                                                                   |
| Shape  | Rectangular corners  | Fully rounded corners (default), with additional square shape option; multiple height options (XS through XL)            |
| Toggle | Not supported        | Toggle variant added (M3 Expressive) with shape morph on selection                                                       |
| Sizes  | Single size          | Five sizes: XS, S (default), M, L, XL                                                                                    |

### M3 Expressive update (May 2025)

The Expressive update introduced several additions to buttons:

- **Toggle functionality** — buttons can now act as binary selection controls
- **Color styles as configurations** — the five color styles (elevated, filled, tonal, outlined, text) are treated as configuration options rather than separate component types
- **Round and square shapes** — with shape morphing on press and on selection
- **Five sizes** — XS, S (default), M, L, XL
- **Updated padding** — 16dp recommended for small buttons (previously 24dp)

![4 button changes in the expressive update.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm35yfd18-2.png?alt=media&token=2eab9629-ed61-4e7f-baab-05539529d0c3=s0)

### Availability

| Type           | Resource                                                                                       | Status      |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------- |
| Design         | Design Kit (Figma)                                                                             | Available   |
| Implementation | Flutter, Jetpack Compose, Jetpack Compose Expressive, MDC-Android, MDC-Android Expressive, Web | Available   |
|                | Web: Expressive                                                                                | Unavailable |
