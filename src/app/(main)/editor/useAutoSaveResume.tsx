import useDebounce from "@/hooks/useDebounce";
import { ResumeValues } from "@/lib/validation";
import React from "react";

export default function useAutoSaveResume(resumeData: ResumeValues) {
  const debouncedResumeData = useDebounce(resumeData, 1500);

  const [lastSavedData, setLastSavedData] = React.useState(
    structuredClone(resumeData)
  );

  return <div>useAutoSaveResume</div>;
}
