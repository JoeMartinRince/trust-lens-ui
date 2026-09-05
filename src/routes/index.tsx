import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import { UploadCard } from "@/components/trustlens/UploadCard";
import { LoadingState } from "@/components/trustlens/LoadingState";
import { ResultsView } from "@/components/trustlens/ResultsView";
import { StateToggle } from "@/components/trustlens/StateToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TrustLens — Media Verification" },
      {
        name: "description",
        content:
          "Verify the authenticity of images and videos with TrustLens. Detect manipulation, inspect metadata, and trace sources.",
      },
      { property: "og:title", content: "TrustLens — Media Verification" },
      {
        property: "og:description",
        content:
          "Verify the authenticity of images and videos with TrustLens.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

type AppState = "upload" | "loading" | "results";

function Index() {
  const [appState, setAppState] = useState<AppState>("upload");

  useEffect(() => {
    if (appState === "loading") {
      const timer = setTimeout(() => setAppState("results"), 3200);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-10">
      {/* Mint gradient blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-mint) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <header className="mb-6 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-mint-soft text-mint">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <span className="text-xl font-bold tracking-tight text-foreground">
          TrustLens
        </span>
      </header>

      {/* Main content */}
      {appState === "upload" && <UploadCard onAnalyze={() => setAppState("loading")} />}
      {appState === "loading" && <LoadingState />}
      {appState === "results" && <ResultsView onReset={() => setAppState("upload")} />}

      {/* Demo state toggle */}
      <div className="mt-8">
        <StateToggle current={appState} onChange={setAppState} />
      </div>
    </div>
  );
}
