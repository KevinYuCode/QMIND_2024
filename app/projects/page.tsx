'use client'
import React, { useState, useEffect } from 'react'
import supabase from "../supabaseClient"


function Projects() {
    const [projects, setProjects] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
    

            const { data, error } = await supabase
              .from('Projects')
              .select('*')

              //SELECT * FROM PROJECTS
          
            if (error) {
              console.error('Error fetching data', error)
              return
            }
            console.log(data)
            setProjects(data);
          }
        fetchData();
    },[]);

  return (
    <div>
        {JSON.stringify(projects)}
    </div>
  )
}

export default Projects