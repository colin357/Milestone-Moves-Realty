# Milestone OS governance review

**Review target:** `www.milestonemoves.com` / this repository  
**Review date:** August 31, 2026  
**Status:** Provisional — governance baseline required for a formal pass/fail decision

## Executive finding

The site has a recognizable visual direction, but it is **not yet possible to certify it as Milestone OS compliant**. No approved Milestone OS brand standard, token package, content standard, component library, or exception register is present in the repository, and the public URL was unavailable from the review environment. This review therefore evaluates the checked-in website against the brand rules it currently implies and identifies the controls required to make compliance objective and repeatable.

The implementation is directionally consistent in its repeated use of navy, teal, rounded calls to action, education-first language, and a supportive 55+ audience position. The largest governance risk is not a single off-brand page; it is that the brand is encoded hundreds of times as page-level utility classes. This permits small exceptions to accumulate without review and prevents Milestone OS from functioning as a governed system.

**Provisional rating: partially aligned / not certifiable.**

## Scope and evidence

This review covered the 31 routed `page.tsx` files and the shared layout, header, footer, logo, page-layout, and global-style implementations. It assessed:

- visual identity and design-token usage;
- naming, positioning, voice, and calls to action;
- navigation and shared experience patterns;
- accessibility as a brand-quality requirement;
- metadata and trust signals; and
- the controls needed to maintain compliance.

The review found 259 direct uses of accessible teal (`#0A7387`), 247 of navy (`#123A5E`), 158 of dark gray (`#3D3D3D`), and additional direct uses of at least ten other hex values under `src/`. Those counts are a snapshot, not an acceptance threshold.

### Review limitations

1. The authoritative Milestone OS governance artifact was not provided and could not be found in the repository. Consequently, this report does not invent official logo, typography, voice, or co-branding rules.
2. The public domain returned a network-level 403 from this environment, so findings are based on the deployable source rather than a production DOM, analytics, form-delivery test, or third-party integrations.
3. Brand owners must validate the approved name, logo artwork, Keller Williams co-branding obligations, legal disclosures, photography rights, testimonial substantiation, and claims before implementation.

## What is already aligned

| Area | Evidence | Assessment |
| --- | --- | --- |
| Core palette | Global styles define bright teal, accessible teal, navy, dark navy, and charcoal, including contrast guidance. | Strong foundation, inconsistently consumed. |
| Audience | The root metadata and homepage consistently position the group around adults 55+ in the Triangle. | Clear and differentiated. |
| Voice | “Care, clarity & confidence,” “education first,” and low-pressure guidance recur across the primary journey. | Warm and credible; suitable as candidate OS voice pillars. |
| Shared shell | One root layout supplies the header, main landmark, and footer. | Good platform for centrally governed changes. |
| Contrast intent | Bright teal is explicitly restricted from text and controls on white; accessible teal is provided for those uses. | A useful rule that should become automated. |
| CTA shape | Primary actions generally use pill-shaped buttons with navy or accessible teal. | Visually coherent, but labels and variants need a controlled vocabulary. |

## Compliance gaps and required changes

### P0 — establish the governance baseline before declaring compliance

**Problem:** There is no source of truth against which a reviewer can approve or reject a change.

**Required changes:**

1. Publish a versioned Milestone OS brand contract in the repository (or link to a controlled external document) containing:
   - canonical organization name and acceptable short names;
   - logo masters, clear space, minimum size, background, and co-branding rules;
   - semantic color roles with approved contrast pairings;
   - type families, weights, hierarchy, and fallbacks;
   - imagery principles and prohibited treatments;
   - voice pillars, preferred phrases, prohibited phrases, and audience terminology;
   - CTA hierarchy and approved labels;
   - accessibility target (recommend WCAG 2.2 AA);
   - legal, fair-housing, privacy, testimonial, and brokerage-disclosure requirements; and
   - owner, approver, version, effective date, exception process, and review cadence.
2. Record unresolved brand decisions in a decision log. Do not treat current implementation details as approved merely because they already exist.
3. Define “compliant” as a measurable release gate, not a subjective design review.

**Acceptance:** A named brand owner approves version 1.0; every rule has an owner and test or review method; exceptions have an expiry date.

### P0 — consolidate brand assets and naming

**Problem:** Header and footer use a large cropped JPEG whose filename includes `with-kw`, while a separate hand-built SVG-like `Logo` component exists and is not used by either. Multiple logo sources make reproduction and co-branding impossible to govern. The site also uses “Milestone Moves,” “Milestone Moves Realty Group,” and a `milestonemovesrealty.com` email/domain pattern without an explicit naming rule.

**Required changes:**

- Obtain approved vector masters from the brand owner; do not redraw or trace the mark.
- Create one governed `BrandLogo` component with named variants (for example, full-color, one-color/reversed, and an approved co-branded lockup).
- Replace the ambiguous cropped JPEG and remove or deprecate the unused hand-built mark only after the master is approved.
- Define the canonical public name and rules for shortening it. Apply them to metadata, logo alternative text, headings, contact details, and structured data.
- Confirm Keller Williams trademark and brokerage lockup requirements with the responsible broker/legal reviewer.

