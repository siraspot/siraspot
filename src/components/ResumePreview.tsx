import React from 'react'
import { BorderStyles } from "@/app/(main)/editor/BorderStyleButton";
import useDimensions from "@/hooks/useDimensions";
import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";
import { formatDate } from "date-fns";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Badge } from "./ui/badge";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}

export default function ResumePreview({
  resumeData,
  className,
}: ResumePreviewProps) {
    const containerRef = useRef<HTMLDivElement>(null);
  
    const { width } = useDimensions(containerRef);
  return (
    <div>ResumePreview</div>
  )
}
