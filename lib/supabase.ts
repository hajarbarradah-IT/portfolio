import { createClient } from "@supabase/supabase-js";

// Server-side Supabase client (uses service role — never expose to the browser)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);