import React from "react";
import { ResumeValues } from "@/lib/validation";
import { useToast } from "@/hooks/use-toast";

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
  return <div>GenerateSummaryButton</div>;
}
