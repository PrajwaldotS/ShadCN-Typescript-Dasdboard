"use client";
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
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm } from "react-hook-form";
import { z } from "zod"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
const EditUser = () => {
const formSchema = z.object({
  username: z.string()
    .min(2, { message: "Username should be more than 2 characters!" })
    .max(50, { message: "Username cannot exceed 50 characters!" }),
      email: z.string()
    .email({ message: "Please enter a valid email address!" }),

  userId: z.string()
    .min(3, { message: "User ID must contain at least 3 characters!" })
    .max(20, { message: "User ID cannot exceed 20 characters!" }),

  contact: z.string()
    .regex(/^[0-9]{10}$/, { message: "Contact number must be 10 digits!" }),

   role: z.enum(["admin", "user"]) 

});
const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email:"",
      userId:"",
      contact:"",
      role:"admin"

    },
  })

  return (
   <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-4">Edit User Details</SheetTitle>
          <SheetDescription asChild>
          <Form {...form}>
             <form className="space-y-4">
            <FormField control={form.control} name="username" render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormDescription>
                This is your public User name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
            />       
              <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormDescription>
                Only Admin can see Your Email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
            /> 
              <FormField control={form.control} name="contact" render={({ field }) => (
            <FormItem>
              <FormLabel>Contact</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormDescription>
                 Only Admin can see Your Email .
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
            /> 
              <FormField control={form.control} name="userId" render={({ field }) => (
            <FormItem>
              <FormLabel>UserId</FormLabel>
              <FormControl>
                <Input  {...field} />
              </FormControl>
              <FormDescription>
                This is your User Id .
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
            /> 
             <FormField control={form.control} name="role" render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="dark">Developer</SelectItem>
                    </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Only verified Users can be admin
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
            /> 
            <Button>Submit</Button>
                </form>
                </Form>
          
          </SheetDescription>
        </SheetHeader>
    </SheetContent>
  )
}

export default EditUser
