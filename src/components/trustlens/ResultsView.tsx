import {
  Camera,
  AlertTriangle,
  Search,
  FileWarning,
  ShieldAlert,
  Eye,
  Image,
  RefreshCw,
  ExternalLink,
  Info,
  type LucideIcon,
} from "lucide-react";

interface ResultsViewProps {
  onReset: () => void;
}

export function ResultsView({ onReset }: ResultsViewProps) {
  return (
    <div className="w-full max-w-md space-y-4 pb-8">
      <TrustScoreCard />
      <MetadataAnalysisCard />
      <ManipulationScanCard />
      <SourceTraceCard />
      <RedFlagsCard />
      <LimitationsFooter />

      <button
        onClick={onReset}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-colors hover:bg-primary/90"
      >
        <RefreshCw className="h-4 w-4" />
        Analyze another
      </button>
    </div>
  );
}

function TrustScoreCard() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-xl shadow-foreground/5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Trust score</p>
          <p className="mt-1 text-5xl font-bold tracking-tight text-card-foreground">
            42<span className="text-2xl font-medium text-muted-foreground">/100</span>
          </p>
        </div>
        <span className="rounded-full bg-trust-red-soft px-3 py-1 text-xs font-semibold text-trust-red">
          Likely manipulated
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-card-foreground">
        Multiple signals suggest this media has been altered. Metadata is
        inconsistent and no reliable original source was found.
      </p>
    </div>
  );
}

function MetadataAnalysisCard() {
  const rows = [
    { label: "Camera", value: "iPhone 14 Pro", flag: false },
    { label: "Date taken", value: "2023-08-12 14:32", flag: true },
    { label: "Dimensions", value: "3024 × 4032", flag: false },
    { label: "Location", value: "Not embedded", flag: false },
    { label: "Software", value: "Adobe Photoshop 24.0", flag: true },
  ];

  return (
    <div className="rounded-2xl bg-card p-5 shadow-lg shadow-foreground/5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-trust-blue-soft text-trust-blue">
          <Camera className="h-5 w-5" />
        </div>
        <h2 className="text-base font-semibold text-card-foreground">
          Metadata analysis
        </h2>
      </div>

      <div className="mt-4 space-y-3">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between rounded-xl bg-secondary/50 px-3 py-2.5"
          >
            <span className="text-xs font-medium text-muted-foreground">
              {row.label}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-card-foreground">
                {row.value}
              </span>
              {row.flag && (
                <span className="rounded-full bg-trust-red-soft px-2 py-0.5 text-[10px] font-semibold text-trust-red">
                  Flag
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ManipulationScanCard() {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-lg shadow-foreground/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-trust-purple-soft text-trust-purple">
            <Search className="h-5 w-5" />
          </div>
          <h2 className="text-base font-semibold text-card-foreground">
            Manipulation scan
          </h2>
        </div>
        <span className="rounded-full bg-trust-orange-soft px-3 py-1 text-xs font-semibold text-trust-orange">
          68% suspicious
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="overflow-hidden rounded-xl bg-secondary/50">
          <div className="flex aspect-square items-center justify-center bg-trust-warm">
            <Image className="h-8 w-8 text-muted-foreground/60" />
          </div>
          <p className="px-3 py-2 text-center text-[10px] font-medium text-muted-foreground">
            Original
          </p>
        </div>
        <div className="overflow-hidden rounded-xl bg-secondary/50">
          <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-trust-red-soft to-trust-orange-soft">
            <Eye className="h-8 w-8 text-trust-orange/60" />
          </div>
          <p className="px-3 py-2 text-center text-[10px] font-medium text-muted-foreground">
            Heatmap
          </p>
        </div>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Error-level analysis shows elevated noise around the subject edges,
        suggesting splicing or inpainting.
      </p>
    </div>
  );
}

function SourceTraceCard() {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-lg shadow-foreground/5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-trust-green-soft text-trust-green">
          <ExternalLink className="h-5 w-5" />
        </div>
        <h2 className="text-base font-semibold text-card-foreground">
          Source trace
        </h2>
      </div>

      <div className="mt-4 rounded-xl bg-secondary/50 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-card-foreground">
            socialfeed.example.com
          </span>
          <span className="rounded-full bg-trust-orange-soft px-3 py-1 text-xs font-semibold text-trust-orange">
            2023-09-01
          </span>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Earliest indexed match found on a social aggregator. No verified
          original photographer or news agency source was identified.
        </p>
        <button className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          View original
          <ExternalLink className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

interface FlagItem {
  icon: LucideIcon;
  badgeClass: string;
  dotClass: string;
  label: string;
  desc: string;
}

function RedFlagsCard() {
  const flags: FlagItem[] = [
    {
      icon: FileWarning,
      badgeClass: "bg-trust-red-soft text-trust-red",
      dotClass: "bg-trust-red",
      label: "Edited with Photoshop",
      desc: "Software tag detected in metadata",
    },
    {
      icon: ShieldAlert,
      badgeClass: "bg-trust-orange-soft text-trust-orange",
      dotClass: "bg-trust-orange",
      label: "Inconsistent timeline",
      desc: "Create date differs from upload date",
    },
    {
      icon: AlertTriangle,
      badgeClass: "bg-trust-purple-soft text-trust-purple",
      dotClass: "bg-trust-purple",
      label: "No verified source",
      desc: "Could not trace to original publisher",
    },
  ];

  return (
    <div className="rounded-2xl bg-card p-5 shadow-lg shadow-foreground/5">
      <h2 className="text-base font-semibold text-card-foreground">
        Red flags
      </h2>

      <div className="mt-4 space-y-3">
        {flags.map((flag) => {
          const Icon = flag.icon;
          return (
            <div key={flag.label} className="flex items-start gap-3">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${flag.badgeClass}`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-card-foreground">
                    {flag.label}
                  </span>
                  <span className={`h-1.5 w-1.5 rounded-full ${flag.dotClass}`} />
                </div>
                <p className="text-xs text-muted-foreground">{flag.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LimitationsFooter() {
  return (
    <div className="flex items-start gap-2 rounded-2xl bg-trust-warm p-4">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
      <p className="text-xs leading-relaxed text-muted-foreground">
        TrustLens uses AI-assisted signals and public metadata. Results are not
        legal evidence and should be cross-checked with primary sources.
      </p>
    </div>
  );
}
