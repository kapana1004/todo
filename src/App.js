

import Todo from './components/todo-list';
import  { useState } from "react";




function App() {

  const [dark, setDark] = useState(false);



  return (
    <div className= {` ${ dark ? "bg-darkImg bg-[#171823]" :  "bg-lightImg bg-[#F2F2F2]" } bg-no-repeat min-h-screen `}> 

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
