import {Home , Inbox , Calendar , Search , Settings, User2, ChevronUp, LogOut, User2Icon, Plus, Projector} from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "./ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { DropdownMenu, DropdownMenuTrigger ,DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"

const items = [
    {
        title:"Home",
        url:"/",
        icon:Home
    },
    {
        title:"Inbox",
        url:"/",
        icon:Inbox
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
    {
        title:"Calendar",
        url:"/",
        icon:Calendar
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
                                DashBoard
                            </span>
                            </Link>
                         </SidebarMenuButton>
                    </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator/>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>
                    Application 
                </SidebarGroupLabel>
                <SidebarMenu>
                  {items.map((item)=>(
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                           <Link href={item.url}>
                            <item.icon/>
                            <span>{item.title}</span>
                           </Link> 
                        </SidebarMenuButton>
                    
                </SidebarMenuItem>
                  ))}
                </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup>
                <SidebarGroupLabel>
                    Projects
                </SidebarGroupLabel>
                <SidebarMenuAction>
                    <Plus/><span className="sr-only">Add Project</span>
                </SidebarMenuAction>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link href="/#">
                            <Projector/>
                            See All Project
                            </Link>
                           </SidebarMenuButton>  
                        </SidebarMenuItem>
                         <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link href="/#">
                            <Plus/>
                            Add Project
                            </Link>
                           </SidebarMenuButton>  
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
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
