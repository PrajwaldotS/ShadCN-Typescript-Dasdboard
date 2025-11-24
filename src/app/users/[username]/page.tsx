import Cardlist from '@/components/Cardlist'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Progress } from '@/components/ui/progress'
import { BadgeCheck, Headphones, PenTool, Sparkles } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChartLineMultiple } from '@/components/ChartLineMultiple'

const SingleUserPage = () => {
  return (
    <div>
     <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Jhon Doe</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
{/* Container */}
    <div className='mt-4 flex felx-col xl:flex-rwo gap-8'>
      {/* LEFT */}
      <div className="w-full xl:w-1/3 space-y-6">
      {/* USER BADGES CONTAINER */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <h1 className='text-xl font-semibold'>User Badges</h1>
        <div className='flex gap-4 mt-4'>
          <HoverCard>
            <HoverCardTrigger><BadgeCheck size={36} className='rounded-full bg-blue-500/30 border border-blue-500/50 p-2' /></HoverCardTrigger>
            <HoverCardContent>
              <h1 className='font-bold text-lg text-blue-500'>Verified User</h1>
              <p>This User has been verified by admin</p>
            </HoverCardContent>
        </HoverCard>
        <HoverCard>
  <HoverCardTrigger>
    <Sparkles
      size={36}
      className="rounded-full bg-green-500/30 border border-green-500/50 p-2"
    />
  </HoverCardTrigger>
  <HoverCardContent>
    <h1 className="font-bold text-lg text-green-600">New User</h1>
    <p>Joined recently and exploring the platform.</p>
  </HoverCardContent>
  <HoverCard>
  <HoverCardTrigger>
    <Headphones
      size={36}
      className="rounded-full bg-indigo-500/30 border border-indigo-500/50 p-2"
    />
  </HoverCardTrigger>
  <HoverCardContent>
    <h1 className="font-bold text-lg text-indigo-600">Support Team</h1>
    <p>This user helps resolve technical issues.</p>
  </HoverCardContent>
</HoverCard>

{/* 7. Contributor User */}
<HoverCard>
  <HoverCardTrigger>
    <PenTool
      size={36}
      className="rounded-full bg-orange-500/30 border border-orange-500/50 p-2"
    />
  </HoverCardTrigger>
  <HoverCardContent>
    <h1 className="font-bold text-lg text-orange-600">Contributor</h1>
    <p>Actively contributing to the platform content.</p>
  </HoverCardContent>
</HoverCard>

</HoverCard>
        </div>
      </div>
      {/* INFOMATION CONTAINER */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <div className='flex items-center justify-between'>
           <h1 className='text-xl font-semibold'>Information</h1>
           <Sheet>
            <SheetTrigger asChild>
              <Button>Edit User</Button>
            </SheetTrigger>
             <EditUser/>
           </Sheet>
        </div>
        <div className="space-y-4 mt-4 ">
          <div className="flex flex-col gap2 mb-8">
            <p className="text-sm text-muted-foreground mb-4">Profile compeltion</p>
            <Progress value={66}/>
          </div>
          {/* 1 */}
            <div className="flex items-center gap-2">
              <span className="font-bold">User ID:</span>
              <span>2294</span>
            </div>

            {/* 2 */}
            <div className="flex items-center gap-2">
              <span className="font-bold">User Name:</span>
              <span>Prajwal.S</span>
            </div>

            {/* 3 */}
            <div className="flex items-center gap-2">
              <span className="font-bold">Contact:</span>
              <span>9239921233</span>
            </div>

            {/* 4 */}
            <div className="flex items-center gap-2">
              <span className="font-bold">Email:</span>
              <span>Prajwal@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Role:</span>
              <Badge>Developer</Badge>
              <Badge>Admin</Badge>
            </div>

          
        </div>
        <p className='text-sm text-muted-foreground mt-4'>Joined on 2020</p>
      </div>
      {/* CARD LIST CONTAINER */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Cardlist title='Recent transition' />
         
      </div>

      </div>
      {/* RIGHT */}
       <div className="w-full xl:w-2/3 space-y-6">
        {/* USER CARD CONTAINER */}
      <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
       <div className="flex items-center gap-2">
         <Avatar className='size-12'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h1 className='text-xl font-semibold'>Rameshwaram</h1>
       
       </div>
        <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ex repellat aliquid ducimus reprehenderit? Ut eveniet, magni ad obcaecati voluptatum molestias temporibus deserunt quis et in iste ipsum blanditiis sit exercitationem reprehenderit ipsa repudiandae explicabo consequatur error quod impedit hic! Assumenda mollitia ipsa et aliquid dolore possimus? Reiciendis, ad quibusdam?</p>
      </div>
       {/* CHART CONTAINER */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <h1 className='ext-xl font-semibold mb-4 text-center'>User Activity</h1>
        <ChartLineMultiple/></div>
       </div>
    </div>
    </div>
  )
}

export default SingleUserPage
