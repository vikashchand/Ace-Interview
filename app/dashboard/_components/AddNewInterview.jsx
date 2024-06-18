"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import {v4 as uuidv4} from 'uuid';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModal'
import { LoaderCircle } from 'lucide-react'
import { MockInterview } from '@/utils/schema'
import { useUser } from '@clerk/nextjs';
import moment from 'moment/moment';
import { db } from '@/utils/db';
import { useRouter } from 'next/navigation';
  
function AddNewInterview() {
    const [openDailog,setOpenDailog]=useState(false)
    const [jobPosition,setjobPosition]=useState();
    const [jobDesc,setjobDesc]=useState();
    const [jobExperience,setjobExperience ]=useState();
    const [loading,setLoading]=useState(false);
    const [jsonResponse,setjsonResponse]=useState([]);
    const router=useRouter();
const {user}=useUser();
    const onSubmit= async(e)=>{
      setLoading(true)
        e.preventDefault()
        console.log(jobDesc,jobExperience,jobPosition);

        const InputPrompt="job Position: "+jobPosition+" , Job Description: "+jobDesc+", Years of Experience: "+jobExperience+" , Depends on this information please give me 5 mostly asked Interview question with Answers in Json Format, Give question field and answer field in JSON "
   const result=await chatSession.sendMessage(InputPrompt);
   console.log(result);
   const MockJsonResp=(result.response.text()).replace('```json','').replace('```','')
 
   setjsonResponse(MockJsonResp);

   if(MockJsonResp){ 
   const resp=await db.insert(MockInterview).values({
    mockId:uuidv4(),
    jsonMockResp:MockJsonResp,
    jobPosition:jobPosition,
    jobDesc:jobDesc,
    jobExperience:jobExperience,
    createdBy:user?.primaryEmailAddress?.emailAddress,
    createdAt:moment().format('DD-MM-yyyy')
   }).returning({mockId:MockInterview.mockId});
   console.log("inserted",resp);

if(resp){
  setOpenDailog(false);
  router.push('/dashboard/interview/'+resp[0]?.mockId)
}

  }
  else {
    console.log("error");
  }
   setLoading(false);
      }
  return (
    <div> 
    <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all' onClick={()=>setOpenDailog(true)}>
    <h2 className=' text-lg text-center'>+Add New</h2>
    
    </div>
    <Dialog open={openDailog}>
  
  <DialogContent className='max-w-2xl'>
    <DialogHeader>
      <DialogTitle  className=' text- 2xl '>Tell us more about Your Job Interviewing</DialogTitle>
      <DialogDescription>
      <form onSubmit={onSubmit}>
       <div> 
      
       <h2>Add Details about your job position/role,Job description and years of experience</h2>


       <div className='mt-7 my-3'>  
<label>Job Role/Job Position</label>
<Input placeholder="Ex:Full-Stack Developer" required 
onChange={(event)=>setjobPosition(event.target.value)}

/>
</div>


<div className='mt-7 my-3'>  
<label>Job Description/ Tech Stack (In Short)</label>
<Textarea placeholder="Ex:React, Angular, Nodejs etc" required 
onChange={(event)=>setjobDesc(event.target.value)}

/>
</div>

<div className=' my-3'>  
<label>Years of Experience</label>
<Input placeholder="Ex:2" type="number" max="50 " required 

onChange={(event)=>setjobExperience(event.target.value)}

/>
</div>

</div>

        <div className='flex gap-5 justify-end'>
        <Button type="button" variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
        <Button type="submit" disabled={loading}>
        {loading?
          <> 
          <LoaderCircle className='animate-spin' />'Generating from AI'
        
        </>: 'Start Interview'
        }
        </Button>
        </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview