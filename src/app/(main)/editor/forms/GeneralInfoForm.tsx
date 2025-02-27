import { generalInfoSchema, GeneralInfoValues } from "@/lib/validation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function GeneralInfoForm() {
  const form = useForm<GeneralInfoValues>({
    resolver: ZodResolver(generalInfoSchema)
  })
  return <div>GeneralInfoForm</div>;
}
