import { Metadata } from "next";
import React from "react";
import ResumeEditor from "./ResumeEditor";
import prisma from "@/lib/prisma";
import { resumeDataInclude } from "@/lib/types";
import { auth } from "@clerk/nextjs/server";

interface PageProps {
  searchParams: Promise<{ resumeId?: string }>;
}

export const metadata: Metadata = {
  title: "Design your resume",
  description: "page",
};

export default async function Page({ searchParams }: PageProps) {
  const { resumeId } = await searchParams;

  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const resumeToEdit = resumeId
    ? await prisma.resume.findUnique({
        where: { id: resumeId, userId },
        include: resumeDataInclude,
      })
    : null;

  return <ResumeEditor resumeToEdit={resumeToEdit} />;
}
