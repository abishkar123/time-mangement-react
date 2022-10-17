import React from 'react'
import { BadList } from './BadList';
import { TaskList } from './TaskList';

export const List = ({tasks, handleOnDelete , taskswitch,}) => {
   const entryList = tasks.filter((item)=> item.type === "entry")
   const badList = tasks.filter((item)=> item.type === "bad")
  return (
    <div className="row mt-5">

         <TaskList entryList = {tasks} handleOnDelete={handleOnDelete} taskswitch= {taskswitch}/>
         <BadList taskswitch = {taskswitch} handleOnDelete={handleOnDelete} badList = {badList}/>

      </div>
  );
}
