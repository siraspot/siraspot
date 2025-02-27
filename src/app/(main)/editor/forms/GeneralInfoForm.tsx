import { generalInfoSchema, GeneralInfoValues } from "@/lib/validation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function GeneralInfoForm() {
  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
        title: "",
        // resumeData.title || "",
        description: "",
        // resumeData.description || "",
      },
  })
  return <div className="max-w-xl mx-auto space-y-6">
    <div className="space-y-1.5 text-center"></div>
  </div>;
}
