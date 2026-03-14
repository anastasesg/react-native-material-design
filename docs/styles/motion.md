# Motion — M3 Style Reference

> The motion system defines how UI elements animate, using springs for component-level motion and easing+duration for screen transitions.

Sources: [Motion Physics System](https://m3.material.io/styles/motion/overview/how-it-works) · [Specs](https://m3.material.io/styles/motion/overview/specs) · [Easing & Duration](https://m3.material.io/styles/motion/easing-and-duration/applying-easing-and-duration) · [Easing & Duration Tokens](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs) · [Applying Transitions](https://m3.material.io/styles/motion/transitions/applying-transitions) · [Transition Patterns](https://m3.material.io/styles/motion/transitions/transition-patterns)

---

## Motion Physics System

Introduced with M3 Expressive (May 2025), the motion physics system replaces the older easing+duration system for component-level animations. It uses **springs** to produce motion that feels natural, handles interruptions and gesture retargeting seamlessly, and stays consistent across a product.

The physics system is replacing the previous [easing and duration](#easing-and-duration-legacy-system) system, which remains available for transitions and as a fallback.

### Availability

| Platform        | Status                                  | How to apply                                       |
| --------------- | --------------------------------------- | -------------------------------------------------- |
| Jetpack Compose | Available                               | Use built-in components and spring tokens          |
| MDC-Android     | Available. Not yet added to components. | Use built-in spring tokens                         |
| Web             | Compatible                              | [View web conversion table](#web-conversion-table) |
| Flutter         | Unavailable                             | —                                                  |

On Jetpack Compose, 21 Material components use the motion physics system by default.

---

## Motion Schemes

A motion scheme defines the overall feel of a product's motion. M3 provides two presets — products can also create custom schemes.

**Expressive** is Material's opinionated scheme with significant overshoot and bounce. It should be used for most situations, particularly hero moments and key interactions.

**Standard** feels more functional with minimal bounce. It should be used for utilitarian, productivity-focused products.

Both schemes share **identical stiffness values**. Only the spatial damping ratio changes. Effects springs are identical between schemes (critically damped, ratio = 1.0 — no overshoot regardless of scheme).

The scheme is set at the **product level** and applied to all tokens. The scheme name is NOT part of the token itself — `md.sys.motion.spring.fast.spatial` resolves to different damping values depending on the active scheme. This makes it easy to swap schemes without changing token assignments in components.

### Customization Levels

1. **Level 1: Use a default motion scheme** — the expressive and standard schemes should be sufficient for all motion needs. On Jetpack Compose, components use these by default.
2. **Level 2: Create a custom motion scheme** — define a custom `MotionScheme` object returning different `AnimationSpec` for each property.
3. **Level 3: Per-element override** — use one scheme for most of the product but override the `CompositionLocal` for specific composables, screens, or elements.

---

## Springs

A spring is a combination of three attributes that control all motion behavior:

- **Stiffness** — how quickly the spring pulls toward the target (higher = snappier)
- **Damping** — how quickly oscillations die out (higher = less bounce)
- **Initial velocity** — starting velocity, typically injected from gesture fling velocity

Springs are versatile: one spring can apply to many situations (transitions, button effects, gestures), making motion feel consistent throughout the product. Springs handle interruptions and retargeting naturally — if a value is redirected mid-animation, the spring adjusts from its current position and velocity without discontinuity.

---

## Spring Tokens

Each scheme exposes **6 spring tokens** organized along two axes:

- **Type** (what property): spatial vs. effects
- **Speed** (how large/prominent the element): fast, default, slow

For example, to apply fast, spatial, expressive motion, call the "expressive" motion scheme, then use the token: `md.sys.motion.spring.fast.spatial`.

![A chart of the token structure. A scheme has 3 speeds. Each speed has a spatial token and an effects token.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8or28vc-5.png?alt=media&token=12806c6a-d624-4706-87bf-91cc61506aa1=s0)

### Type: Spatial vs. Effects

**Spatial** spring tokens animate properties that move, resize, or reshape something on screen: position (x, y), rotation, size (width, height), rounded corners, scale. These springs overshoot the final value and bounce into place (underdamped).

**Effects** spring tokens animate visual properties: color, opacity. No overshoot — critically damped (ratio = 1.0), smoothly settling at the target without bouncing past it. Identical between expressive and standard schemes.

### Speed: Fast, Default, Slow

Most motion should use **default** speed. Smaller elements may use fast, larger elements may use slow.

| Speed       | Use for                           | Spatial examples                                              | Effects examples                       |
| ----------- | --------------------------------- | ------------------------------------------------------------- | -------------------------------------- |
| **Fast**    | Small selection controls          | Switches, checkboxes, radio buttons, tab indicators, tooltips | Switch color, checkbox opacity         |
| **Default** | Medium-coverage components        | Bottom sheets, side sheets, navigation drawers/rails/bars     | Navigation rail active indicator color |
| **Slow**    | Full-screen or ambient animations | Full-screen layout changes                                    | Full-screen content refresh            |

Spring tokens work across device types. The spatial fast token will always be faster than default or slow, but the exact values differ between wearable, phone, and tablet to ensure motion feels appropriate in the context of the device.

### Token Values

The **spring composite** tokens combine damping and stiffness into a single token. The easing, duration, and path tokens are used by the legacy system.

**Spring**

| Name                                    | Token                                            | Value |
| --------------------------------------- | ------------------------------------------------ | ----- |
| Motion spring fast spatial damping      | `md.sys.motion.spring.fast.spatial.damping`      | 0.9   |
| Motion spring fast spatial stiffness    | `md.sys.motion.spring.fast.spatial.stiffness`    | 1400  |
| Motion spring fast effects damping      | `md.sys.motion.spring.fast.effects.damping`      | 1     |
| Motion spring fast effects stiffness    | `md.sys.motion.spring.fast.effects.stiffness`    | 3800  |
| Motion spring default spatial damping   | `md.sys.motion.spring.default.spatial.damping`   | 0.9   |
| Motion spring default spatial stiffness | `md.sys.motion.spring.default.spatial.stiffness` | 700   |
| Motion spring default effects damping   | `md.sys.motion.spring.default.effects.damping`   | 1     |
| Motion spring default effects stiffness | `md.sys.motion.spring.default.effects.stiffness` | 1600  |
| Motion spring slow spatial damping      | `md.sys.motion.spring.slow.spatial.damping`      | 0.9   |
| Motion spring slow spatial stiffness    | `md.sys.motion.spring.slow.spatial.stiffness`    | 300   |
| Motion spring slow effects damping      | `md.sys.motion.spring.slow.effects.damping`      | 1     |
| Motion spring slow effects stiffness    | `md.sys.motion.spring.slow.effects.stiffness`    | 800   |

> The published damping values (0.9 for spatial, 1.0 for effects) represent the **Standard** scheme. The Expressive scheme uses the same stiffness but a lower spatial damping ratio (~0.6, estimated from the web conversion table), producing significantly more overshoot and bounce. The exact Expressive ratio is not published in the spec — it should be verified against the [Jetpack Compose MotionScheme source](https://developer.android.com/reference/kotlin/androidx/compose/material3/MotionScheme).

### Motion Path

| Name        | Token                | Value  |
| ----------- | -------------------- | ------ |
| Motion path | `md.sys.motion.path` | Linear |

Motion paths are linear — elements move in straight lines between positions, not along curves.

### Web Conversion Table

Pre-computed cubic-bezier approximations for platforms that can't use springs natively. These reveal the behavioral differences between schemes:

| Spring                     | Curve                    | Duration |
| -------------------------- | ------------------------ | -------- |
| Expressive fast spatial    | `0.42, 1.67, 0.21, 0.90` | 350ms    |
| Expressive default spatial | `0.38, 1.21, 0.22, 1.00` | 500ms    |
| Expressive slow spatial    | `0.39, 1.29, 0.35, 0.98` | 650ms    |
| Expressive fast effects    | `0.31, 0.94, 0.34, 1.00` | 150ms    |
| Expressive default effects | `0.34, 0.80, 0.34, 1.00` | 200ms    |
| Expressive slow effects    | `0.34, 0.88, 0.34, 1.00` | 300ms    |
| Standard fast spatial      | `0.27, 1.06, 0.18, 1.00` | 350ms    |
| Standard default spatial   | `0.27, 1.06, 0.18, 1.00` | 500ms    |
| Standard slow spatial      | `0.27, 1.06, 0.18, 1.00` | 750ms    |
| Standard fast effects      | `0.31, 0.94, 0.34, 1.00` | 150ms    |
| Standard default effects   | `0.34, 0.80, 0.34, 1.00` | 200ms    |
| Standard slow effects      | `0.34, 0.88, 0.34, 1.00` | 300ms    |

Expressive spatial curves have `y1 > 1` (e.g. 1.67), indicating significant overshoot. Standard spatial curves have `y1 ≈ 1.06`, indicating minimal overshoot. Effects curves are identical between schemes.

### Choosing the Right Token

1. **What property?** Position, size, rotation, corners, scale → **spatial**. Opacity, color → **effects**.
2. **How big is the element?** Small selection control → **fast**. Medium-coverage component → **default**. Full-screen → **slow**.
3. **Override needed?** Specific components can override the active scheme (e.g., use standard springs on a single component in an otherwise expressive app).

---

## Easing and Duration (Legacy System)

> The M3 spec classifies easing, duration, and path tokens as **legacy**. The spring composite tokens are the primary system. Easing and duration are still used for **screen transitions** (which haven't migrated to springs yet) and as a fallback for teams that haven't adopted M3 Expressive.

### Suggested Easing and Duration Pairs

Sensible defaults that work for most transitions:

| Easing                | Duration | Transition type         |
| --------------------- | -------- | ----------------------- |
| Emphasized            | 500ms    | Begin and end on screen |
| Emphasized decelerate | 400ms    | Enter the screen        |
| Emphasized accelerate | 200ms    | Exit the screen         |
| Standard              | 300ms    | Begin and end on screen |
| Standard decelerate   | 250ms    | Enter the screen        |
| Standard accelerate   | 200ms    | Exit the screen         |

### Easing

In the physical world, objects don't start or stop instantaneously. Transitions without easing look stiff and mechanical; transitions with easing appear natural. M3 easing (compared to M2) is more expressive — transitions have snappy takeoffs and very soft landings, with slightly longer durations to avoid abruptness.

#### Choosing an Easing Set

The **Emphasized easing set** captures the expressive M3 style and is recommended for most transitions.

The **Standard easing set** can be used for small utility-focused transitions that need to be quick. Standard is also a fallback for platforms that don't support Emphasized easing (iOS and Web), since the full Emphasized curve is a two-segment SVG path only natively supported on Android via `PathInterpolator`.

#### Choosing an Easing Type

Easing type is chosen based on how the element moves in relation to the screen:

- **Begin and end on screen** → **Emphasized** easing. Speeds up quickly and comes to a gentle rest, emphasizing the end of the transition.
- **Enter the screen** → **Emphasized decelerate**. Begins at peak velocity, then decelerates to a gentle rest.
- **Exit the screen permanently** → **Emphasized accelerate**. Begins at rest, ends at peak velocity. Ending at peak velocity implies the exiting component cannot be retrieved.
- **Exit the screen temporarily** → **Emphasized** easing. Ends at rest just off screen, implying the component can be retrieved.

### Easing Tokens

#### Emphasized Easing Set

| Info/Platform | Emphasized                                                                                         | Emphasized decelerate                        | Emphasized accelerate                        |
| ------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| Token         | `md.sys.motion.easing.emphasized`                                                                  | `md.sys.motion.easing.emphasized.decelerate` | `md.sys.motion.easing.emphasized.accelerate` |
| Value         | `M 0,0 C 0.05, 0, 0.133333, 0.06, 0.166666, 0.4 C 0.208333, 0.82, 0.25, 1, 1, 1`                   | `cubic-bezier(0.05, 0.7, 0.1, 1)`            | `cubic-bezier(0.3, 0, 0.8, 0.15)`            |
| Android       | `pathInterpolator(M 0,0 C 0.05, 0, 0.133333, 0.06, 0.166666, 0.4 C 0.208333, 0.82, 0.25, 1, 1, 1)` | `PathInterpolator(0.05f, 0.7f, 0.1f, 1f)`    | `PathInterpolator(0.3f, 0f, 0.8f, 0.15f)`    |
| CSS           | N/A (Use Standard as a fallback)                                                                   | `cubic-bezier(0.05, 0.7, 0.1, 1.0)`          | `cubic-bezier(0.3, 0.0, 0.8, 0.15)`          |
| Flutter       | `easeInOutCubicEmphasized`                                                                         | `Cubic(0.05, 0.7, 0.1, 1.0)`                 | `Cubic(0.3, 0.0, 0.8, 0.15)`                 |
| iOS           | N/A (Use Standard as a fallback)                                                                   | `ControlPoints:0.05f:0.7f:0.1f:1.0f`         | `ControlPoints:0.3f:0.0f:0.8f:0.15f`         |

#### Standard Easing Set

| Info/Platform | Standard                             | Standard decelerate                        | Standard accelerate                        |
| ------------- | ------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| Token         | `md.sys.motion.easing.standard`      | `md.sys.motion.easing.standard.decelerate` | `md.sys.motion.easing.standard.accelerate` |
| Value         | `cubic-bezier(0.2, 0, 0, 1)`         | `cubic-bezier(0, 0, 0, 1)`                 | `cubic-bezier(0.3, 0, 1, 1)`               |
| Android       | `PathInterpolator(0.2f, 0f, 0f, 1f)` | `PathInterpolator(0f, 0f, 0f, 1f)`         | `PathInterpolator(0.3f, 0f, 1f, 1f)`       |
| CSS           | `cubic-bezier(0.2, 0.0, 0, 1.0)`     | `cubic-bezier(0, 0, 0, 1)`                 | `cubic-bezier(0.3, 0, 1, 1)`               |
| Flutter       | `Cubic(0.2, 0.0, 0, 1.0)`            | `Cubic(0, 0, 0, 1)`                        | `Cubic(0.3, 0, 1, 1)`                      |
| iOS           | `ControlPoints:0.2f:0.0f:0.0f:1.0f`  | `ControlPoints:0.0f:0.0f:0.0f:1.0f`        | `ControlPoints:0.3f:0.0f:1.0f:1.0f`        |

#### Legacy & Linear

| Name              | Token                                    | Value                          |
| ----------------- | ---------------------------------------- | ------------------------------ |
| Legacy            | `md.sys.motion.easing.legacy`            | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Legacy accelerate | `md.sys.motion.easing.legacy.accelerate` | `cubic-bezier(0.4, 0, 1, 1)`   |
| Legacy decelerate | `md.sys.motion.easing.legacy.decelerate` | `cubic-bezier(0, 0, 0.2, 1)`   |
| Linear            | `md.sys.motion.easing.linear`            | `cubic-bezier(0, 0, 1, 1)`     |

### Duration

Transitions shouldn't be jarringly fast or so slow that users feel as though they're waiting. The right combination of duration and easing produces smooth and responsive transitions.

#### Choosing a Duration

- **Transition size**: small area → short duration, large area → long duration. Scaling with area gives consistent perceived speed.
- **Enter vs. exit**: enter transitions get longer durations (draw attention to new content), exit transitions are shorter (get out of the way of the user's next task).
- **Extra long**: rare — reserved for ambient transitions like carousel auto-advance, not triggered by user input.

#### Duration Tokens

**Short** — small, utility-focused transitions:

| Token                           | Value |
| ------------------------------- | ----- |
| `md.sys.motion.duration.short1` | 50ms  |
| `md.sys.motion.duration.short2` | 100ms |
| `md.sys.motion.duration.short3` | 150ms |
| `md.sys.motion.duration.short4` | 200ms |

**Medium** — transitions that traverse a medium area of the screen:

| Token                            | Value |
| -------------------------------- | ----- |
| `md.sys.motion.duration.medium1` | 250ms |
| `md.sys.motion.duration.medium2` | 300ms |
| `md.sys.motion.duration.medium3` | 350ms |
| `md.sys.motion.duration.medium4` | 400ms |

**Long** — large, expressive transitions, often paired with Emphasized easing:

| Token                          | Value |
| ------------------------------ | ----- |
| `md.sys.motion.duration.long1` | 450ms |
| `md.sys.motion.duration.long2` | 500ms |
| `md.sys.motion.duration.long3` | 550ms |
| `md.sys.motion.duration.long4` | 600ms |

**Extra long** — rare ambient transitions above 600ms, usually without user input:

| Token                                | Value  |
| ------------------------------------ | ------ |
| `md.sys.motion.duration.extra-long1` | 700ms  |
| `md.sys.motion.duration.extra-long2` | 800ms  |
| `md.sys.motion.duration.extra-long3` | 900ms  |
| `md.sys.motion.duration.extra-long4` | 1000ms |

---

## Transition Patterns

M3 defines six transition patterns. These currently use the **legacy easing+duration system**, not springs. They will eventually be updated to use the motion physics system.

### Principles of Good Transitions

1. **Follow accessibility settings** — use subtle fades instead of intense sliding/scaling when reduced motion is enabled; disable decorative effects like parallax or shape morphing.
2. **Be consistent** — apply the same transition type for the same navigation pattern across the product.
3. **Use stable layouts** — use skeleton loaders so elements don't shift or pop in during loading.
4. **Avoid jump cuts** — instant screen swaps disorient users. Animated transitions help them understand spatial relationships. (Exception: jump cuts may be acceptable in pure-efficiency contexts like opening a menu in a productivity app.)
5. **Maintain a coherent spatial model** — transitions should reinforce where things are: content that slides left implies more content to the right, a drawer from the left implies an off-screen location.
6. **Use unified direction** — group elements and move them along a primary axis. Don't animate many persistent elements independently; the various moving parts are distracting.
7. **Employ clean sequential fades** — fully fade out content before fading new content in. Avoid crossfades where partially transparent elements overlap, creating messy frames. If a crossfade is unavoidable, keep it quick and hide it during the fastest part of the transition. Don't slowly fade components on top of other content as they enter or exit.
8. **Keep a simple style** — transitions are frequent and primarily help users accomplish a task. Don't use overt style effects like bouncy springs on screen navigation.

### 1. Container Transform

Seamlessly transforms an element to show more detail by animating a **persistent element** (container shape, hero image) to connect start and end states.

- **Used with**: cards, lists, image galleries, search boxes, sheets, FABs, chips
- **Character**: creates the strongest relationship between elements. Most expressive and dramatic pattern — reserve for hero moments and shallow hierarchies where you expand an element for more detail then collapse it.
- Can operate **between full-screen views** (card → full detail page, list item → detail, search box → results) or **within a screen** (search bar expanding, FAB → expanded sheet).

<table><tr>
<td><b>Do:</b> A container transform creates a clear connection between the thumbnail and expanded image, making this hero transition more expressive.</td>
<td><b>Don't:</b> Don't use container transform in apps with deep hierarchies — the motion becomes excessive. The expressive style doesn't fit utility-focused navigation.</td>
</tr></table>

- Don't use forward and backward transitions on hero moments like opening a photo memory — use container transform instead.
- [UX Research on container transform benefits](https://material.io/blog/motion-research-container-transform)

### 2. Forward and Backward

Horizontal slide for navigating between consecutive hierarchy levels (inbox → thread → message).

- **Used with**: lists, cards, buttons, links
- **Platform differences**:
  - **Android**: fade as screens slide (reduces total motion — screens don't slide the full device width)
  - **iOS**: parallax effect (background slides slower than foreground)
- **Guidance**: use platform defaults. Don't use container transform for frequent hierarchical navigation — it becomes excessive and requires custom implementation.

### 3. Lateral

Full-width horizontal slide for peer content at the same hierarchy level.

- **Used with**: tabs, carousels, image galleries
- **Character**: no fade or parallax — elements group and slide in unison, creating a strong peer relationship and implying swipe gesture support.

<table><tr>
<td><b>Do:</b> A tab component uses a lateral transition type.</td>
<td><b>Caution:</b> Fading content as it slides makes the peer relationship and swipe gesture less obvious. The style also may be confused with a forward and backward transition.</td>
</tr></table>

- **Don't** use for hierarchical navigation (implies equal peer relationship, excessive motion for high-frequency transitions).
- **Don't** use for top-level destinations (conflicts with carousel and list item swipe gestures).

### 4. Top Level

Quick sequential fade between unrelated top-level destinations.

- **Used with**: navigation bar, navigation rail, navigation drawer
- **Character**: intentionally does NOT create a connection between screens — no grouping, no persistent elements. Screens are unrelated.
- The exiting screen quickly fades out, then the entering screen fades in. Sequential, not crossfade.

<table><tr>
<td><b>Do:</b> A top level transition type is used with a navigation bar, rail and drawer.</td>
<td><b>Don't:</b> Don't use a lateral transition to move between top level destinations. The gesture conflicts with carousel and list item gestures.</td>
</tr></table>

### 5. Enter and Exit

Introduces or removes a component on the screen. Two sub-categories:

#### Within Screen Bounds

- **Used with**: FABs, dialogs, menus, snackbars, time pickers, tooltips
- **Android**: expand/collapse along the x or y axis. Scale and z-axis motion are avoided (they imply elevation change, which doesn't match M3's reduced elevation model).
- **iOS**: uniformly scale on enter, fade out on exit.
- Enter direction is informed by proximity to screen edge — components expand **away from the nearest device edge** (menu at top expands downward, snackbar at bottom expands upward).

#### Beyond Screen Bounds

- **Used with**: app bars, banners, navigation bar/rail/drawer, sheets
- **Android**: expand/collapse along x or y axis as they slide on/off screen. This shape animation emphasizes the component's form.
- **iOS**: slide on/off screen without changing shape.
- **Coplanar sheets**: side sheets can enter at the same elevation as main content, shrinking the available content area rather than overlaying.
- **Scroll-driven**: app bars and navigation bars can slide off/on based on scroll gesture to free up browsing space.
- Enter/exit direction establishes a coherent **spatial model**: notifications from top (implies pull-down drawer), nav drawer from left (shows off-screen location), bottom sheet from bottom (easiest to reach).

**Don't** use enter/exit for navigating hierarchical screens — sliding the full height is excessive and creates unclear screen relationships.

### 6. Skeleton Loaders

Transitions from a temporary loading state to a fully loaded UI.

- Skeleton loaders are UI abstractions that hint at where content will appear, stabilizing layout during loading.
- Subtle **pulsing opacity animation** starting from top-left, sweeping to bottom-right, indicating indeterminate progress.
- Once loaded, content **quickly fades in on top** of the skeleton.
- Used in combination with other transition patterns to reduce perceived latency.

---

## Accessibility

The transitions spec requires respecting the platform's **reduced motion** setting:

- Use subtle **fades** instead of intense sliding or scaling animations
- **Disable** decorative effects like parallax or shape morphing
