import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const statusMessages = [
  "Scanning metadata...",
  "Checking manipulation signals...",
  "Tracing source...",
  "Compiling report...",
];

export function LoadingState() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % statusMessages.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex flex-col items-center justify-center rounded-2xl bg-card p-8 shadow-xl shadow-foreground/5">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-mint-soft">
          <Loader2 className="h-8 w-8 animate-spin text-mint" />
        </div>
        <p className="mt-5 text-base font-medium text-card-foreground">
          {statusMessages[index]}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          This usually takes a few seconds
        </p>
      </div>

      <SkeletonCard height="h-40" />
      <SkeletonCard height="h-36" />
      <SkeletonCard height="h-32" />
      <SkeletonCard height="h-28" />
      <SkeletonCard height="h-32" />
    </div>
  );
}

function SkeletonCard({ height }: { height: string }) {
  return (
    <div className={`rounded-2xl bg-card p-5 shadow-lg shadow-foreground/5 ${height}`}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 animate-pulse rounded-full bg-muted" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-1/3 animate-pulse rounded-full bg-muted" />
          <div className="h-2.5 w-1/2 animate-pulse rounded-full bg-muted" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-2.5 w-full animate-pulse rounded-full bg-muted" />
        <div className="h-2.5 w-5/6 animate-pulse rounded-full bg-muted" />
      </div>
    </div>
  );
}
