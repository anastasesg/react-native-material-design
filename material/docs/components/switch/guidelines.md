---
url: https://m3.material.io/components/switch/guidelines
lastmod: 2026-01-06
crawled_at: 2026-02-04T12:00:00.000Z
category: components
section: switch
page_type: guidelines
status: complete
---

# Switch

Switches toggle the selection of an item on or off.

![A switch in 2 states, off and on.](https://lh3.googleusercontent.com/x0AqjOgoDcYjaJyG017Y59vOzTxcqS5NfZ761rJ-Utb8JVw8_RZskFZTYAbBECIFqE23WBpO0Xufv97hXyAerK4lcsli48s_czxN65LlMLk=s0)

_Switches change settings and other options immediately_

## Usage

Switches are best used to adjust settings and other standalone options.

They make a binary selection:

- On and off
- True and false

The effects of a switch should start immediately, without needing to save.

Use switches to:

- Toggle a single item on or off
- Immediately activate or deactivate something

![Switch used in notification settings to turn on and off the "play over notifications" function.](https://lh3.googleusercontent.com/1tz8VDpVt3FDyf3v9iiqdxIEuIffJuOaXLSfHDYAN83CaPiKc_YZfO7KnZ2yVTmLNA-gmvxmdsHyXEjArew74BAk5HzKiM350ZagEXfzQ4qaWw=s0)

_Switches are commonly used on mobile to turn settings on or off_

Switches control binary options, not opposing ones. A binary option represents a single selection that's either on or off.

Opposing options are when only one option in a set can be selected at a time, like a list or map view. Use a connected button group instead.

![A connected button group with options of List View and Map View.](https://lh3.googleusercontent.com/jH1Tkfo_kEijiXDqUqQIT2VMLZB213Hl414Jrmsh6jr0o_QYlwgLsm_8ikjo_XqhgeRa4wI5FrbMcdpLLgCx33GAabL-wWRJaNJDLSyPs5aV=s0)

_Do: Use a connected button group to choose between opposing options_

![A switch with non-binary options of List View and Map View.](https://lh3.googleusercontent.com/muDDs8mxZm8vsI9Bu335VCwdRY6E9Yx8mEUNab4_4FlUdRbaNPSFJCfWKOHTEcH6qj6R8p_E0wTt9xfp3nrbvXx0k_NWqpJYp97ZkEAoiMz_2Q=s0)

_Don't: Avoid using switches to toggle between opposing options_

### Alternate selection controls

Checkboxes, radio buttons, and switches are the three main kinds of selection controls. They help people make choices, like selecting options or turning settings on and off.

- Use checkboxes to select multiple related options in a list.
- Use radio buttons to select a single option in a list.
- Use switches to select standalone or more verbose options in a list, like settings.

![2 checkboxes, 1 unchecked and 1 checked.](https://lh3.googleusercontent.com/xAewYZioxNc7YhmPjwIC4XEG7_8tdA6130j_66kfuFM3H3h2HH0wx8U1kVxPeNz4StMXWMJG0ICxNai-woryizyuiGfJyFBrvUfFqh2DrQ33=s0)

_Checkboxes_

![2 radio buttons, 1 in an enabled state, 1 in a disabled state.](https://lh3.googleusercontent.com/Xcgd1ZKjqsdww-in_mgrJ56JkF9t5rIVuJGByhtHWgjPDKPGYFRHlV_UU-HKcBCYbW3F9L9mZEwkmXlRl0JdLwUpTsklLQpiVfw_-dWEi80=s0)

_Radio buttons_

![Mobile screen with checkboxes to select list items and call to action button to update the list.](https://lh3.googleusercontent.com/EeKlgEcp1KJ-9NfC7YPlsc0sQITFitnLnF1iY76rHsZKNPmeu0J5-a3xlnpj_tPlVvoEuQjX2pVze8dqv2WknsVejVR5idvAltny8CMraed79w=s0)

_Do: Use checkboxes (not switches) to let people select one or more options from a list_

![Mobile screen with checkboxes to select list items and call to action switch to update the list.](https://lh3.googleusercontent.com/wjSLtGs-C59hMUplsvCnFm1IjCYlMNcNUGUsnKoR28RxhApBz0YhW6AlO257nPdJ48NIUTezejDl3h3B3ZbgE4iBHQPMdu39mDkcLZ2VGze3=s0)

_Don't: A switch can't replace a button. People expect a call to action to be a button, not a switch._

![Radio buttons used to select a language for a mobile app.](https://lh3.googleusercontent.com/RP-OY6cXjDCXhDkZfdNQmY4crSy5rLCujf8DCTUaNSByNPt1XJYvpWHOZm0d5hLprgl_wfU9YZBGoh8ciq38frIAqP64CddYsZWCLQ4tHGA=s0)

_Do: Use radio buttons (not switches) when only one item can be selected from a list_

![Mobile screen with switches to select list items and call to action button to update the list.](https://lh3.googleusercontent.com/qhcoEcCH8obBM4P2DNuKMOOKaOgdApSQW-0OZVSc5UD46Ttzdkb_GproXkVIIVsl7jOklP8-8RZf0EzaIOZTUhOi16ruTe4LpFgQwPDnrvLQqQ=s0)

_Don't: Avoid using a switch to select multiple options that require people to save. Switches should be immediate. Use checkboxes instead._

## Anatomy

![3 elements of a switch.](https://lh3.googleusercontent.com/3lI8U8eFaJEBDsf5YJz4e07h87cub5XTw2qWR3w7BbarbCWicdNE9AF4ewEp_r3qh_evjs105-t5KwM0OdO-ZEeC4-HFV75DIrHi3PyJE1-J=s0)

1. Track
2. Handle
3. Icon (optional)

### Icon (optional)

The switch handle can contain an optional icon.

Icons can be used to visually emphasize the switch's selection. The icon's meaning should be clear and unambiguous to help people understand whether the switch is on or off.

![2 switches, the unselected state icon is an X, and the selected state is a checkmark.](https://lh3.googleusercontent.com/n_YcGWfROt1o6Ig3SUMsoD2AJnR1ONaC0AjgVUR9CIQ0_zAlMNw-wWfpshgAv5mru4RBPlzTym7BIW8-QZy0ZJMGqXwQ-mMXWP8suAgNL19G=s0)

_Do: Use icons that clearly communicate whether the switch is on or off, such as an X and a checkmark_

![A switch's unselected handle icon is a moon and the selected state icon is a pencil.](https://lh3.googleusercontent.com/LPCQ-Do-7xjhcg4Q-ocCdWlGZiku8V4RY86JpOCxYReqXVAswVegZ-TLmgF7ogz6UjS_zysFsBwyASHQbI4urmMnrKpdXxV0EEq4p8922SLRGQ=s0)

_Don't: Avoid using more ambiguous or non-binary icons, such as a moon or edit icon_

### Label text

Switches should always be paired with an inline label describing what the switch controls when selected.

![Switch label text: 1. Permission manager, App has access to your data. 2. Camera access, app has access to your camera. 3. Show password.](https://lh3.googleusercontent.com/A3Tr_ujhshFdU05BqNPGYMK-n-IYTjRkYIMgLkKqGfjYI5H3uU5oMweusuojA6wu8Xzn9TWID_iSe30uoYweAvECisDP0YKVG-ZEGHKUaT4=s0)

_Do: Keep labels short and direct. A label should describe what the control does when the switch is on._

![On a mobile screen's privacy settings, 2 switches have "On" label text and checkmark icons. The last switch has "Off" label text and no icon.](https://lh3.googleusercontent.com/Yeafv6eDK5lXb6MUK2aXoRw6D8bo7TFoO62JYzQjQDdojRTeYEDf5iCU8M_MdA67qDGCoaqrAke1B0V_AQYSQy1ISTpT8kykUIKhjk2FvYcSzw=s0)

_Don't: Don't add label text into the switch; the font size would be too small to be accessible. Use an appropriate icon instead._

## Placement

Switches are often arranged in stacked layouts.

![Screen showing labels and stacked switches in varying on/off modes.](https://lh3.googleusercontent.com/ZsqrkLA9mtmq2b2QpUDR2rtnKj9uidOEDais9zRVYzpypNMDiPrcugFoM26TU2BfwIEU2f8ayFkOCJTuuor-EnkTfcRC5AhzhoeJl0_5QK3OBg=s0)

_Settings screens are common places to use switches_

## Behavior

A switch is successfully toggled when the handle slides to the other side of the track after an interaction.

When a person toggles a switch, its handle size changes and the corresponding action takes effect immediately.

The **on** state of the switch is indicated by a larger handle size.
