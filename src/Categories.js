import axios from "axios";
import { useState, useEffect } from "react";

function Categories() {
    const [name, setName] = useState('')

    const handleRemove = (catId) =>{
        const confirm = window.confirm("Are you sure you want to delete ?") 
        if(confirm){
            axios.delete(`http://localhost:3333/delete-category/${catId}`)
                .then((data)=>{
                    console.log(data.data);
                    const result = categories.filter((ele) =>{
                        return ele._id !== data.data._id
                    })
                    setCategories(result)
                })
                .catch((err) =>{
                    console.log(err);
                })
        }
    }

    const handleEdit = (catObj) => {
        const input = window.prompt(`Update Category name for ${catObj.name}`)
        if(input.trim()){
            // console.log('here',catObj);
            const formData = {
                name : input
            }
            axios.put(`http://localhost:3333/update-category/${catObj._id}`,formData)
                .then((data) =>{
                    const responseData = data.data
                    const newArr = categories.map((ele) =>{
                        if(ele._id ===  responseData._id){
                            return responseData
                        }else{
                            return ele
                        }
                    })
                    setCategories(newArr)
                })
                .catch((err) =>{
                    console.log(err);
                })
        }
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        // const nameInp = name
        const catObj = {
            name : name
        }
       
        axios.post('http://localhost:3333/create-categories',catObj)
            .then((res) =>{
                setCategories([...categories, res.data]);
                setName('')
            })
            .catch((err) =>{
                console.log(err);
            })
        
    }

    return(
        <div>
            <h2>Listing Categories - {categories.length}</h2>
            <ul>
                {
                    categories.map((ele) =>{
                        return <li key={ele._id}>{ele.name} <button onClick={()=>{handleEdit(ele)}}>edit</button> <button onClick={()=>{handleRemove(ele._id)}}>remove</button> </li>
                    })
                }
            </ul>
            <h2>Add Category</h2>

            <form onSubmit={handleFormSubmit}>
                <label>Enter Name</label><br/>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e)=>{setName(e.target.value)}}
                /><br/>
                <input type="submit" value="Add" /><br/>
            </form>
        </div>
    )
}

export default Categories