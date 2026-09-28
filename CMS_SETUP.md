# FITNESS GYM CMS setup

The admin dashboard is available at `/admin.html`.

For persistent admin writes, add these Vercel environment variables:

- `GITHUB_TOKEN` — a GitHub token with Contents read/write access to `ziadelkady20-blip/FITNESS-GYM`.
- `ADMIN_PASSWORD` — a strong private password chosen by the gym owner.

After saving the variables for Production, redeploy the project.

The public site reads `data/site-data.json` dynamically, so status, gallery and offers are reflected without hard-coding them into the page.
