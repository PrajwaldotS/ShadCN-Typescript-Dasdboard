import { Settings, User2, Activity, School , BookOpenText, Shield ,     ChevronUp, LogOut, User2Icon,Projector, } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuTrigger ,DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"



const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" >
        <SidebarHeader className="py-4">
            <SidebarMenu>
                <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                            <Image src="/favicon.ico" alt="logo"
                            width={20} height={20}/>
                            <span className="text-xl font-extrabold">
                             Dashboard 
                            </span>
                            </Link>
                         </SidebarMenuButton>
                    </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator/>
        <SidebarContent className="sidebarcontent">
           
           
           
<SidebarGroup>
  
  <SidebarGroupContent>
    <SidebarMenu>

      {/* Security Overview ITEM */}
      
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/#" className="text-l font-extrabold">
            <Shield />
            Cyber Security
          </Link>
        </SidebarMenuButton>

        {/*  SUB ITEMS */}
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
               Threat Analytics
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>

          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
                Cyber Attack Volume Trend
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
           <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
              Total Threat Dectection 
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
          
        </SidebarMenuSub>
        
        
      </SidebarMenuItem>
      {/* Incident Response ITEM */}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/college-placement" className="text-l font-extrabold">
            <BookOpenText />
            College Placement 
          </Link>
        </SidebarMenuButton>

        {/*  SUB ITEMS */}
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/college-placement">
               Branch-wise Placement
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>

          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/college-placement">
                Internship vs Full-time  
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
           <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/college-placement">
              Year-wise placement 
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
          
        </SidebarMenuSub>
        
        
      </SidebarMenuItem>
      {/* Assets & Monitoring ITEM */}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/campus-operation" className="text-l font-extrabold">
            <School/>
           Campus Operations 
          </Link>
        </SidebarMenuButton>

        {/*  SUB ITEMS */}
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/campus-operation">
              Energy Consumption
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>

          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/campus-operation">
               Operations Performance
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
           <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/campus-operation">
              Maintenance Resolution
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
          
        </SidebarMenuSub>
        
        
      </SidebarMenuItem>
      {/* Identity & Access ITEM */}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/fitness" className="text-l font-extrabold">
            <Activity />
            Fitness Tracker
          </Link>
        </SidebarMenuButton>

        {/*  SUB ITEMS */}
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/fitness">
              Calorie Burn Trend
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>

          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/fitness">
                Recent Workouts
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
           <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/fitness">
              Workout Completed
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
          
        </SidebarMenuSub>
        
        
        
      </SidebarMenuItem>
      {/* System ITEM */}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/#" className="text-l font-extrabold">
            <User2/>
            System
          </Link>
        </SidebarMenuButton>

        {/*  SUB ITEMS */}
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/users">
             User
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>

          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/users">
                Login Activity
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
  
       </SidebarMenuSub>
        
        
        
      </SidebarMenuItem>
      

    </SidebarMenu>
  </SidebarGroupContent>
</SidebarGroup>

        </SidebarContent>
        <SidebarSeparator/>
        <SidebarFooter>
            <SidebarMenu>
               <SidebarMenuItem>
                  <DropdownMenu>
                     <DropdownMenuTrigger asChild>
                        <SidebarMenuButton>
                            <User2/> Prajwal <ChevronUp  className="ml-auto"/>
                        </SidebarMenuButton>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent align="end">
                        <DropdownMenuItem >
                            <User2Icon/>
                            <Link href="/users">
                              Account
                            </Link>
                        </DropdownMenuItem>
                        
                        <DropdownMenuItem variant="destructive">
                            <LogOut/>
                            Signout
                        </DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem> 
            </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
