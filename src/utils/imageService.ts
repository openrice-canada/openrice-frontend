/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_BUCKET_PATH!,
  process.env.REACT_APP_SUPABASE_SECRET_API_KEY!
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
