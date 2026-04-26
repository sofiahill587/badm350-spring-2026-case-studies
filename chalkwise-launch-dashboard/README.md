# ChalkWise Launch Dashboard

Separate public-safe dashboard app for ChalkWise launch readiness, live aggregate product metrics, and lightweight security posture signals.

## Local setup

1. Copy `.env.example` to `.env.local`
2. Fill in:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Install dependencies:

```bash
npm install
```

4. Start the dashboard:

```bash
npm run dev
```

5. Apply the Supabase migrations that add the dashboard metrics RPCs before expecting live counts:

`chalkwise-0fac8bcc/supabase/migrations/20260426000000_internal_dashboard_metrics.sql`
`chalkwise-0fac8bcc/supabase/migrations/20260426000001_public_dashboard_metrics.sql`

## Publish prep

- Keep `.env.local` out of Git. It is already ignored.
- Put `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` into your hosting provider's environment settings.
- The dashboard is designed to read only aggregate metrics from the public RPC.
- If a local production build fails inside this Windows synced folder, try the same build in GitHub/Vercel or move the folder outside OneDrive before debugging further.

## Notes

- This dashboard is intentionally separate from the main Lovable-hosted app.
- Do not put a Supabase service-role key in frontend code.
- The public-facing launch summary uses a safe aggregate RPC instead of raw table reads.
