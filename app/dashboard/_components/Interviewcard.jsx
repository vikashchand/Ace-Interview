import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import React from 'react'

function Interviewcard({interview}) {

const router =useRouter();

const  onStart=()=>{
    router.push('dashboard/interview/'+interview?.mockId)
}

const  onfeedback=()=>{
    router.push('dashboard/interview/'+interview?.mockId+"/feedback")
}
  return (
    <div className='border shadow-sm rounded-lg p-3'>

    <h2 className='font-bold text-primary'> Job Position:{interview?.jobPosition}</h2>
    <h2 className='text-sm text-gray-500'>{interview?.jobExperience} Years of Experience </h2>
    <h2 className='text-xs text-gray-500'>Created At: {interview.createdAt}</h2>
<div>


</div >

<div className='flex justify-between my-2 gap-5'>

<Button size="sm" variant="outline" className="w-full"  onClick={onfeedback}

>Feedback</Button>
<Button size="sm"  className="w-full" onClick={onStart} >Start</Button>

</div>
    </div>
  )
}

export default Interviewcard