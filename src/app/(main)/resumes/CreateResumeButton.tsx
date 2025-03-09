"use client";

import { Button } from "@/components/ui/button";
import usePremiumModal from "@/hooks/usePremiumModal";
import { PlusSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CreateResumeButtonProps {
  canCreate: boolean;
}

export default function CreateResumeButton({
    canCreate,
  }: CreateResumeButtonProps) {
  return <div>CreateResumeButton</div>;
}
