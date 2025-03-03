"use server";

import { resumeSchema, ResumeValues } from "@/lib/validation";



export async function saveResume(values: ResumeValues) {
    const { id } = values;

    console.log("received values", values);

    const { photo, workExperiences, educations, ...resumeValues } =
    resumeSchema.parse(values);

    const { userId } = await auth();
  
    if (!userId) {
      throw new Error("User not authenticated");
    }
}