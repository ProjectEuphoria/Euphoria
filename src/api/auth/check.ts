// keep this exact path; prefix adds /adk/api automatically
export async function authCheckRoute(app: any) {
  app.get("/auth/check", async (req: any, reply: any) => {
    const sid = req.cookies?.sid;

    if (!sid) {
      return reply.code(401).send({ ok: false });
    }

    return reply.send({ ok: true });
  });
}
