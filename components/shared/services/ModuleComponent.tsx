"use client"

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'
import ModuleForm from './utils/ModuleForm'

  type moduleComponentProps = {
    serviceId:string
    categoryName:string
    moduleCategoryId:string
  }
const ModuleComponent = ({serviceId , categoryName , moduleCategoryId} : moduleComponentProps) => {



    
  return (
    <div className='w-full  md:pl-36  md:pr-36 p-3'>
      <p>{categoryName} {moduleCategoryId}</p>
      <div className='mt-5 flex justify-between'>
        <h1 className='text-xl text-zinc-900 font-bold' >Your Modules</h1>
        <Button className='bg-zinc-800 hover:bg-blue-700 font-normal' >
            <Plus className='mr-2' size={15}/> 
             <ModuleForm id={serviceId} type='ADD' categoryName={categoryName} moduleCategoryId={moduleCategoryId}  />
        </Button>
      </div>
      <div className='border-b w-full mt-3' ></div>
    </div>
  )
}

export default ModuleComponent
