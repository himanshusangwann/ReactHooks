import { useState } from "react"

const Use_state=()=>{
    const [change,setchange]= useState(false)
    const tochange=()=>{
        setchange(!change)
    }

    return(
        <div>hello from Usestate example 1 
            {change?
            <h1>Hello himanshu</h1>
            :<h1>Hello palak</h1>}
            <button onClick={()=>tochange()}>Click Me to change</button>

        </div>
        
    )
    
}

export default Use_state