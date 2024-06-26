'use client';
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import ProjectCard from "../../components/ProjectCard";
import projectData from "../../lib/data";

// remove category duplicates
const uniqueCategories = ['semua produk', ...new Set(projectData.map((item) => item.category))];

const Page = () => {
  const [catgories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('semua produk');

  const filteredProjects = projectData.filter(project => {
    // if category is all projects return all projects else filter by category
    return category === 'semua produk' ? project : project.category === category
  })

  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">Produk Kami</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {catgories.map((category, index) => {
              return (
              <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                    <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Page;