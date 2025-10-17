export async function logoutRoute(app: any) {
  app.post("/auth/logout", async (req: any, reply: any) => {
    reply.clearCookie("sid", {
      path: "/", // must match the same path as setCookie()
      httpOnly: true,
      sameSite: "lax",
      secure: false, // true in production
    });

    return reply.send({ ok: true, message: "Logged out successfully" });
  });
}
