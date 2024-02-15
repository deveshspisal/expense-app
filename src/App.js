import { useState, useEffect } from "react";
import axios from "axios";

import Categories from "./Categories";
// import ContactForm from "./exercise/Contact";
function App() {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3333/get-categories')
        .then((category)=>{
            // console.log(category.data);
            setCategories(category.data)
        })
        .catch((err)=>{
            console.log(err);
        })
},[])

  return (
    <div>
       <h1>Expense App</h1> 
          <Categories/>
    </div>
  );
}

export default App;
