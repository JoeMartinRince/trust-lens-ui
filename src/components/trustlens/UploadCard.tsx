import { useState, useCallback } from "react";
import { CloudUpload, Link2, Image, Film } from "lucide-react";

interface UploadCardProps {
  onAnalyze: () => void;
}

export function UploadCard({ onAnalyze }: UploadCardProps) {
  const [url, setUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      onAnalyze();
    },
    [onAnalyze]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze();
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-card p-6 shadow-xl shadow-foreground/5">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-card-foreground">
          Verify media authenticity
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Upload an image or video, or paste a URL to check for manipulation and
          trace the source.
        </p>
      </div>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 transition-colors ${
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border bg-secondary/50"
        }`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mint-soft text-mint">
          <CloudUpload className="h-7 w-7" />
        </div>
        <p className="mt-4 text-sm font-medium text-card-foreground">
          Drop an image or video here
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          JPG, PNG, MP4 up to 50 MB
        </p>
      </div>

      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs font-medium text-muted-foreground">or</span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Link2 className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste image or video URL"
            className="h-12 w-full rounded-full border border-input bg-background pl-11 pr-4 text-sm text-foreground outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <button
          type="submit"
          className="h-12 w-full rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-colors hover:bg-primary/90"
        >
          Analyze
        </button>
      </form>

      <div className="mt-6 flex justify-center gap-4">
        <div className="flex items-center gap-2 rounded-full bg-trust-blue-soft px-3 py-1.5 text-xs font-medium text-trust-blue">
          <Image className="h-3.5 w-3.5" />
          Images
        </div>
        <div className="flex items-center gap-2 rounded-full bg-trust-purple-soft px-3 py-1.5 text-xs font-medium text-trust-purple">
          <Film className="h-3.5 w-3.5" />
          Videos
        </div>
      </div>
    </div>
  );
}
