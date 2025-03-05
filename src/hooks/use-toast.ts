"use client"

import * as React from "react";
import { toast as sonnerToast } from "sonner";

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ToastOptions = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
};

function toast({ title, description, action }: ToastOptions) {
  const id = genId();
  
  sonnerToast(title || "Notification", {
    description,
    action,
    id,
  });

  return {
    id,
    dismiss: () => sonnerToast.dismiss(id),
    update: (options: ToastOptions) =>
      sonnerToast(title || "Notification", { ...options, id }),
  };
}

function useToast() {
  return {
    toast,
    dismiss: (toastId?: string) => sonnerToast.dismiss(toastId),
  };
}

export { useToast, toast };
