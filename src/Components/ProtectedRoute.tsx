import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const loc = useLocation();
  const [ok, setOk] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/adk/api/auth/check", { credentials: "include" });
        console.log(res)
        setOk(res.ok);
      } catch {
        setOk(false);
      }
    })();
  }, []);

  console.log(ok)

  if (ok === null) return null; // or a spinner
  return ok
    ? <Outlet />
    : <Navigate to={`/auth?next=${encodeURIComponent(loc.pathname + loc.search)}`} replace />;
}
