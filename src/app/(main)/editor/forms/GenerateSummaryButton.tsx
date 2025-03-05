import React from "react";
import { ResumeValues } from "@/lib/validation";

interface GenerateSummaryButtonProps {
  resumeData: ResumeValues;
  onSummaryGenerated: (summary: string) => void;
}

export default function GenerateSummaryButton({
    resumeData,
    onSummaryGenerated,
  }: GenerateSummaryButtonProps) {
    const { toast } = useToast();
  return <div>GenerateSummaryButton</div>;
}
