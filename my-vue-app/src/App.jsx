import React, { useState } from 'react'

const initialValue = {
  username : "",
  country: "",
  IsMarried : "no",
  favColors : [
      {color:"red", checked :false},
      {color:"blue" , checked :false},
      {color:"blue" , checked :false}
  ]
} 
 
const App = () => {

    const [formState,setFormState]  = useState(initialValue)

    const handle=(event)=>{
      const {name,value,checked} = event.target
    
    setFormState({...formState, [name]:value})
    }  
    
    const submit=(event)=>{
      console.log(event.preventDefault())
         console.log(formState)
         setFormState(initialValue)
      
    }
  return (
   
   <div>
    <form action='onsubmit' onSubmit={submit}>
    <input type='text' placeholder='Enter your name' onChange={handle} name='username' value={formState.username}/><br/>
      <select name='country' onChange={handle} value={formState.country}> 
        <option value = "country">Select Country</option>
        <option value= "india">India</option>
        <option value="pakistan">Pakistan</option>
        <option value = "china">China</option>
      </select>
      <label>
        <input type='radio' value='yes' onChange={handle} name='IsMarried' checked={formState.IsMarried === "yes"}/>Yes 
      </label>
          <input type='radio' value='no' onChange={handle} name='IsMarried' checked={formState.IsMarried === "no"}/>No
    
   <br/>
    {formState.favColors.map((colorObj)=>{
      return <label>
        <input type='checkbox' name='favColors' checked={colorObj.color} onChange={{event} => handle(event,index)}/> {colorObj.color}
        </label> 
    })}
     <input type='submit'/>
    </form>
   </div>
  )
}

export default App
