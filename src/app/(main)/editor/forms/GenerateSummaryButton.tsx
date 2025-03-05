import React from "react";
import { ResumeValues } from "@/lib/validation";
import { useToast } from "@/hooks/use-toast";
import LoadingButton from "@/components/LoadingButton";
import { WandSparklesIcon } from "lucide-react";

interface GenerateSummaryButtonProps {
  resumeData: ResumeValues;
  onSummaryGenerated: (summary: string) => void;
}

export default function GenerateSummaryButton({
    resumeData,
    onSummaryGenerated,
  }: GenerateSummaryButtonProps) {
    const { toast } = useToast();

    const [loading, setLoading] = React.useState(false);

    async function handleClick() {}
    return (
        <LoadingButton
          variant="outline"
          type="button"
          onClick={handleClick}
          loading={loading}
        >
          <WandSparklesIcon className="size-4" />
          Generate (AI)
        </LoadingButton>
      );
}
