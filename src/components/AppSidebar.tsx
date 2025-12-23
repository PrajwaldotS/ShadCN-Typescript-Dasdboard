import {Home , Inbox , Calendar , Search , Settings, User2, ChevronUp, LogOut, User2Icon, Plus, Projector, ChevronDown} from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem, SidebarSeparator } from "./ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuTrigger ,DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"

const items = [
    {
        title:"Home",
        url:"/",
        icon:Home
    },
    {
        title:"Users",
        url:"/users/username",
        icon:Inbox
    },
    {
        title:"Payment",
        url:"/payments",
        icon:Calendar
    },
    {
        title:"Settings",
        url:"/",
        icon:Settings
    },
    {
        title:"Search",
        url:"/",
        icon:Search
    },
    
]
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
                            <span>
                              Multi Purpose Dashboard 
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
          <Link href="/#">
            <Projector />
            Cyber Security Dashboard
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
          <Link href="/college-placement">
            <Projector />
            College Placement Dashboard
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
          <Link href="/campus-operation">
            <Projector />
           Campus Operations Dashboard
          </Link>
        </SidebarMenuButton>

        {/*  SUB ITEMS */}
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/campus-operation">
              Endpoints
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>

          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/campus-operation">
                Network Monitoring
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
           <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/campus-operation">
              Vulnerable Assets
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
          
        </SidebarMenuSub>
        
        
      </SidebarMenuItem>
      {/* Identity & Access ITEM */}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/#">
            <Projector />
            Identity & Access
          </Link>
        </SidebarMenuButton>

        {/*  SUB ITEMS */}
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
              Users
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>

          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
                Login Activity
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
           <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
            Suspicious Access
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
          
        </SidebarMenuSub>
        
        
        
      </SidebarMenuItem>
      {/* System ITEM */}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/#">
            <Projector />
            System
          </Link>
        </SidebarMenuButton>

        {/*  SUB ITEMS */}
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
             Settings
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>

          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
                Login Activity
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>
           <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
            Suspicious Access
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
                        <DropdownMenuItem>
                            <User2Icon/>
                           Account 
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Settings/>
                            Settings
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
