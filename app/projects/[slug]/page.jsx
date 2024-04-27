"use client";
import projectData from "../../../lib/data";
import { usePathname } from 'next/navigation';
import { useState } from 'react';


const ProdukDetail= () => {
  const [isHovered, setIsHovered] = useState(false);

  const pathname = usePathname();
  const index = pathname.indexOf("/projects/");
  const projectString = index !== -1 ? pathname.substring(index + 10) : null;
  const data = projectData.find(item => item.id === projectString);
  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">{data.name}</h2>
        <div className="text-lg xl:mt-8 grid grid-cols-2 lg:grid-cols-3 gap-7">
          <div className='lg:col-span-2 relative'>
            <img
              src={data.image}
              alt={data.name}
              width={200}
              height={200}
              className={`w-full lg:w-[600px] h-[700px] mx-auto object-cover rounded-lg transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
          <div className='w-full max-w-[424px] lg:h-[300px] flex flex-col justify-between dark:bg-background items-center relative rounded-lg p-6'>
            <div className='text-justify'>
              <h3 className='text-xl font-semibold mb-4'>{data.name}</h3>
              <hr className='border-t-2 border-primary w-20 mb-4' />
              <p className='text-sm'>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default ProdukDetail;