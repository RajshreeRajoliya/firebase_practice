import { useState } from "react";
import "./App.css";

import { db } from "./config";
import Form from "./Form";
import Signup from "./Signup";

function App() {
  const [count, setCount] = useState(0);
  

  


 
  

  return <>
  <br/>
<Signup/>
<Form/>

  </>;
}

export default App;
