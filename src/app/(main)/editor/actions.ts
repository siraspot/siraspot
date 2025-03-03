"use server";

import { ResumeValues } from "@/lib/validation";



export async function saveResume(values: ResumeValues) {
    const { id } = values;

    console.log("received values", values);

    const { photo, workExperiences, educations, ...resumeValues } =
    resumeSchema.parse(values);
}