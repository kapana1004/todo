

import Todo from './components/todo-list';
import  { useState } from "react";




function App() {

  const [dark, setDark] = useState(false);



  return (
    <div className= {` flex justify-center ${ dark ? "bg-darkImg bgImage bg-[#171823]" :  "bg-lightImg bgImage bg-[#F2F2F2]" } bg-no-repeat min-h-screen xl:${dark ? "bg-darkDesk bgImage" : "bg-lightDesk bgImage"} xl:bg-100% w-[100%] flex justify-center `}> 

         {/* why doesn`t work bg-url? */}
    

 


        {/* <img className=' w-[375px] h-[200px]' src={bgImage} alt="" /> */}
    
   

  <Todo dark ={dark} setDark = {setDark} />
 
  
      
   

    </div>
  );

}

export default App;


// function toggleTheme(e) {
//   if (colorTheme === "dark") {
//     setColorTheme('light');
//     e.target.parentElement.innerHTML = moon;
//   } else if (colorTheme === 'light') {
//     setColorTheme('dark');
//     e.target.parentElement.innerHTML = sun;
//   }
// }

//https://jennstirpe.github.io/todo-app/
