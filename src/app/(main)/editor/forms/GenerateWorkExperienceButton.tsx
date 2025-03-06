import React from 'react'
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

interface GenerateWorkExperienceButtonProps {
  onWorkExperienceGenerated: (workExperience: WorkExperience) => void;
}

export default function GenerateWorkExperienceButton({
  onWorkExperienceGenerated,
}: GenerateWorkExperienceButtonProps) {
  return (
    <div>GenerateWorkExperienceButton</div>
  )
}
