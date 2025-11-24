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
                                DashBoard
                            </span>
                            </Link>
                         </SidebarMenuButton>
                    </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator/>
        <SidebarContent className="sidebarcontent">
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
                    {item.title === "Inbox" && (
                        <SidebarMenuBadge>35</SidebarMenuBadge>
                    )}
                </SidebarMenuItem>
                  ))}
                </SidebarMenu>
            </SidebarGroup>
            {/* Collapsible sidebar section */}
            <Collapsible>
            <SidebarGroup>
            
                <SidebarGroupLabel>
                   Collapsible  Projects
                </SidebarGroupLabel>
                <SidebarMenuAction>
                    <CollapsibleTrigger asChild>
                <ChevronDown  className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180"/>
                </CollapsibleTrigger><span className="sr-only">Add Project</span>
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
                        <CollapsibleContent>
                         <SidebarMenuItem>
                       <SidebarMenuButton asChild>
                            <Link href="/#">
                            <Plus/>
                            Add Project
                            </Link>
                           </SidebarMenuButton>  
                           
                        </SidebarMenuItem>
                        </CollapsibleContent>
                        
                         <CollapsibleContent>
                         <SidebarMenuItem>
                       <SidebarMenuButton asChild>
                            <Link href="/#">
                            <Plus/>
                            Add Project
                            </Link>
                           </SidebarMenuButton>  
                           
                        </SidebarMenuItem>
                        </CollapsibleContent>
                           <CollapsibleContent>
                         <SidebarMenuItem>
                       <SidebarMenuButton asChild>
                            <Link href="/#">
                            <Plus/>
                            Add Project
                            </Link>
                           </SidebarMenuButton>  
                           
                        </SidebarMenuItem>
                        </CollapsibleContent>
                           <CollapsibleContent>
                         <SidebarMenuItem>
                       <SidebarMenuButton asChild>
                            <Link href="/#">
                            <Plus/>
                            Add Project
                            </Link>
                           </SidebarMenuButton>  
                           
                        </SidebarMenuItem>
                        </CollapsibleContent>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            </Collapsible>
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
            <SidebarGroup>
  <SidebarGroupLabel>Sub Projects</SidebarGroupLabel>

  <SidebarMenuAction>
    <Plus />
    <span className="sr-only">Add Project</span>
  </SidebarMenuAction>

  <SidebarGroupContent>
    <SidebarMenu>

      {/* MAIN ITEM */}
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href="/#">
            <Projector />
            See All Project
          </Link>
        </SidebarMenuButton>

        {/* SUB ITEMS */}
        <SidebarMenuSub>
          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
                <Plus />
                Add Project
              </Link>
            </SidebarMenuButton>
          </SidebarMenuSubItem>

          <SidebarMenuSubItem>
            <SidebarMenuButton asChild>
              <Link href="/#">
                <Plus />
                Add Project
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
