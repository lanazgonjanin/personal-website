# Personal Portfolio Design System

## 1. Purpose and design principles

This system defines the visual and interaction language for a personal developer portfolio. It should combine engineering precision with editorial creativity: structured enough to communicate technical depth, but composed with the rhythm and personality of a well-designed publication.

The default experience is light mode. Dark mode is a complementary, deliberately tuned theme rather than an inversion.

### Language convention

All user-facing website content must use Canadian English. This requirement applies to navigation, headings, descriptions, project summaries, labels, metadata, alternative text, captions, error messages, and all future content.

Use these spellings consistently:

- `organization`, `organize`, and `organized`
- `realize`, `recognize`, and `optimize`
- `colour`, `favourite`, and `behaviour`
- `centre` and `travelling`

Apply the same patterns to related forms where applicable, such as `organizing`, `optimization`, `colours`, `centred`, and `traveller`. Do not rename code identifiers, CSS custom properties, package names, API properties, framework terminology, file paths, or other implementation-specific strings when doing so could affect functionality. Established proper names and official titles retain their authoritative spelling.

### Core principles

1. **Content creates the composition.** Choose layouts according to the story being told. A featured case study may span the page, while smaller projects may appear as a compact index or annotated list. Do not force unrelated content into identical cards.
2. **Typography carries the identity.** Use scale, weight, line length, and the contrast between Geist and Newsreader to create hierarchy before adding decoration.
3. **Precision earns personality.** Grids, labels, diagrams, and numerical details should be accurate and meaningful. Personality should come from editorial choices, concise writing, and a few restrained pink accents—not arbitrary technical ornament.
4. **Whitespace is structural.** Empty space should separate ideas, establish pacing, and make important work feel considered. It is not leftover space to fill.
5. **Visualisation must explain.** A mathematical, computer-vision, or robotics-inspired visual belongs only when it communicates a genuine idea, process, dataset, or personal interest.
6. **Interaction confirms intent.** Motion and state changes should clarify hierarchy, affordance, progress, or cause and effect. Static content must remain complete and understandable without animation.
7. **Accessibility is a design constraint.** Semantic structure, readable contrast, keyboard operation, visible focus, touch targets, zoom support, and reduced motion are required from the first implementation.

### Visual character

- Professional, calm, modern, literate, and technically credible.
- Editorial asymmetry over rigid dashboard symmetry.
- Fine rules, deliberate alignment, and clear typographic hierarchy over shadows and effects.
- Mostly neutral surfaces with blue as the primary action colour, green as a technical/structural colour, and pink as a rare expressive accent.
- Corners should feel precise rather than pill-heavy: use small-to-medium radii, reserving full pills for tags and compact status controls.

---

## 2. Colour system

Implement colours as semantic CSS custom properties. Components must consume semantic tokens such as `--color-text-primary`, not raw palette values. Raw values below are the source of truth.

### Light mode (default)

| Token | Value | Intended use |
| --- | --- | --- |
| `--color-bg` | `#F5F7FA` | Page background |
| `--color-surface` | `#FFFFFF` | Raised or isolated content surfaces |
| `--color-surface-subtle` | `#EDF1F5` | Quiet grouped regions, code blocks, diagram fields |
| `--color-surface-hover` | `#E7EDF2` | Neutral hover background |
| `--color-text-primary` | `#1D2433` | Main text and headings |
| `--color-text-secondary` | `#536171` | Supporting copy, captions, metadata |
| `--color-text-tertiary` | `#6C7886` | Nonessential labels; never for critical content |
| `--color-border` | `#C9D3DD` | Standard borders and rules |
| `--color-border-strong` | `#95A5B5` | Emphasised dividers and control boundaries |
| `--color-blue` | `#3F6E8C` | Navigation, primary interactions, key highlights |
| `--color-blue-hover` | `#315A75` | Blue hover/pressed emphasis |
| `--color-blue-subtle` | `#DCE8EF` | Selected rows, blue diagram regions, quiet highlights |
| `--color-green` | `#4E8B84` | Timeline, secondary details, technical diagrams |
| `--color-green-strong` | `#356F69` | Green text or small marks requiring stronger contrast |
| `--color-green-subtle` | `#DCEBE8` | Green diagram regions and secondary selected states |
| `--color-pink` | `#E28AA8` | Small accents, selected details, restrained personality |
| `--color-pink-strong` | `#A94E70` | Pink text/icons that require readable contrast |
| `--color-pink-subtle` | `#F7E2E9` | Small selected-state or annotation backgrounds |
| `--color-focus` | `#245F8A` | Keyboard focus ring |
| `--color-danger` | `#B44242` | Errors and destructive actions |
| `--color-success` | `#2F7168` | Success messaging |
| `--color-selection-bg` | `#C9DDE9` | Text selection background |
| `--color-selection-text` | `#17202D` | Text selection foreground |

