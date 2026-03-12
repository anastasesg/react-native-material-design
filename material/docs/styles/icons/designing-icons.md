---
url: https://m3.material.io/styles/icons/designing-icons
lastmod: 2025-12-01
crawled_at: 2026-02-02T00:00:00.000Z
category: styles
section: icons
page_type: null
status: complete
---

# Icons

Icons are small symbols to easily identify actions and categories

## Design principles

Icons are an essential element of any interface, packing an informative punch into a small form factor. They're designed to be simple, modern, friendly, and sometimes quirky. To ensure consistency and readability, their limited size means that each icon must strictly adhere to guidance while still expressing essential characteristics.

![Front view of boat icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2bczc-1.png?alt=media&token=032c792e-0a3c-465c-b47e-d15c12b4da31=s0)

_Do: Simplify icons for greater clarity and legibility_

![Boat image with sails, mast, and flag.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2blzh-2.png?alt=media&token=a13c9645-aefa-4ea0-b8b7-0a504772f518=s0)

_Don't: Don't be overly literal. Avoid complex icons._

![Use geometric, consistent shapes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2d7uy-3.png?alt=media&token=994cb99c-b8f7-4345-b832-849349e8d671=s0)

_Do: Make icons graphic and bold_

![Detailed thumbs-up icon with four horizontal sections and outlined lens.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2dh5s-4.png?alt=media&token=1b4bc994-eaf2-448c-85ef-3f65d1f04bb8=s0)

_Don't: Don't use delicate or loose organic shapes_

![Four icons with a consistent style.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2ejo7-5.png?alt=media&token=b2b0d4cc-3e7a-4c06-81f5-50cc86c2a7e1=s0)

_Do: Use and maintain a consistent visual style throughout one icon set_

![Four icons in different styles.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx2euq9-6.png?alt=media&token=1e67611c-724e-4f91-947b-19a3cf1dd3e8=s0)

_Don't: Avoid mixing styles for one icon set_

## Icon sizes and layout

### Standard (Baseline) icon size

Standard icons are displayed as 24dp x 24dp. For pixel-perfect accuracy, create icons for viewing at 100% scale.

![Icon at 100% scale on a 24dp grid.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm369d7g9-7.png?alt=media&token=972f8344-3074-4e99-aaf2-d231e6255bf1=s0)

_24dp grid at 100% scale_

![Icon at 1000% scale on a 24dp grid.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm369dcan-8.png?alt=media&token=a8e0ec81-f149-4890-bb44-eff93922ee11=s0)

_24dp grid at 1000% scale_

### Additional optical icon sizes

Icons support additional sizes: 20dp, 40dp, and 48dp, with 20dp primarily for desktop, dense layouts, and small scale visuals, and 40dp and 48dp optimized for display or headline type, plus larger screen sizes.

![Four document icons shown at increasing scales.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm369dv4v-9.png?alt=media&token=447c83aa-2075-4cae-916a-08147056a31c=s0)

_Supported icon sizes: 20dp, 24dp, 40dp, and 48dp_

### Standard (Baseline) icon layout

Icon content should remain inside of the **live area**, which is the region of an image that is unlikely to be hidden from view (such as an area where sidebars appear upon scrolling).

If additional visual weight is needed, content may extend into the padding between the live area and the **trim area** (the complete size of a graphic). No parts of the icon should extend outside of the trim area.

![A 24dp-by-24dp icon grid with the 20dp-by-20dp live area highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm369dzl1-10.png?alt=media&token=299a23d0-cce6-4931-8810-2bb266dc6d82=s0)

_Live area: Icon content is limited to the 20dp x 20dp live area, with 2dp of padding around the perimeter_

![A 24dp-by-24dp icon grid with the inner 2dp padding highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm369e1zn-11.png?alt=media&token=335a9fae-fd30-48eb-a388-6f72a2ac568d=s0)

_Padding: 2dp of padding surrounds the live area_

![Icon using live area.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3401e-12.png?alt=media&token=fead6db6-f4cd-4e61-a9a1-87db0a2ce9f6=s0)

_Do: Icon content is limited to the 20dp-x-20dp live area, with 2dp of padding around the perimeter_

![Icon using live area and trim area.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx34cuv-13.png?alt=media&token=bf5fd3b2-7a52-4387-ba82-6852d2b36f9e=s0)

