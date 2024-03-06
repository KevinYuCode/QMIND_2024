import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}

// Function to download a single image
export const downloadImage = async (path: string) => {
  const supabase = createClient();
  const { data, error }: any = supabase.storage
    .from("projects")
    .getPublicUrl(path);

  if (error) {
    return null;
  }

  return data; //This will be a URL for the image
};

export const downloadAllImages = async (paths: Array<String>) => {
  try {
    // Use Promise.all to download all images at once
    const imagePromises = paths.map(downloadImage);
    const images = await Promise.all(imagePromises);

    if (!images) return null;

    return images;
  } catch (error) {
    return null;
  }
};

// Function to download a single image
export const downloadTeamImage = async (path: string) => {
  const supabase = createClient();
  const { data, error }: any = supabase.storage
    .from("teams")
    .getPublicUrl(path);

  if (error) {
    return null;
  }

  return data; //This will be a URL for the image
};
export const downloadAllTeamImages = async (paths: any) => {
  try {
    // Use Promise.all to download all images at once
    const imagePromises = paths.map(downloadTeamImage);
    const images = await Promise.all(imagePromises);

    if (!images) return null;

    return images;
  } catch (error) {
    return null;
  }
};