Do not use the base pink (`#E28AA8`) or base green (`#4E8B84`) for small body text on the page background. Use their `strong` variants when the colour carries textual meaning.

### Dark mode

The dark theme uses layered blue-charcoal surfaces. It should retain hue and depth instead of collapsing to pure black and white.

| Token | Value | Intended use |
| --- | --- | --- |
| `--color-bg` | `#111821` | Page background |
| `--color-surface` | `#18232E` | Raised or isolated content surfaces |
| `--color-surface-subtle` | `#202E3A` | Grouped regions, code blocks, diagram fields |
| `--color-surface-hover` | `#273744` | Neutral hover background |
| `--color-text-primary` | `#EDF2F6` | Main text and headings |
| `--color-text-secondary` | `#B5C1CC` | Supporting copy, captions, metadata |
| `--color-text-tertiary` | `#91A0AE` | Nonessential labels |
| `--color-border` | `#344554` | Standard borders and rules |
| `--color-border-strong` | `#526879` | Emphasised dividers and control boundaries |
| `--color-blue` | `#78A9C7` | Navigation, primary interactions, key highlights |
| `--color-blue-hover` | `#9BC3DA` | Blue hover/pressed emphasis |
| `--color-blue-subtle` | `#213B4C` | Selected rows and quiet highlights |
| `--color-green` | `#79B8AF` | Timeline, secondary details, technical diagrams |
| `--color-green-strong` | `#9ACFC7` | High-emphasis green text or marks |
| `--color-green-subtle` | `#203D3B` | Green diagram regions and selected states |
| `--color-pink` | `#EE9FBA` | Small accents and selected details |
| `--color-pink-strong` | `#F4BDD0` | High-emphasis pink text or icons |
| `--color-pink-subtle` | `#482B38` | Small selected-state or annotation backgrounds |
| `--color-focus` | `#9CCDEB` | Keyboard focus ring |
| `--color-danger` | `#FF9A9A` | Errors and destructive actions |
| `--color-success` | `#8ED0C5` | Success messaging |
| `--color-selection-bg` | `#315A70` | Text selection background |
| `--color-selection-text` | `#F5F8FA` | Text selection foreground |

### Colour application rules

- Normal body text must meet a minimum contrast ratio of **4.5:1** against its background. Large text (at least `24px` regular or `18.66px` bold) must meet **3:1**.
- UI boundaries, focus indicators, icons conveying state, and meaningful chart marks must meet **3:1** against adjacent colours.
- Never communicate state with colour alone. Pair colour with text, shape, pattern, position, or an icon.
- Prefer a border or background shift to a large drop shadow. If elevation is necessary, use `0 8px 24px rgb(29 36 51 / 8%)` in light mode and `0 8px 24px rgb(0 0 0 / 24%)` in dark mode.
- Pink should occupy no more than roughly **5%** of a typical viewport and should not become the dominant action colour.
- Technical diagrams should use blue for primary entities/paths, green for secondary entities/paths, neutral grey for context, and pink only for a selected or exceptional point.

---

## 3. Typography

### Font families

| Role | Family | Fallback stack | Use |
| --- | --- | --- | --- |
| Sans | Geist | `"Geist", "Helvetica Neue", Arial, sans-serif` | Body, navigation, project descriptions, UI, most headings |
| Serif | Newsreader | `"Newsreader", Georgia, "Times New Roman", serif` | Selected section headings, quotations, editorial display text |
| Mono | Geist Mono | `"Geist Mono", "SFMono-Regular", Consolas, monospace` | Code, metadata, technical labels, dates, measurements |

Load only the weights actually used. Initial target weights are Geist `400`, `500`, `600`, `700`; Newsreader `400`, `500`, `600` plus italic `400`; Geist Mono `400`, `500`. Use `font-display: swap` or the equivalent Next.js font behaviour.

