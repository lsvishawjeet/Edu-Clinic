import ExpertNav from '@/components/shared/expert/ExpertNav'
import OrgNav from '@/components/shared/services/OrgNav'
import { getAppliedApprovalOrganization, getunApprovedModules } from '@/lib/database/actions/expert.action'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExpertCompany from '@/components/shared/expert/ExpertCompany'
import ExpertModules from '@/components/shared/expert/ExpertModules'


const page = async () => {

  const orgs = await getAppliedApprovalOrganization();
  const modules = await getunApprovedModules();

  
  return (
    <div>
      <ExpertNav/>


      {/* EXPERT ORGANIZATION AND MODULE TRANSITION SECTIONS */}

      <div className='min-h-screen w-full px-32 py-10' >
      <Tabs defaultValue="org" className="w-full">
    <div className='h-16 border-b' >
    <TabsList>
    <TabsTrigger value="org">Organizations</TabsTrigger>
    <TabsTrigger value="2">Modules</TabsTrigger>
    <TabsTrigger value="3">Individuals</TabsTrigger>
    <TabsTrigger value="4">Additinols</TabsTrigger>
  </TabsList>
    </div>
  <TabsContent value="org">
    <ExpertCompany orgs={orgs} />
  </TabsContent>
  <TabsContent value="2">
    <ExpertModules modules={modules}  />
  </TabsContent>
</Tabs>

      </div>
      {/* EXPERT ORGANIZATION AND MODULE TRANSITION SECTIONS END HERE */}

      
    </div>
  )
} 

export default page
