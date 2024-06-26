import StudentNav from '@/components/shared/student/StudentNav';
import { Flame } from 'lucide-react';
import React from 'react';
import StudentModule from '@/components/shared/student/StudentModule';
import { getAllServicearPerOrgId, getAllServices } from '@/lib/database/actions/service.action';
import { IService } from '@/lib/database/models/service.model';
import { studentGetOrgsModule } from '@/lib/database/actions/module.action';
import Link from 'next/link';
import StudentModuleAll from '@/components/shared/student/StudentModuleAll';

const Page = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const allServices = await getAllServicearPerOrgId(id);
  const allModules = await studentGetOrgsModule({ organizationId: id });
  
  return (
    <div className="min-h-screen w-full">
      <StudentNav />
      <div className="h-[400px] mx-8 my-4 bg-black rounded-lg bg-serviceBg flex justify-center items-center">
        <h1 className="text-white font-semibold text-[50px]">Explore The Services</h1>
      </div>

      <div className="px-4 sm:px-8 mt-10 text-zinc-900">
        <div className="flex items-center gap-2">
          <Flame />
          <h1 className="text-2xl font-semibold">Services</h1>
        </div>
        <p className="text-zinc-500 text-sm mt-2">You Can explore all the services offered by them</p>
        <div className="flex flex-wrap mt-6 gap-6">
          {allServices.map((curr: IService) => (
            <Link key={curr._id} href={`/student/home/services/${curr._id}`}>
              <div className="h-28 w-28 bg-blue-600 rounded-full flex justify-center items-center cursor-pointer">
                <p className="text-white text-center">{curr.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <StudentModuleAll allModule={allModules} type="ORGS" />
        </div>
      </div>
    </div>
  );
};

export default Page;
