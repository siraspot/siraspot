import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t px-3 py-5 text-center">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-3">
        <div className="flex items-center gap-3">
          <Button variant="secondary">Previous step</Button>
          <Button>Next step</Button>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" asChild>
            <>
              <Link href="/resumes">Close</Link>

              <p className="text-muted-foreground">Saving...</p>
            </>
          </Button>
        </div>
      </div>
    </footer>
  );
}
