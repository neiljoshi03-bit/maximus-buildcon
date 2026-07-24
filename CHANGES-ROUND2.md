# Round 2 — Website Changes

Implementation notes for the client's Round 2 brief (building materials + waterproofing + wellness restructure).

## What changed

### Navigation
- Top nav **Brands → Explore**, with three categories and nested brand submenus:
  - Building Materials → Atlas Concorde, Hamlet, Geberit, Bravat, Cotto
  - Wellness → Fahrenheit Wellness
  - Waterproofing → Greentek Plast (Anchor Grip, Geo Proof Materials, Other Products), KANERIA Materials
- Hero CTA **"Explore Our Brands" → "Explore"**, opening a three-category panel.
- Applied to all 17 pages.

### New pages
| Page | Purpose |
|---|---|
| `brands/building-materials.html` | Category hub — the five material brands |
| `brands/waterproofing.html` | Category hub — Greentek Plast + KANERIA, plus process section |
| `brands/greentek-plast.html` | Brand intro + three product categories |
| `brands/anchor-grip.html` | Basement, retention wall, underground tank, swimming pool |
| `brands/geo-proof.html` | Toilet, bathroom, terrace, balcony, flower beds, podium, OH tank, exterior wall, interior brickwork |
| `brands/other-products.html` | Dimple Sheet, Drainboard |
| `brands/kaneria.html` | Dry mix plaster, AAC blocks, floor screed |

All four supplied Google Drive links are wired in as "View Product Gallery" / "Download Product Catalogue" buttons, matching the existing Geberit catalogue button pattern.

### Content
- **Home** — new hero intro, About rewrite, stats 6+ → 7+, brand grid replaced by three category cards, "Crafting Spaces of Distinction" section removed, Phoenix Mall → Phoenix Mills.
- **About** — full replacement per brief (Who We Are, Our Story, What We Do + 8 highlights, Curation/Partnership/Excellence, four new statistics, new CTA).
- **Projects** — new heading and intro; Gundecha image removed; Phoenix Palladium → Phoenix Mills; added Atria Mall, Star Mall, Piramal Realty, Suvidha Group, ITC Aurangabad, Raheja Universal; waterproofing (Dynamix, PCPL, Satellite, Kothari, Oscar) and wellness (Harsh) integrated into the same page.
- **Footer** — new description sitewide; "Brands" column → **"Solutions"** (Building Materials / Wellness / Waterproofing).
- **Contact** — added a Wellness enquiries card for Ms. Tanisha Mehta and a Waterproofing enquiries card.

### Two pre-existing bugs fixed
Both were already in the stylesheet and only became visible with the larger menu:
1. `.navbar` sets `backdrop-filter`, which makes it the containing block for the `position: fixed` mobile drawer — so `bottom: 0` collapsed the drawer to ~80px and its background covered only the first item. Now sized with `height: calc(100vh - 70px)` and scrollable.
2. `.dropdown:hover .dropdown-menu` (specificity 0,3,0) outranked the mobile `.dropdown-menu` reset, re-applying the desktop `translateX(-50%)` inside the drawer and throwing the menu outside the panel. Now explicitly neutralised at ≤768px.

Design language, typography, colour palette, spacing and animations are unchanged — all new CSS is additive.

---

## Open questions for the client

1. **"7+ Premium Brands"** — implemented as specified, but the actual count is now 8 (5 building materials + Fahrenheit Wellness + Greentek Plast + KANERIA). Confirm whether 7+ or 8+ is intended.
2. **Footer column heading** — the brief said *"Brands change to Solutions maybe? Idk"*. Used **"Solutions"**. Easy to switch back.
3. **Ms. Tanisha Mehta** — listed for wellness enquiries with the general email; no direct phone number was supplied. Send one and it goes straight in.
4. **Waterproofing & new-project imagery** — the Google Drive folders can't be read programmatically, so these pages are currently text-led and link out to the Drive galleries. Export the images as files and they can be dropped into the existing gallery layouts.
5. **"Harsh"** (wellness) — written as *Harsh Residence*, a private wellness installation. Confirm whether this is a person, a residence or a company.
6. **Project detail** — Piramal Realty, Suvidha Group, ITC Aurangabad, Raheja Universal, Satellite, PCPL, Kothari and Oscar are written from the supplied product categories only. Nothing has been invented; send project names, locations, scale or dates and the case studies can be filled out properly.
7. **Marathon Realty** — present on the old site but absent from the new project list. Retained rather than silently dropped. Confirm whether to keep.
8. **Gundecha / Neelam / Walchand imagery** — Gundecha's image was removed as instructed. Neelam and Walchand still use generic stock photography rather than their actual projects; worth replacing or removing for consistency.
