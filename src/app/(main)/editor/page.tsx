import { Metadata } from "next";
import React from "react";
import ResumeEditor from "./ResumeEditor";

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
  return <ResumeEditor />;
}
