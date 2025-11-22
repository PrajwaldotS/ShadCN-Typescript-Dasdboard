"use client";
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useState } from 'react'
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns";
import { Calendar } from './ui/calendar';


const Todolist = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open,setOpen] = useState(false)
  return (
    <div >
        <h1 className='text-lg font-medium text-center mb-4'>Todo List</h1>
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button className='flex justify-center bg-white w-full rounded text-black p-1'>
                    <CalendarIcon/>
                    {date ? format(date,"PPP"): <span>Pick a date</span>}
                </button>
            </PopoverTrigger>
            <PopoverContent>
                 <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date)=>{
                        setDate(date)
                        setOpen(false)
                    }}
                    className="rounded-md border shadow-sm"
                    captionLayout="dropdown"
                />
            </PopoverContent>
        </Popover>
      <ScrollArea className='todo max-h-[380px] mt-4 overflow-y-auto '>
      {/* List item */}
    
      <Card className='todo p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
      <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
      <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
      <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
      <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
      <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
      <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
      <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
      <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
      <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
      <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
        <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
        <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
        <Card className='p-4 my-2'>
        <div className="flex items-center gap-4">
            <Checkbox id='item1'/>
                <label htmlFor="item1" className='text-sm text-muted-foreground'>
                    Lorem ipsum dolor sit amet.
                </label>

           
        </div>
      </Card>
      </ScrollArea>
    </div>
  )
}

export default Todolist
