import { GeneralInfoValues } from "@/lib/validation";
import React from "react";
import { useForm } from "react-hook-form";
import { ZodReadonly } from "zod";

export default function GeneralInfoForm() {
  const form = useForm<GeneralInfoValues>({
    resolver: ZodReadonly
  })
  return <div>GeneralInfoForm</div>;
}
