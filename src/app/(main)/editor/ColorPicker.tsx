import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PaletteIcon } from "lucide-react";
import { Color, ColorChangeHandler, TwitterPicker } from "react-color";

interface ColorPickerProps {
    color: Color | undefined;
    onChange: ColorChangeHandler;
  }

export default function ColorPicker() {
  return (
    <div>ColorPicker</div>
  )
}
