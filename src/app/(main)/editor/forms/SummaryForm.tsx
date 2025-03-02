import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Textarea } from "@/components/ui/textarea";
  import { EditorFormProps } from "@/lib/types";
  import { summarySchema, SummaryValues } from "@/lib/validation";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useForm } from "react-hook-form";

  export default function SummaryForm({
    resumeData,
    setResumeData,
  }: EditorFormProps) {
    const form = useForm<SummaryValues>({
      resolver: zodResolver(summarySchema),
      defaultValues: {
        summary: resumeData.summary || "",
      },
    });
  return (
    <div>SummaryForm</div>
  )
}
