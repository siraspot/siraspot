"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export default function PremiumModal() {
  return (
    <Dialog open>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Resume Builder AI Premium</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <p>Get a premium subscription to unlock more features.</p>
          <div className="flex">
            <div className="flex w-1/2 flex-col space-y-5">
            <h3 className="text-center text-lg font-bold">Premium</h3></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