### Responsive type scale

Use fluid sizes with `clamp()` where the range spans breakpoints.

| Token | Size | Line height | Weight | Typical use |
| --- | --- | --- | --- | --- |
| `--text-display` | `clamp(3rem, 7vw, 6.75rem)` | `0.94` | `600` sans or `500` serif | Homepage statement; one per page |
| `--text-h1` | `clamp(2.5rem, 5vw, 5rem)` | `0.98` | `600` | Case-study title |
| `--text-h2` | `clamp(2rem, 3.5vw, 3.75rem)` | `1.04` | `600` sans or `500` serif | Major section heading |
| `--text-h3` | `clamp(1.5rem, 2.2vw, 2.25rem)` | `1.15` | `600` | Project or subsection heading |
| `--text-h4` | `clamp(1.25rem, 1.6vw, 1.5rem)` | `1.25` | `600` | Small section heading |
| `--text-lead` | `clamp(1.125rem, 1.4vw, 1.375rem)` | `1.55` | `400` | Introductory copy |
| `--text-body` | `1rem` | `1.65` | `400` | Default body copy |
| `--text-body-small` | `0.875rem` | `1.55` | `400` | Supporting copy |
| `--text-label` | `0.75rem` | `1.4` | `500` mono | Labels and metadata |
| `--text-code` | `0.875rem` | `1.6` | `400` mono | Code and technical output |

### Typographic rules

- Keep body copy between **50 and 72 characters** per line; use `max-width: 68ch` as the normal reading measure.
- Keep lead copy at `max-width: 58ch`; keep large display copy around `10–16ch` when possible.
- Use `text-wrap: balance` for headings and `text-wrap: pretty` for prose where supported.
- Use slightly tightened tracking (`-0.02em` to `-0.04em`) only for headings `32px` and larger. Body tracking remains normal.
- Mono labels may use `0.04em` tracking and uppercase only for very short labels. Never set paragraphs in uppercase or mono.
- Use Newsreader selectively: normally one editorial moment per viewport or section, not every heading.
- Underline prose links. Do not rely on colour alone to identify inline links.
- Avoid orphaned one-word heading lines where editorial control is possible.

---

## 4. Spacing and layout

### Spacing scale

Use a `4px` base unit and the following named scale. Prefer these values over one-off spacing.

| Token | Value |
| --- | ---: |
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `24px` |
| `--space-6` | `32px` |
| `--space-7` | `48px` |
| `--space-8` | `64px` |
| `--space-9` | `96px` |
| `--space-10` | `128px` |
| `--space-11` | `160px` |

Component spacing should generally use `8–32px`. Section spacing should use `clamp(64px, 10vw, 160px)` depending on content density.

### Page container and grid

- Maximum content width: `1440px`.
- Reading-width container: `760px` maximum.
- Inline page padding: `20px` below `640px`, `32px` from `640px`, `48px` from `1024px`, and `64px` from `1440px`.
- Desktop grid: **12 columns**, `24px` gutters.
- Tablet grid: **8 columns**, `20px` gutters.
- Mobile grid: **4 columns**, `16px` gutters.
- Full-bleed backgrounds may span the viewport; their content must remain aligned to the page container.

Asymmetry should still snap to the grid. Examples include a heading spanning columns `1–7` with supporting text on `9–12`, or a project visual spanning `1–8` with metadata on `10–12`. Do not offset elements by arbitrary pixels solely to appear creative.

### Shape and border tokens

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | `4px` | Code chips, compact controls |
| `--radius-md` | `8px` | Buttons, images, standard surfaces |
| `--radius-lg` | `16px` | Large media or featured surfaces |
| `--radius-full` | `999px` | Tags, status dots, theme toggle only |
| `--border-thin` | `1px` | Standard rules and controls |
| `--border-strong` | `2px` | Focus-adjacent emphasis or selected items |

Avoid stacking multiple rounded containers. A section should not be a rounded panel containing a grid of rounded panels unless the information hierarchy genuinely requires both levels.

---

## 5. Responsive breakpoints

Design mobile-first and use content-driven adjustments. These are implementation boundaries, not device labels.

