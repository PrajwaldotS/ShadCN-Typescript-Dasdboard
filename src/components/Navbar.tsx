"use client"
import { LogOut, Menu, MenuIcon, Moon, Settings, Sun, User } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { Avatar, AvatarImage,AvatarFallback } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from './ui/button'
import { useTheme } from 'next-themes'
import { SidebarTrigger, useSidebar } from './ui/sidebar'

const Navbar = () => {
  const {theme , setTheme } = useTheme();
  const {toggleSidebar} = useSidebar();
  return (
    <nav className='p-4 flex items-center justify-between'>
        {/* Left */}
        <SidebarTrigger/>
        {/* <Button variant="outline" onClick={toggleSidebar}>
          <MenuIcon/>
        </Button> */}
        {/* Right */}
        <div className='flex items-center gap-4'>
          <Link href="/">DashBoard</Link>
          {/* theme dropdow */}
           <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
          {/* User dropdown */}
         <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
           <DropdownMenuContent>
             <DropdownMenuLabel>
              My Account
              </DropdownMenuLabel>
             <DropdownMenuSeparator />
             <DropdownMenuItem>
               <User className='h-[1.2rem] w-[1.2rem] mr-2'/> Profile
               </DropdownMenuItem>
             <DropdownMenuItem>
              <Settings className='h-[1.2rem] w-[1.2rem] mr-2'/>Settings
               </DropdownMenuItem>
             <DropdownMenuItem variant='destructive'>
              <LogOut className='h-[1.2rem] w-[1.2rem] mr-2'/> Logout
              </DropdownMenuItem>
            
             </DropdownMenuContent>
         </DropdownMenu>
        </div>
    </nav>
  )
}

export default Navbar
