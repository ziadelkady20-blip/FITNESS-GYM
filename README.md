# FITNESS GYM

Premium gym website and management platform for FITNESS GYM.

## Brand
- Black / Red / White
- Men: 24/7
- Women: 08:00–22:00
- WhatsApp / phone: 01033659722

## Project direction
The existing GYMZ code is kept only as a reference. FITNESS GYM is being rebuilt as a separate product with a new frontend, new backend, and admin dashboard.

## Memberships
Membership pricing is maintained as structured data so the admin dashboard can manage it without editing frontend code.

## CMS
- Admin authentication via `ADMIN_PASSWORD`
- GitHub-backed content storage via `GITHUB_TOKEN`
- Live gym status: Quiet / Medium / Busy
- Gallery add / replace / rename / delete
- Exclusive offers add / edit / hide / delete
- Public website reads the latest CMS data through `/api/site-data`

## Deployment
Vercel deployment uses `vercel.json` with the repository root as the static output directory and runs the CMS injection script during the build.

## Planned modules
- Premium public website
- Dynamic memberships and offers
- Gym status and opening hours
- Gallery/content management
- Admin authentication
- Admin dashboard