| Name | Minimum width | Primary changes |
| --- | ---: | --- |
| Base | `0px` | 4-column grid, single-column reading flow, compact navigation |
| `sm` | `640px` | Increased page padding, selected two-column arrangements |
| `md` | `768px` | 8-column grid, expanded project metadata, tablet navigation |
| `lg` | `1024px` | 12-column grid, full navigation, major asymmetric compositions |
| `xl` | `1280px` | Larger gutters and editorial offsets |
| `2xl` | `1536px` | Content remains capped at `1440px`; whitespace expands |

### Responsive behaviour

- Never reduce body text below `16px` to preserve a desktop arrangement.
- Stack project media, summary, and metadata in that order on narrow screens.
- Horizontal diagrams must reflow, become scrollable with an accessible instruction, or provide an equivalent simplified view. They must not be clipped.
- Touch targets must be at least `44 × 44px`, even when the visible icon is smaller.
- At `200%` browser zoom, content and controls must reflow without loss of information or two-dimensional page scrolling, except for intrinsically two-dimensional content such as code and diagrams.
- Do not hide substantive content on mobile. Reorder or disclose it accessibly instead.

---

## 6. Navigation

### Desktop navigation

- Place the identity/home link at the inline start and primary destinations at the inline end.
- Recommended destinations: `Work`, `About`, `Notes`, and `Contact`. Only include routes that have real content.
- Height: `72px`; align content to the page grid.
- Default background: page background with no shadow. A sticky state may add a `1px` bottom border and an opaque or near-opaque theme surface; avoid glass blur as the primary treatment.
- Use Geist `14px/1`, weight `500`.
- Active page: primary text plus a `2px` blue underline or clearly positioned blue marker. Do not use colour alone.
- Hover: transition text colour to blue over `150ms`; underline/marker may expand over `180ms`.
- The theme control is secondary to route navigation and must have an accessible name such as “Switch to dark theme.”

### Mobile navigation

- Header height: `64px`.
- Use a clearly labelled menu control with a minimum `44 × 44px` target.
- The menu may open as an in-flow panel or modal sheet. If modal, trap focus, close on `Escape`, restore focus to the trigger, lock background scrolling, and expose the open state with `aria-expanded`.
- Display links as a vertical editorial list with at least `16px` text and `16px` vertical separation. Avoid a generic app-style icon dock.

Navigation must remain usable without JavaScript wherever practical; the identity link and primary route links should be ordinary anchors.

---

## 7. Projects and case studies

### Project presentation hierarchy

Use three distinct patterns so the portfolio has editorial rhythm:

1. **Featured project:** large media or meaningful interactive visual, prominent title, concise outcome, role, year, and technologies. On desktop, use a `7/5` or `8/4` column split; alternate emphasis only when it supports reading order.
2. **Standard project entry:** medium media with a summary and metadata. May use a two-column layout, but entries should be separated by whitespace and rules rather than boxed identically.
3. **Project index row:** title, category, year, and an optional small preview. Use for secondary work; provide a clear row hover/focus treatment.

### Project card rules

When a card is appropriate:

- Padding: `24px` mobile, `32px` desktop.
- Radius: no radius when separated by rules; otherwise `8px` or `16px` for media-led featured cards.
- Border: `1px solid var(--color-border)`; use little or no default shadow.
- Media aspect ratios should be intentional and consistent within one group, commonly `16:10`, `4:3`, or `1:1`.
- Title uses `--text-h3`; description uses body or body-small and should usually remain under `180` characters in an index context.
- Metadata uses Geist Mono at `12px`, with explicit labels where meaning is not obvious.
- The entire card may be a link only when it has one destination. Nested controls require a non-link container and separate, correctly labelled targets.
- Hover may translate media by no more than `2px`, strengthen the border, or reveal a directional cue. Do not lift every card with a large shadow.
- Keyboard focus must produce the same level of visual emphasis as hover.

### Case-study pages

A full case study should support this sequence, omitting sections that add no value:

1. Title, one-sentence outcome, year, role, collaborators, and status.
2. Hero artefact or explanatory visual—not a decorative mockup by default.
3. Context and constraints.
4. Process or system explanation with diagrams and evidence.
5. Selected implementation details.
6. Outcome, measurements, limitations, and lessons.
7. Relevant links and next/previous project navigation.

Use a narrow reading column for prose and break out media to `8–12` grid columns. Captions must identify what the reader should notice. Diagrams require text equivalents or surrounding prose that communicates the same essential information.

