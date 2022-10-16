import React from 'react'
import { BadList } from './BadList'
import { TaskList } from './TaskList'

export const Display = () => {
  return (
    <div class="row mt-5">


          <TaskList/>
          
           <BadList/>
        </div>
  )
}