**Acceptance:** Every rendered logo originates from the approved asset package; no page can supply arbitrary artwork; an automated scan rejects obsolete logo files and unapproved name variants.

### P1 — replace literal styling with semantic Milestone OS tokens

**Problem:** Global CSS defines tokens, but pages overwhelmingly bypass them with literals such as `text-[#123A5E]` and `bg-[#0A7387]`. A residual former navy (`#1C2B5E`) and one-off gold/cream values also exist. Literal duplication is the clearest source-level governance failure.

**Required changes:**

- Expand tokens from raw colors into semantic roles: `surface`, `surface-subtle`, `text`, `text-muted`, `heading`, `action-primary`, `action-primary-hover`, `action-secondary`, `focus`, `border`, `success`, and campaign/accent roles.
- Add governed typography, spacing, radius, shadow, motion, and content-width tokens.
- Migrate page literals to semantic Tailwind utilities/components; forbid arbitrary brand hex classes through linting or a CI scan.
- Either approve gold/cream as a named seminar/campaign accent with contrast pairings or replace it with an existing role.
- Remove the legacy navy after visual regression approval.

**Acceptance:** No approved brand hex appears outside the token source or documented asset files; CI fails on new arbitrary color values; token changes are reviewed by the OS owner.

### P1 — standardize components and page templates

**Problem:** Repeated patterns—eyebrows, hero overlays, headings, pills, service cards, related-service cards, check lists, and final CTAs—are composed independently on many pages. `PageLayout` covers only part of the catalog. This creates subtle variation in spacing, type scale, hover/focus behavior, and CTA priority.

**Required changes:**

- Create governed primitives for `Button`, `Eyebrow`, `PageHero`, `SectionHeading`, `Card`, `Callout`, `Checklist`, and `FinalCTA`.
- Define three to five approved page templates (home, service, resource/article, event, and location) with required slots.
- Document variants in a component catalog with do/don’t examples and responsive states.
- Replace emoji used as prominent feature icons with a coherent, accessible icon set approved by the brand owner.
- Add visual-regression snapshots at small, medium, and large viewports.

**Acceptance:** New pages can be assembled without arbitrary colors or ad hoc CTA/hero markup; shared component snapshots require design-system review when changed.

### P1 — simplify information architecture and action language

**Problem:** The desktop header exposes eight top-level destinations and four large dropdowns. “Services,” “55+ Options,” “Buy-Sell-Smile,” “Moving Playbook,” and “Empowered Aging” overlap conceptually. CTA labels vary between “Get in touch,” “Start a conversation,” “Contact us,” “Registration details,” and topic-specific actions without a defined hierarchy.

**Required changes:**

- Test a task-based navigation model with older adults and caregivers. A candidate structure is **How We Help**, **Plan Your Move**, **55+ Living**, **Learn**, and **About**, with a persistent primary **Start a Conversation** action.
- Decide whether “Buy-Sell-Smile” is an approved brand program. If it is, define its promise and visual treatment; if not, rename it in plain, task-oriented language.
- Treat “Moving Playbook” and “Empowered Aging” as named products only if the governance baseline defines capitalization, descriptors, and relationships to the parent brand.
- Adopt one primary conversion label, one low-commitment secondary label, and event-specific registration labels. Use sentence case unless all-caps is an explicit typographic rule rather than source copy.

**Acceptance:** Every top-level item maps to a distinct user intent; first-click testing meets the team’s agreed success threshold; CTA variants and labels come from the content standard.

### P1 — make accessibility a release requirement

**Problem:** The palette documents contrast intent, but there is no automated accessibility test or skip link. Dropdown behavior is driven by hover/click state without the complete disclosure-menu semantics expected for keyboard and assistive-technology use. The site’s older-adult audience makes readable type, target size, focus visibility, reduced motion, and plain language especially important.

**Required changes:**

- Add a visible-on-focus “Skip to main content” link and a stable main landmark target.
- Rebuild navigation disclosures with `aria-expanded`, `aria-controls`, Escape handling, focus management, and reliable keyboard operation; label decorative SVGs appropriately.
- Audit default text at 200% zoom, reflow at 320 CSS pixels, touch targets, focus indicators, headings, forms, status/error messages, and reduced motion.
- Add axe-based checks for representative templates and keyboard/manual checks to the release checklist.
- Verify all meaningful imagery, testimonials, and icons have appropriate text alternatives; preserve empty alternatives only for decorative images.

**Acceptance:** Representative templates have no serious/critical axe issues, complete a documented keyboard script, and pass the agreed WCAG 2.2 AA audit with exceptions recorded.

### P1 — close trust, legal, and conversion gaps

**Problem:** The contact form is presentational markup with no visible action, success state, privacy notice, consent language, or delivery contract in the checked-in implementation. The footer does not expose privacy, accessibility, or required real-estate/brokerage/fair-housing disclosures. Testimonials and quantitative claims need an approval trail.

**Required changes:**