_Caution: If additional visual weight is needed, content may extend into the padding between the live area and the trim area_

![Icon exceeding trim area.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx34lcd-14.png?alt=media&token=ea5ce383-7f66-4434-881a-2eb39c18a6ce=s0)

_Don't: No parts of the icon should extend outside of the trim area_

## Grid and keyline shapes

### Icon design template

If your design requires an icon that isn't covered by the over 2,000 variations in [Google Font's icon library](https://fonts.google.com/icons), you may want to create your own. [Download this 24dp icon grid and keyline template](https://goo.gle/icontemplates) (.zip file) to design custom icons in Adobe Illustrator.

_*This template is available under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html). By downloading this file, you agree to the [Google Terms of Service](https://policies.google.com/terms). The [Google Privacy Policy](https://policies.google.com/privacy) describes how data is handled in this service._

### Icon grid and keyline

The icon grid establishes clear rules for the consistent, but flexible, positioning of graphic elements.

Keyline shapes are the foundation of the grid. By using these core shapes as guidelines, you can maintain consistent visual proportions across system icons.

![A 24dp-by-24dp icon grid.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx35kts-15.png?alt=media&token=c34bcd58-cfc0-4890-8c0e-9f487c04fd3a=s0)

_Grid_

![A 24dp-by-24dp grid of foundational icon keylines: square, circle, vertical rectangle, horizontal rectangle.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx35sp3-16.png?alt=media&token=a9784dcc-6f0d-44b5-a320-bb32d42da31e=s0)

_24dp grid at 1000% scale_

![A 24dp-by-24dp grid of foundational icon keylines with the square keyline highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx376yn-17.png?alt=media&token=65a303ec-7c1e-46b4-9bf2-ad6edae31751=s0)

_Square height and width, 18dp_

![Add chart icon on square keyline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx37fhe-18.png?alt=media&token=69b521f5-27cb-4707-aaa7-c1d62591a611=s0)

_Icon drawn using square keyline_

![A 24dp-by-24dp grid of foundational icon keylines with the circle keyline highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx37ptr-19.png?alt=media&token=f4a8f6e2-e16b-4348-ac84-07837fda4212=s0)

_Circle diameter, 20dp_

![Globe icon on circle keyline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx37z44-20.png?alt=media&token=c9535b67-89fe-410d-859d-ec1842e9f766=s0)

_Icon drawn using circle keyline_

![A 24dp-by-24dp grid of foundational icon keylines with the vertical rectangle keyline highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx39wds-21.png?alt=media&token=195d395a-1172-49f2-bac2-fae8061ba460=s0)

_Vertical rectangle height, 20dp, and width, 16dp_

![Paper icon on vertical rectangle keyline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3a8pw-22.png?alt=media&token=4f27764c-4aca-4c1a-b21b-16ce3173f85e=s0)

_Icon drawn using vertical rectangle keyline_

![A 24dp-by-24dp grid of foundational icon keylines with the horizontal rectangle keyline highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3alru-23.png?alt=media&token=13005cd1-ee1c-4709-a8ed-53a24ca9b258=s0)

_Horizontal rectangle height, 16dp, and width, 20dp_

![Mail icon on horizontal rectangle keyline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3b1i3-24.png?alt=media&token=2005f9a1-618a-4c87-a07c-acc5cb1bd2d2=s0)

_Icon drawn using horizontal rectangle keyline_

![Icon grid including a folder icon aligning to the grid. X and Y placement coordinates are shown using integers.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3bcby-25.png?alt=media&token=75862a81-657f-4c7a-88f2-5c2aed6d43e8=s0)

_Do: Position icons "on pixel" within the icon grid_

![Icon grid including a folder icon misaligned to the grid with X and Y placement coordinates shown using decimals.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3bksk-26.png?alt=media&token=ef556e85-3cf0-4d01-880f-ddad0cbb09ea=s0)

_Don't: Don't place the icon on a coordinate that isn't "on pixel"_

## Icon metrics

### Anatomy

![Diagram of a calendar icon on a grid highlighting six different elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3d9om-27.png?alt=media&token=3ae5239d-b3bd-44bd-b92c-f6872564fbc0=s0)

- Corner
- Stroke terminal
- Counter stroke
- Stroke
- Counter area
- Bounding area

### Corners

Corner radii are 2dp by default. For the outlined style symbols, interior corners are square, not rounded. For shapes 2dp wide or less, stroke corners shouldn't be rounded.

For the rounded style symbols, both exterior and interior corner radii are rounded and for the sharp style symbols, both exterior and interior corners radii reduce from 2dp to 0dp.

![Credit card symbol placed on grid with 2dp rounded exterior corners highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3dna6-28.png?alt=media&token=aae12f28-2ca2-4c81-b18a-3ed9da248d19=s0)

_Exterior corners with 2dp corner radii_

![Credit card symbol placed on grid with 2dp linear interior corners highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3dwdw-29.png?alt=media&token=0d6202bd-02e9-4188-814b-4fc0fe95ff47=s0)

_Interior corners shouldn't be rounded_

![Document icon placed on grid with overly rounded corners highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3f41v-30.png?alt=media&token=051e089d-501f-4e36-99b9-9d3eb91d6c6b=s0)

_Caution: Overly round corners reduces the symbol's legibility_

!['Add more' icon placed on grid with inconsistent rounded corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3fctt-31.png?alt=media&token=f54893a2-b0de-4933-a501-27dbe2b0bb78=s0)

_Don't: Don't use inconsistent corner radii_

### Weight and stroke

The recommended stroke weight for icons is 2dp or the regular weight (400), which includes curves, angles, and both interior and exterior strokes. Material Symbols can provide a range of weights between thin (100) and bold (700).

![Regular stroke weight timer icon placed on a grid.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm369l0cr-32.png?alt=media&token=3fb937ef-2c18-43ee-83ad-caf8ffb8badb=s0)

_Timer icon at the regular stroke weight (400)_

![Weight timer symbols ranging from 100 to 700 weight.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3jtdy-33.png?alt=media&token=8174c2b0-0565-4d72-96b9-40995bfb6bad=s0)

_Timer symbol shown across a 100-700 weight range_

![Arrow symbol placed on a grid with arrowhead terminals trimmed to 45 degrees highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3k4tw-34.png?alt=media&token=873cde7b-7e08-46be-9031-3dc239226cd5=s0)

_Stroke terminal on an icon_

![Add circle symbol placed on grid with linear 2dp inner stroke highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm369l4wj-35.png?alt=media&token=739461d5-cdba-4b7f-bc47-c0421db2eaa8=s0)

_Counter stroke on an icon_

![Add chart icon placed on grid with consistent stroke weights and squared stroke terminals.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3kv5l-36.png?alt=media&token=fe12a4f0-7f85-446e-82c7-90d683decea7=s0)

_Use consistent stroke weights and squared stroke terminals_

![Add chart icon placed on grid showing inconsistent stroke weights and rounded stroke terminals.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3l5bt-37.png?alt=media&token=06df7c31-830f-48df-aa99-151bc7352124=s0)

_Don't use inconsistent stroke weights or rounded stroke terminals_

### Complex icon shapes

If an icon requires complex details, subtle adjustments can be made to improve its legibility. These adjustments are referred to as optical corrections. Any optical correction should use the geometric forms on which all other icons are based, without skewing or distorting those shapes.

![Paperclip icon on grid with adjusted 1.5dp stroke highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm369lb5k-38.png?alt=media&token=f1db08b8-c246-4954-a241-e99c5d0a0bab=s0)

_The paperclip icon uses 1.5dp of the possible 2dp stroke area to fit multiple curves within the 24dp x 24dp icon space_

![Ramen bowl icon on grid with adjusted 1.5dp stroke highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm369lesx-39.png?alt=media&token=0c59b53a-e06a-4379-81f7-844bd8d2104e=s0)

_The ramen bowl icon uses 1.5dp stroke and 2dp stroke together within the 24 x 24dp icon space_

![Building icon using flat shapes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3m6p4-40.png?alt=media&token=80188a2e-5b51-4c5f-9e2f-e8c98b799e40=s0)

_Do: Make icons face forward_

![Building icon in isometric perspective.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxx3mluw-41.png?alt=media&token=7c2aa469-55dc-40d8-a5a1-ba82abae36eb=s0)

_Don't: Don't tilt, rotate, or make icons appear dimensional_
