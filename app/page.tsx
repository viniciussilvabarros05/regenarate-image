import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  let isLogged = true;
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error || !data?.user) {
      isLogged = false;
      redirect("/login");
    }
  } catch (error) {
    console.log("Home", error);
  } finally {
    if (isLogged) {
      redirect("/user-app");
    }
  }

  return <div></div>;
}
