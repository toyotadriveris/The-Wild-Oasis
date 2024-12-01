import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nrxbmaxrznnmckmxadqn.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yeGJtYXhyem5ubWNrbXhhZHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4OTA3MjAsImV4cCI6MjA0ODQ2NjcyMH0.Uk5wj3oibf2_4shTRER464IAzzJhlMKnNYqwKnX9y_0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
