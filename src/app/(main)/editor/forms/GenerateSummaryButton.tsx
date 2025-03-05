import React from "react";
import { ResumeValues } from "@/lib/validation";

interface GenerateSummaryButtonProps {
  resumeData: ResumeValues;
  onSummaryGenerated: (summary: string) => void;
}
export default function GenerateSummaryButton() {
  return <div>GenerateSummaryButton</div>;
}
