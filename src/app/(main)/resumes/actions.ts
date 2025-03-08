"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function deleteResume(id: string) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const resume = await prisma.resume.findUnique({
    where: {
      id,
      userId,
    },
    include: {
      workExperiences: true,
      educations: true,
    },
  });

  if (!resume) {
    throw new Error("Resume not found");
  }

  console.log("resume ==>", resume);

  // Delete related work experiences and education first
  await prisma.workExperience.deleteMany({
    where: { resumeId: id },
  });

  await prisma.education.deleteMany({
    where: { resumeId: id },
  });

  if (resume.photoUrl) {
    await del(resume.photoUrl);
  }

  await prisma.resume.delete({
    where: {
      id,
    },
  });

  revalidatePath("/resumes");
}

// const workEx = await prisma.workExperience.findUnique({
//   where: {
//     id,
//     // userId,
//   },
// });

// console.log("work experience ==>", workEx);

// if (resume.workExperiences) {
//   await del(resume.workExperiences);
// }
