import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://wrkhhfygmoqlkgfslzza.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indya2hoZnlnbW9xbGtnZnNsenphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjQ2NzU1MiwiZXhwIjoyMDEyMDQzNTUyfQ.djjQmGUphZV8gMr8klXaRRd2T-8DCtE-Imb9LEvAV04"
);

export async function uploadImage(file: File, restaurantId: string) {
  const { data } = await supabase.storage
    .from("restaurant")
    .upload(`/${restaurantId}.png`, file, {
      cacheControl: "3600",
      upsert: false,
    });
  console.log(data);
}
