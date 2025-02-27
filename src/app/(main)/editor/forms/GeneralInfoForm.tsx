import { generalInfoSchema, GeneralInfoValues } from "@/lib/validation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";

export default function GeneralInfoForm() {
  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
      title: "",
      // resumeData.title || "",
      description: "",
      // resumeData.description || "",
    },
  });
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">General Info</h2>
        <p className="text-sm text-muted-foreground">
            This will not appear in your resume. It is for your reference only.
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-3"></form>
      </Form>
    </div>
  );
}
