export async function GET({ request, cookies }: APIContext) {
    const code = new URL(request.url).searchParams?.get("code");
    const state = new URL(request.url).searchParams?.get("state");
  
    const storedState = cookies.get("github_oauth_state")?.value;
  
    if (storedState !== state || !code) {
      cookies.delete("github_oauth_state", { path: "/" });
  
      return new Response(null, {
        status: 302,
        headers: {
          Location: "/login?error=Server+Error",
        },
      });
    }
  }