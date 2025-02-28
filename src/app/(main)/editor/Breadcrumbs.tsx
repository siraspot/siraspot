import React from 'react'

interface BreadcrumbsProps {
    currentStep: string;
    setCurrentStep: (step: string) => void;
  }
  
  export default function Breadcrumbs({
    currentStep,
    setCurrentStep,
  }: BreadcrumbsProps) {
  return (
    <div>Breadcrumbs</div>
  )
}
