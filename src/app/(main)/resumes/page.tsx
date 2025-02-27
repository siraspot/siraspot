import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Your resumes",
  description: "page",
}

export default function page() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6">
      <Button>
        <Link href="/editor">
        </Link>
      </Button>
    </main>
  );
}
