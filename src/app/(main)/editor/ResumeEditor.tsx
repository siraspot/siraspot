"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ResumeEditor() {
  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
      </header>
      <main>
        main 
      </main>
      <footer className="w-full border-t px-3 py-5 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-3">
            <div className="flex items-center gap-3">
                <Button variant="secondary">Previous step</Button>
                <Button>Next step</Button>
            </div>
            <div className="flex items-center gap-3">
                <Button variant="secondary" asChild>
                    <Link href="/resumes">
                        <a>Cancel</a>
                    </Link>
                </Button>
            </div>
        </div>
      </footer>
    </div>
  );
}
