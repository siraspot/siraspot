import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { generalInfoSchema, GeneralInfoValues } from "@/lib/validation";
import { EditorFormProps } from "@/lib/types";

export default function GeneralInfoForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<GeneralInfoValues>({
    resolver: zodResolver(generalInfoSchema),
    defaultValues: {
      title: resumeData.title || "",
      description: resumeData.description || "",
    },
  });

  React.useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();
      if (!isValid) return;
      setResumeData({ ...resumeData, ...values });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);
  
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">General Info</h2>
        <p className="text-sm text-muted-foreground">
          This will not appear in your resume. It is for your reference only.
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="My cool resume" autoFocus />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="A resume for my next job" />
                </FormControl>
                <FormDescription>
                  Describe what this resume is for.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
