# NEURAL OPS — Cyber Portfolio

Immersive "Live Threat-Monitoring Console" portfolio: Next.js 14 App Router,
Tailwind CSS, Framer Motion, Supabase.

## Setup
1. `npm install`
2. Copy `.env.example` → `.env.local`, fill Supabase credentials.
3. Create the table in Supabase SQL editor (schema is in `app/actions.ts`).
4. `npm run dev`

## Structure
- `app/page.tsx` — ops floor with draggable terminal modules
- `components/DraggableCard.tsx` — drag/expand/z-focus logic
- `components/Hero.tsx` — video-centric boot sequence hero
- `components/ContactCard.tsx` — secure-pass form + ACCESS GRANTED state
- `app/actions.ts` — server action inserting into `contact_submissions`

Drop a `neural-network.mp4` into `/public` and uncomment the <video> tag in
`components/Hero.tsx` for the full background-video effect.