- Connect the form to an approved service with validation, accessible errors, spam protection, consent/privacy text, delivery monitoring, and a no-JavaScript or direct-contact fallback.
- Add approved privacy, accessibility, and legally required real-estate disclosures and marks.
- Create a claims register for “10+ Triangle Communities,” “100% Education-First Approach,” credentials, market statements, and testimonials, including owner, source, consent, and review/expiry date.
- Standardize phone, email, address, organization name, and service-area data in one content/config source.

**Acceptance:** End-to-end form tests prove delivery and error handling; legal/broker approval is recorded; every material claim has current evidence.

### P2 — govern metadata, discovery, and structured identity

**Problem:** Route-level titles/descriptions are broadly present, but canonical URL, metadata base, social image rules, robots/sitemap governance, and Organization/RealEstateAgent structured data are not evident in the root implementation. Metadata wording cannot be validated while the canonical name is unresolved.

**Required changes:**

- Define title and description templates, canonical-host policy, approved social card templates, and indexation rules.
- Generate sitemap and robots outputs from governed route data.
- Add validated structured data only after canonical business details and required brokerage fields are approved.
- Include metadata and broken-link checks in CI.

**Acceptance:** Each indexable route has a unique governed title/description and canonical; social previews use approved artwork; schema validates with no critical errors.

## Proposed Milestone OS brand model

Brand-owner approval is required, but the existing experience supports the following useful starting model:

### Brand promise

**Confident next steps for life’s housing transitions.**

This is more durable than defining the organization only by a property transaction and connects the realty, education, caregiver, aging-in-place, and moving content.

### Experience principles

1. **Clarify before asking.** Explain the next step, effort, and outcome before a CTA.
2. **Guide without pressure.** Prefer specific, reassuring language over urgency or sales superlatives.
3. **Respect the whole transition.** Address people, home, health, finances, timing, and community without presenting the brand as licensed outside its actual role.
4. **Make confidence visible.** Use predictable page patterns, plain labels, evidence, credentials, and transparent process steps.
5. **Design for changing needs.** Treat legibility, keyboard support, target size, and cognitive load as core brand behavior.

### Candidate voice rules

| Use | Avoid |
| --- | --- |
| “adults 55+,” “older adults,” or audience-preferred language validated in research | switching casually among “seniors,” “55 and better,” and age euphemisms |
| clear next steps and concrete outcomes | vague “learn more” links when a specific label fits |
| calm, informed, compassionate guidance | scarcity, fear, forced urgency, or unsupported superiority claims |
| “we coordinate/connect/refer” when partners deliver a service | language implying Milestone Moves directly provides legal, medical, financial, or moving services |
| sentence case in source content | all-caps copy used to create visual hierarchy |

## Delivery roadmap

### Phase 1 — decide and contain (weeks 1–2)

- Name the brand owner and technical OS steward.
- Approve the canonical name, positioning, audience language, logo package, palette roles, typography, and legal baseline.
- Create the exception and claims registers.
- Freeze new arbitrary hex values, logo variants, and CTA labels.
- Fix the contact-form delivery/trust gap and highest-risk navigation/accessibility issues.

### Phase 2 — systemize (weeks 3–6)

- Build semantic tokens and the core governed components.
- Migrate the shared shell, homepage, one service page, one resource page, and the seminar page as reference templates.
- Add component documentation, axe checks, visual regression, link checking, and arbitrary-value enforcement.
- Validate reference templates with older adults and caregivers before broad rollout.

### Phase 3 — migrate and verify (weeks 7–10)

- Migrate remaining routes by template rather than page-by-page redesign.
- Normalize naming, CTA language, shared contact details, imagery, metadata, and claims.
- Complete accessibility, legal, content, responsive, analytics, and production-form reviews.
- Publish a conformance report listing approved exceptions and expiry dates.

## Release scorecard

Use this scorecard for every production release. A release is OS-compliant only when every critical row passes or has a time-boxed exception approved by the named owner.

| Control | Evidence | Owner | Gate |
| --- | --- | --- | --- |
| Approved tokens only | lint/CI output | OS steward | Critical |
| Approved logo/name variants | asset scan + visual review | Brand owner | Critical |
| WCAG target | axe + keyboard/manual report | Accessibility owner | Critical |
| Form and primary CTA work | end-to-end test + monitoring | Product owner | Critical |
| Claims and testimonials current | claims register | Content/legal owner | Critical |
| Required disclosures present | legal checklist | Broker/legal owner | Critical |
| Template and component compliance | visual regression | Design owner | Major |
| Voice and CTA vocabulary | editorial review | Content owner | Major |
| Metadata and links valid | automated checks | SEO/engineering owner | Major |
| Exceptions approved and unexpired | exception register | Brand owner | Critical |

## Recommended immediate decision

Do not begin with a broad visual redesign. First approve the Milestone OS baseline, then migrate one representative journey—homepage → service page → contact—as the reference implementation. That sequence converts the existing strong direction into a governed system, avoids rework, and gives the team a measurable standard for the remaining pages.
