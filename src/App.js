// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import TextInput from './Components/TextInputs';

function App() {

  const [studentDetails,setStudentDetails]= useState({
    firstName:"",
    lastName:"",
    age:""
  });
  const changeStudentDetails= (e)=>{
    setStudentDetails({...studentDetails,[e.target.name]:e.target.value});
  }
  
  return (
   
     
        <div>
<TextInput handleChange={changeStudentDetails} name="firstName" placeholder="your fName"/>
<TextInput handleChange={changeStudentDetails} name="lastName" placeholder="your fName"/>
<TextInput handleChange={changeStudentDetails} name="age" placeholder="your fName"/>
        <div>
        <p>Firstname:{studentDetails.firstName}</p>
        <p>Lastname:{studentDetails.lastName}</p>
        <p>Age:{studentDetails.age}</p>
      </div>
    </div>
  );
}

export default App;