
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Moonimg from '../images/icon-moon.svg';
import path from '../images/path.png'




const todoItems = 
['Complete online JavaScript course',
 'Jog around the park 3x', 
'10 minutes meditation',
'Read for 1 hour',
'Pick up groceries',
'Complete Todo App on Frontend Mentor'];

const Todo = (props) => {

  const [todoList, setTodoList] = useState(todoItems); 

  return(
    <>

   <div className=' justify-center items-center w-[540px]'>

   <div className=' absolute top-[-30px] items-center w-[350px]'>

    <div className='flex justify-between flex-row'>
    <span className=' text-3xl ml-[24px] mt-20 text-white '> T O D O </span>

<img className=' w-[20px] h-[20px] mt-[80px]' src={Moonimg} alt="moon" />

      </div> 

      <div className=' mt-[20px] flex flex-row ml-[1.5rem] w-[327px] bg-white rounded-[5px]'> 
      <div className=' ml-[20px] mt-[14px] w-[20px] h-[20px] bg-gradient-to-br from-blue-500 to-pink-500 rounded-[50px] flex justify-center items-center'> <img src={path} /> </div>
      {/* <input className=' fixed top-[138px] left-[48px]' type={'checkbox'} ></input> */}
    <textarea className=' ml-[20px] resize-none  h-[48px] pt-[12px]  placeholder:text-xs text-[13px] rounded-[5px]' placeholder='Create a new todo…' >
      </textarea>
    </div>
   
   </div>
    <div> 

    
 

    

    <div className=' w-[327px] ml-[24px] bg-white mt-[20px] absolute top-[155px] rounded-[5px]'>
       {todoList.map((todoItems, index) => {

        return <div className=' pl-[24px] border-y-[1px] h-[52px] text-xs pt-[12px] text-slate-700 w-[100%] flex flex-row' key={index} > <hr className=' bg-gray-700  h-[1px] w-[227px] absolute top-[21px] ml-[34px]' ></hr> <div className=' mr-[20px] w-[20px] h-[20px] bg-gradient-to-br from-blue-500 to-pink-500 rounded-[50px] flex justify-center items-center'> <img src={path}/> </div>  {todoItems} </div>;
       })}

       <div className=' rounded-[5px] w-[327px] h-[50px] flex justify-between p-[20px] items-center' > <span className=' text-xs text-gray-400'> 5 items left </span>  <span className=' text-xs text-gray-400'>Clear Completed</span></div>
   
       

    </div>

    <div className=' rounded-[5px] w-[327px] h-[48px]  flex justify-around items-center mt-[340px] ml-[25px] bg-white '> <span className=' text-[14px] text-blue-500 font-sans'>All</span> <span className=' text-[14px] text-gray-700 font-sans'>Active</span>  <span className=' text-[14px] text-gray-700 font-sans'>Completed</span></div>

    </div>
    
    </div>
    </>
  )
}

export default Todo



//hr and border radius is not propagation with map