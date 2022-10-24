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

function App() {
  const [name, setName] = useState("");
  const [nam, setNam] = useState("");


  return (
    <div>
      <form>
        <div><input type="text" value={name} onChange={(e) => setName (e.target.value)}placeholder="Your FName"
        /></div>
        <div><input type="text" value={nam} onChange={(e) => setNam (e.target.value)}placeholder="Your LName"
        /></div>
        <p>Firstname:{name}</p>
        <p>Lastname:{nam}</p>
      </form>
    </div>
  );
}

export default App;