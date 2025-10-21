// src/components/BackToHomeButton.tsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BacktoHomeBtn() {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/")}
            className="absolute z-10 top-4 flex items-center gap-2 rounded-xl border px-4 py-2 font-medium hover:bg-muted transition text-white shadow
        bg-gradient-to-r from-fuchsia-600 to-violet-600
        hover:from-fuchsia-500 hover:to-violet-500"
        >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
        </button>

    );
}
