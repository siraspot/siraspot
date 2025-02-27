import { Metadata } from 'next'
import React from 'react'
import ResumeEditor from './ResumeEditor'

export const metadata: Metadata = {
    title: 'Design your resume',
    description: 'page'
}

export default function page() {
  return (
    <ResumeEditor />
  )
}
