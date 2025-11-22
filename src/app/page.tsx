import AppBarChart from '@/components/AppBarChart'
import Appradialchart from '@/components/Appradialchart'
import AppAreaChart from '@/components/AppAreaChart'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CirclePlus } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
   
   <div className='grid gird-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>
    <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'><AppBarChart/></div>
    <div className='bg-primary-foreground p-4 rounded-lg'><AppAreaChart/></div>
    <div className='bg-primary-foreground p-4 rounded-lg'>Test</div>
    <div className='bg-primary-foreground p-4 rounded-lg'>Test</div>
    <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'><Appradialchart/></div>
    <div className='bg-primary-foreground p-4 rounded-lg'>Test</div>

   </div>
  )
}

export default page
