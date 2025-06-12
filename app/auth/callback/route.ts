import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  try {
    if (code) {
      const supabase = await createClient();
      await supabase.auth.exchangeCodeForSession(code);
    }
  } catch (error) {
    console.log("auth_callback", error)
  }
  return NextResponse.redirect(requestUrl.origin)
}
