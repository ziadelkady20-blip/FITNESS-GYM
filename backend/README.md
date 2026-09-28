# FITNESS GYM backend

The new FITNESS GYM site is intentionally separated from the old GYMZ code. The old project remains under `FITNESS GYM/GYMZ` as a reference only.

## Target stack

- PostgreSQL / Neon
- Server-side API deployed with Vercel
- Admin authentication and role checks
- Memberships and prices stored in the database
- Offers, gym status, hours, contact details and gallery managed from the admin dashboard

## Environment variables

```env
DATABASE_URL=
ADMIN_SESSION_SECRET=
```

Never put database credentials in client-side HTML/JavaScript.

## Initial data

`../data/memberships.json` is the source-of-truth snapshot used while the API/database layer is being wired. The production site should read memberships from PostgreSQL after the database is connected.

## Planned API

- `GET /api/memberships`
- `PUT /api/memberships/:id`
- `GET /api/settings`
- `PUT /api/settings`
- `GET /api/offers`
- `POST /api/offers`
- `PUT /api/offers/:id`
- `DELETE /api/offers/:id`
- `GET /api/status`
- `PUT /api/status`

The public site must never expose admin credentials or database credentials.
