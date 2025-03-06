import React from 'react'
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { WorkExperience } from '@/lib/validation';

interface GenerateWorkExperienceButtonProps {
  onWorkExperienceGenerated: (workExperience: WorkExperience) => void;
}

export default function GenerateWorkExperienceButton({
  onWorkExperienceGenerated,
}: GenerateWorkExperienceButtonProps) {
  const [showInputDialog, setShowInputDialog] = React.useState(false);

  return (
    <div>GenerateWorkExperienceButton</div>
  )
}
