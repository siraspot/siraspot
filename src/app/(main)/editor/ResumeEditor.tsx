"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
// import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function ResumeEditor() {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get("step") || steps[0].key;

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep
  )?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
      </header>
      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div className="w-full p-3 md:w-1/2 overflow-y-auto">
            <Breadcrumb currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && (
              <FormComponent
                // resumeData={resumeData}
                // setResumeData={setResumeData}
              />
            )}
          </div>
          <div className="grow md:border-r" />
          <div className="hidden w-1/2 md:flex">right</div>
        </div>
      </main>
      <footer className="w-full border-t px-3 py-5 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button variant="secondary">Previous step</Button>
            <Button>Next step</Button>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" asChild>
              <>
                <Link href="/resumes">Close</Link>

                <p className="text-muted-foreground">Saving...</p>
              </>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
