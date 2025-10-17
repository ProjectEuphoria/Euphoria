import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
  const [ok, setOk] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/adk/api/auth/check", { credentials: "include" });
        setOk(res.ok);
      } catch {
        setOk(false);
      }
    })();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("/adk/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (res.ok) {
        setOk(false);
        navigate("/auth");
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return ok ? (
    <button
      onClick={handleLogout}
      className="
        whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold
        text-white shadow
        bg-gradient-to-r from-fuchsia-600 to-violet-600
        hover:from-fuchsia-500 hover:to-violet-500
      "
    >
      Logout
    </button>
  ) : (
    <button
      onClick={() => navigate("/auth")}
      className="
        whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold
        text-white shadow
        bg-gradient-to-r from-fuchsia-600 to-violet-600
        hover:from-fuchsia-500 hover:to-violet-500
      "
    >
      Login
    </button>
  );
}