---

## 8. Buttons, links, and controls

### Buttons

All buttons use Geist `14px`, weight `600`, minimum height `44px`, horizontal padding `18px`, and `8px` radius.

| Variant | Default | Hover | Use |
| --- | --- | --- | --- |
| Primary | Blue background, white text | `--color-blue-hover` background | One primary action per local region |
| Secondary | Transparent, primary text, strong border | Subtle surface background, blue border | Supporting actions |
| Quiet | Transparent, blue text | Blue-subtle background | Low-priority actions |
| Destructive | Transparent or danger background with compliant text | Darker danger treatment | Rare destructive actions |

- Pressed state: translate down `1px` or reduce brightness slightly; duration `80ms`.
- Disabled state: reduce contrast while keeping the label readable, remove elevation, and use `cursor: not-allowed`. A disabled control must not be the only explanation for why an action is unavailable.
- Loading state: retain width, announce status, prevent duplicate activation, and avoid replacing the full label with an unexplained spinner.
- Avoid pill-shaped primary buttons unless the control is semantically a compact toggle or filter.

### Links

- Inline prose links: blue or inherited colour with a visible underline, `text-underline-offset: 0.18em`, and `text-decoration-thickness: 1px`.
- Navigation links: may omit persistent underlines only when location and hover/focus treatments are unambiguous.
- External links should use clear link text. Add an external icon only when the destination behaviour may surprise the user; the icon is decorative if the text already conveys it.
- Never use “click here” as standalone link text.

### Focus states

All interactive elements use a consistent focus-visible treatment:

```css
outline: 2px solid var(--color-focus);
outline-offset: 3px;
```

Do not remove outlines unless an equally visible replacement is present. Focus rings must not be clipped by overflow containers.

### Form and toggle controls

- Inputs: minimum height `44px`, `1px` strong border, `8px` radius, and `12px 14px` padding.
- Labels remain visible above controls; placeholders are examples, not labels.
- Error text appears adjacent to the field, identifies a resolution, and is programmatically associated.
- Theme toggles communicate the current state and resulting action. Prefer a compact two-state control with text available to assistive technology.
- Selected filters use more than a colour change: include a check, border, weight change, or explicit `aria-pressed` state.

---

## 9. Motion and interaction

### Motion tokens

| Token | Value | Use |
| --- | --- | --- |
| `--duration-instant` | `80ms` | Press feedback |
| `--duration-fast` | `150ms` | Colour, border, underline |
| `--duration-base` | `220ms` | Small transforms and disclosure |
| `--duration-slow` | `400ms` | Section reveal or theme transition |
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Most UI transitions |
| `--ease-emphasized` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances and larger movement |

### Interaction rules

- Animate `transform` and `opacity` where possible. Avoid animating layout-heavy properties over large regions.
- Hover movement should normally stay within `2–4px`; scale should remain between `1` and `1.015` for content surfaces.
- Scroll reveals may use opacity from `0` to `1` and vertical translation from `12px` to `0` over `400ms`. Content must not remain hidden when JavaScript fails.
- Stagger related items by `40–70ms`, with a total sequence under `500ms`.
- Theme transitions may animate colour and border tokens for `150–250ms`. Disable the transition on initial page load to avoid flashing.
- Timeline progress should reflect actual scroll or focus progress, while every milestone remains reachable and legible independently.
- Interactive technical diagrams need keyboard-accessible nodes, textual status updates, and an explanation of what interaction changes.
- Do not use scroll hijacking, cursor replacement, parallax that impairs reading, auto-playing decorative loops, or motion that delays navigation.

### Reduced motion

Under `@media (prefers-reduced-motion: reduce)`:

- Remove nonessential transforms, parallax, smooth scrolling, and staggered entrances.
- Set decorative transition/animation durations effectively to `0.01ms` and iteration counts to `1`.
- Preserve instant state changes and functional progress indicators.
- Provide explicit controls for any essential animation lasting more than five seconds.

---

## 10. Accessibility requirements

The implementation must target **WCAG 2.2 Level AA**.

### Structure and semantics

- Use landmarks: `header`, `nav`, `main`, `section`, `aside`, and `footer` as appropriate.
- Provide one descriptive `h1` per page and a logical heading hierarchy without skipped levels used for visual sizing.
- Include a visible-on-focus “Skip to main content” link as the first focusable element.
- Use buttons for actions and anchors for navigation. Do not make generic `div` or `span` elements interactive.
- Set a meaningful document title and description for each route.

