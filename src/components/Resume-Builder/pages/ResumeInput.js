import React from 'react'
import { useRouter } from 'next/router'

const ResumeInput = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Contact</h1>
      <button type="button" onClick={() => router.push('./Confirmation.js')}></button>
    </div>
  )
}

export default ResumeInput
