import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection, getDocs,deleteDoc,doc, updateDoc } from "firebase/firestore";
import { db } from "./config";
const Form = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [data, setData] = useState([]);
  const[state, setState] = useState(false);
let [id,setId] = useState(-1)
  const addfire = async (e) => {
    e.preventDefault();
    if(state==false){

    let val = collection(db, "Collect");
    await addDoc(val, { name: name, age: age });}
    else{
        let val = doc(db, "Collect", id);
        try{
            await updateDoc(val,{ name: name, age: age })
        } catch (err) {
            console.log("await error");
        }
    }
  };

  const fetchUsers = async () => {
    const usersCollection = collection(db, "Collect");
    const querySnapshot = await getDocs(usersCollection);
    const usersData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(usersData);
    // console.log(usersData);
  };

  const updateBtn = async(id)=>{
    let val = doc(db , "Collect", id);
    await updateDoc(val,{name : name})
    
  }

  const updating=(name , age , id)=>{
// console.log(name)
setState(true);
setId(id);

  }


const del = async(id) => {
    let val = doc(db, "Collect", id);
try{
    await deleteDoc(val)
} catch (err) {
    console.log("await error");
}
  
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <form onSubmit={addfire}>
        <label>Name</label>
        <br />
        <br />
        <input
          placeholder="Enter Name"
          type="String"
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Age</label>
        <br />
        <br />
        <input
          placeholder="Enter Age"
          type="Number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">SUBMIT</button>
        <button>GET</button>
      </form>

      <div>
        {data.map((el) => {
        return(
            <>
                <h2>{el.name}</h2>
                <button onClick={()=>updating(el.name , el.age , el.id )}>update</button>
                <button onClick={()=>del(el.id)}>delete</button>
            </>
        )
        })}
      </div>
    </div>
  );
};

export default Form;
