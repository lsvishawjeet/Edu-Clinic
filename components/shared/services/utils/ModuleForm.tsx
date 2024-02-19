"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
  import { z } from "zod"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
  
 
const ModuleFormSchema = z.object({
  name: z.string().min(2).max(50),
  detail:z.string().min(2).max(50),
  isPaid:z.enum(['free' , 'paid']),
  url: z.string().min(7),
  fees:z.string().min(2).max(7),
}).refine((data)=>{
    if(data.isPaid=="paid"){
        return !!data.fees
    }
    return true
} , {
    message:'Please Provide Ammount',
    path:['fees']
})
  
const ModuleForm = () => {

  const [Image, setImage] = useState<any>(null);
  


    const form = useForm<z.infer<typeof ModuleFormSchema>>({
        resolver: zodResolver(ModuleFormSchema),
        defaultValues: {
          name: "",
          detail:'',
          fees:''

        },

      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof ModuleFormSchema>) {
        alert(Image);
        
        console.log(values)
      }

      const PaidOrNot = form.watch("isPaid");

  return (
    <div>
      <AlertDialog >
  <AlertDialogTrigger>Add Module</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Add New Module</AlertDialogTitle>
      <AlertDialogDescription>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Module Name" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full">
        <Input onChange={(e)=>{
                  setImage(e.target.files);
                }} type="file" />
        </div>
        <FormField
          control={form.control}
          name="detail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Detail</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="Describe your module here" />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isPaid"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Paid/Free</FormLabel>
              <FormControl>
              <Select onValueChange={field.onChange} >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free" >Free</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
        

        {
            PaidOrNot == "paid" && (
                <FormField
          control={form.control}
          name="fees"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Module Price</FormLabel>
              <FormControl>
                <Input  placeholder="Your Module Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            )
        }

      <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Module Price</FormLabel>
              <FormControl>
                <Input  placeholder="Your Module Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full bg-zinc-900 " type="submit">Submit</Button>
        <div className="w-full">
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        </div>
      </form>
    </Form>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}

export default ModuleForm
