import useDebounce from "@/hooks/useDebounce";
import { ResumeValues } from "@/lib/validation";
import { useSearchParams } from "next/navigation";
import React from "react";
import { saveResume } from "./actions";

export default function useAutoSaveResume(resumeData: ResumeValues) {
  const searchParams = useSearchParams();
  const debouncedResumeData = useDebounce(resumeData, 1500);

  const [lastSavedData, setLastSavedData] = React.useState(
    structuredClone(resumeData)
  );

  const [resumeId, setResumeId] = React.useState(resumeData.id);

  const [isSaving, setIsSaving] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setIsError(false);
  }, [debouncedResumeData]);

  React.useEffect(() => {
    async function save() {
      try {
        setIsSaving(true);
        setIsError(false);
        const newData = structuredClone(debouncedResumeData);
        const updatedResume = await saveResume({
          ...newData,
          ...(lastSavedData.photo?.toString() === newData.photo?.toString() && {
            photo: undefined,
          }),
          id: resumeId,
          //       ...(JSON.stringify(lastSavedData.photo, fileReplacer) ===
          //         JSON.stringify(newData.photo, fileReplacer) && {
          //         photo: undefined,
          //       }),
        });
        setResumeId(updatedResume.id);
            setLastSavedData(newData);
        //     if (searchParams.get("resumeId") !== updatedResume.id) {
        //       const newSearchParams = new URLSearchParams(searchParams);
        //       newSearchParams.set("resumeId", updatedResume.id);
        //       window.history.replaceState(
        //         null,
        //         "",
        //         `?${newSearchParams.toString()}`,
        //       );
        //     }
      } catch (error) {
        //     setIsError(true);
        //     console.error(error);
        //     const { dismiss } = toast({
        //       variant: "destructive",
        //       description: (
        //         <div className="space-y-3">
        //           <p>Could not save changes.</p>
        //           <Button
        //             variant="secondary"
        //             onClick={() => {
        //               dismiss();
        //               save();
        //             }}
        //           >
        //             Retry
        //           </Button>
        //         </div>
        //       ),
        //     });
      } finally {
      }
    }

    // console.log(
    //   "debouncedResumeData",
    //   JSON.stringify(debouncedResumeData, fileReplacer)
    // );
    // console.log("lastSavedData", JSON.stringify(lastSavedData, fileReplacer));

    const hasUnsavedChanges =
      JSON.stringify(
        debouncedResumeData
        // , fileReplacer
      ) !==
      JSON.stringify(
        lastSavedData
        // , fileReplacer
      );

    if (hasUnsavedChanges && debouncedResumeData && !isSaving && !isError) {
      save();
    }
  }, [
    debouncedResumeData,
    isSaving,
    lastSavedData,
    isError,
    // resumeId,
    // searchParams,
    // toast,
  ]);

  return {
    isSaving,
    hasUnsavedChanges:
      JSON.stringify(resumeData) !== JSON.stringify(lastSavedData),
  };
}
