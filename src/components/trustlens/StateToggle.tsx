interface StateToggleProps {
  current: "upload" | "loading" | "results";
  onChange: (state: "upload" | "loading" | "results") => void;
}

export function StateToggle({ current, onChange }: StateToggleProps) {
  const states: { value: "upload" | "loading" | "results"; label: string }[] = [
    { value: "upload", label: "Upload" },
    { value: "loading", label: "Loading" },
    { value: "results", label: "Results" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-full bg-card p-1 shadow-md shadow-foreground/5">
      {states.map((s) => {
        const active = current === s.value;
        return (
          <button
            key={s.value}
            onClick={() => onChange(s.value)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-card-foreground"
            }`}
          >
            {s.label}
          </button>
        );
      })}
    </div>
  );
}
