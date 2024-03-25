import React from 'react'
import { Link } from 'react-router-dom'

export default function OptionSelector() {
  return (
    <div >
        <Link to='/questionUploader' className='m-2'>Edit Question</Link>
        <Link to='/questionBank' className='m-2'>Take a quiz</Link>

        
    </div>
  )
}
