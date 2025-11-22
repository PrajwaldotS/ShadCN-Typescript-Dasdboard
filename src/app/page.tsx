import { AppAreaChart } from '@/components/AppAreaChart'
import AppBarChart from '@/components/AppBarChart'
import Appradialchart from '@/components/Appradialchart'
import Cardlist from '@/components/Cardlist'
import { ChartRadarDots } from '@/components/ChartRadarDots'
import Todolist from '@/components/Todolist'


const page = () => {
  return (
   
   <div className='grid gird-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 chart'>
    <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'><AppBarChart/></div>
    <div className='bg-primary-foreground p-4 rounded-lg'><Cardlist title="Lastest Transition"/></div>
    <div className='bg-primary-foreground p-4 rounded-lg'><ChartRadarDots/></div>
    <div className='bg-primary-foreground p-4 rounded-lg'><Todolist/></div>
    <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'><AppAreaChart/></div>
    <div className='bg-primary-foreground p-4 rounded-lg'><Appradialchart/></div>

   </div>
  )
}

export default page