### Keyboard and focus

- Every interaction must work with keyboard alone and follow a logical DOM/focus order matching the visual order.
- Focus must never become trapped except inside a correctly implemented modal; modal focus must be restored on close.
- Sticky content must not obscure the focused element. Apply appropriate `scroll-padding-top` and `scroll-margin-top`.
- Drag interactions require a keyboard or pointer alternative.

### Content, media, and diagrams

- Write useful alternative text for informative images; use empty `alt` text for decorative images.
- Videos require captions; audio-only content requires a transcript.
- Charts and diagrams require a title, explanation, and accessible data or prose equivalent.
- Code blocks need an accessible label, horizontal scrolling rather than clipping, and a copy control only when useful.
- Links must make sense out of context; repeated destinations should use consistent names.

### Input and status

- Programmatically associate labels, descriptions, and errors with controls.
- Announce asynchronous success, error, loading, and copied states through appropriate live regions without moving focus unnecessarily.
- Authentication, contact, or other forms must not rely on memory tests or inaccessible CAPTCHAs.

### Visual and responsive access

- Meet the contrast thresholds in the colour section in both themes and every interaction state.
- Do not encode information only through colour, motion, location, or hover.
- Support text resizing to `200%` and page zoom to `400%` at a `1280px` CSS viewport without lost content or functionality.
- Do not disable pinch zoom.
- Use `lang="en"` at the document root and mark passages in other languages.
- Test with keyboard-only navigation, VoiceOver on macOS/iOS, reduced motion, increased contrast where supported, and both light and dark system preferences.

---

## 11. Appropriate and inappropriate patterns

### Appropriate

- A large, concise hero statement in Geist paired with one Newsreader phrase and a real visualisation of a robotics path-planning concept.
- A featured project with a wide annotated artefact, a narrow outcome column, and technical metadata aligned to the grid.
- A project index that mixes one full-width case study, two compact entries, and a text-led archive separated by fine rules.
- A timeline using a green path, explicit dates in Geist Mono, and milestones that reveal progressively while remaining readable without motion.
- Quiet blue underlines, border changes, or `2px` movement that clarify which project or link is active.
- A case study that alternates readable prose with full-width diagrams and captions explaining engineering decisions.
- Pink used for one selected diagram point, a tiny status marker, or a brief editorial highlight.

### Inappropriate

- Neon gradients, glowing orbs, aurora backgrounds, or saturated cyberpunk palettes used to imply technical expertise.
- Frosted-glass panels layered across the page, especially when blur reduces contrast or performance.
- A uniform three-column grid of identical project cards regardless of project significance or available material.
- Fake terminal windows, random code fragments, circuit traces, dot matrices, or mathematical symbols with no relationship to the content.
- Rotating 3D devices, floating objects, excessive parallax, or pointer-following effects used as decoration.
- A generic SaaS hero with badge, headline, subheading, two pill buttons, dashboard mockup, logo cloud, and feature grid.
- Every heading set in Newsreader, every label in mono, or excessive uppercase that turns typographic contrast into a theme.
- Low-contrast pastel text, pink body copy, or state changes communicated only by a subtle colour shift.
- Hidden mobile content, hover-only project information, tiny icon controls, or animation-gated reading.
- A homepage portrait used as the hero. The homepage should lead with work, thinking, typography, and a meaningful technical visual instead.

---

## Implementation review gates

Before visual implementation begins, confirm:

1. The actual homepage content hierarchy and which projects qualify as featured, standard, and archive entries.
2. Whether the hero visual represents a real personal interest, project, or dataset and what it should teach the visitor.
3. Font delivery strategy, licensing, and final required weights for Geist, Geist Mono, and Newsreader.
4. Whether dark mode follows system preference only or also includes a persistent manual override.
5. Contrast testing of every final token pairing, including hover, focus, selected, disabled, diagram, and code states.
6. Navigation routes supported by real launch content; empty sections should not be included merely to fill navigation.
7. Motion prototypes with keyboard and reduced-motion testing before motion becomes a dependency of any layout.

This document defines design intent and implementation constraints. It does not prescribe a component library or require every pattern on every page.
