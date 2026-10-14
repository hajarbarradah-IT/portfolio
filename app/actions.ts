"use server";

import { supabase } from "@/lib/supabase";

export type ContactState = {
  status: "idle" | "granted" | "denied";
  log: string;
};

/*
  SQL schema (run once in the Supabase SQL editor):

  create table contact_submissions (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    email text not null,
    message text not null,
    created_at timestamptz default now()
  );
  alter table contact_submissions enable row level security;
  create policy "allow anon insert" on contact_submissions
    for insert to anon with check (true);
*/
export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "denied", log: "[AUTH] MISSING CREDENTIALS — ACCESS DENIED" };
  }

  const { error } = await supabase
    .from("contact_submissions")
    .insert([{ name, email, message }]);

  if (error) {
    console.error("[SUPABASE]", error);
    return { status: "denied", log: "[SYSTEM] TRANSMISSION FAILURE — RETRY" };
  }

  return { status: "granted", log: "[AUTH] ACCESS GRANTED — SIGNAL LOGGED" };
}