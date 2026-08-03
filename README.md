# MarimeTech Solutions Premium Website

A premium responsive Next.js website prepared for deployment on Netlify.

## Pages

- Home
- About
- Services
- Founder
- Insights
- Podcast
- Books
- Contact
- Custom 404 page
- Sitemap and robots.txt

## Contact form

The form uses **Netlify Forms**. After the first production deployment:

1. Open the site in Netlify.
2. Go to **Forms**.
3. Confirm that the `contact` form has been detected.
4. Under form notifications, add the email address that should receive alerts.

The website currently displays:

`info@marimetechsolutions.com`

Confirm that this mailbox exists or replace it in `app/contact/page.tsx`.

## Local preview

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy through Netlify

### Recommended method: GitHub

1. Create a GitHub account and a new repository.
2. Upload the contents of this project to the repository.
3. In Netlify, select **Add new project** → **Import an existing project**.
4. Choose GitHub and select the repository.
5. Netlify will read `netlify.toml`.
6. Deploy the site.

Build command:

```text
npm run build
```

Publish directory:

```text
out
```

### Connect the domain

In Netlify:

1. Open the deployed site.
2. Go to **Domain management**.
3. Select **Add a domain**.
4. Add `marimetechsolutions.com`.
5. Follow Netlify's DNS instructions for the company where the domain was purchased.
6. Add `www.marimetechsolutions.com` as an alias and redirect it to the primary domain.
7. Netlify will issue a free HTTPS certificate after DNS is connected.

## Before launch

- Founder portrait added.
- LinkedIn profile added.
- YouTube podcast channel added.
- Add the first three insight articles.
- Contact mailbox confirmed: info@marimetechsolutions.com.
- Add a booking link if using Calendly or Microsoft Bookings.


## Premium logo update

This package adds:
- Premium MarimeTech logo to the header and footer
- Full brand visual on the homepage
- MarimeTech favicon and Apple touch icon
- Updated social-sharing image
- Founder photograph removed from the homepage; it remains on the Founder page only


## Reference-inspired homepage redesign

This version:
- Rebuilds the homepage around the approved mobile visual direction
- Uses the full MarimeTech logo in the header without cropping
- Adds a bold navy-and-gold hero with abstract technology network detail
- Adds the four-part credibility strip
- Adds a focused "Who We Help" section
- Remains responsive across desktop, tablet and mobile

## MarimeTech v2 deployment update

This release includes:
- Large standalone M mark in the header
- Premium full-width homepage hero with simplified capability labels
- Business First, Secure by Design, and Built for Resilience approach section
- Three focused solution pathways: Launch, Transform, Secure
- New Launch Your Business landing page
- Kit form connected to form 9756226
- New Insights placeholder page
- Updated navigation, footer, and sitemap

Upload all extracted files to the existing GitHub repository and commit. Netlify will deploy automatically.


## Build fix
- Replaced the unsupported `Linkedin` Lucide icon import with the stable `Building2` icon.


## Static sitemap fix
- Added `export const dynamic = "force-static";` to `app/sitemap.ts` for compatibility with Next.js static export.


## MarimeTech Website v2.0 — Approved Release

- Rebuilt the standalone M logo with proper padding to prevent clipping
- Updated navigation from Founder to About Us
- Merged leadership content into the scalable About Us page
- Removed the old Founder route and sitemap entry
- Changed the Kit form label to Email address
- Changed the email placeholder to you@example.com
- Preserved the simplified homepage capability graphic
- Retained static sitemap compatibility for Netlify
- Pinned framework and dependency versions for repeatable builds


## Final approved brand changes
- Added M + MarimeTech Solutions Inc. text lockup in header and footer
- Updated About page hero to About MarimeTech Solutions Inc.
- Retained the user's existing photo and Founder & CEO title


## Website v2.1 — Capability Visual Update
- Replaced the coded homepage orbit with the approved MarimeTech capability graphic
- Retained the six concise capability labels only
- Optimized the graphic as WebP for faster loading
- Added responsive desktop and mobile presentation
- No changes to Kit, About Us, navigation, forms, sitemap, or hosting configuration
