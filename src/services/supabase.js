import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;
// test
export const supabaseUrl = url;

export const supabaseKey = key;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
