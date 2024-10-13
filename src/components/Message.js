import { useState } from "react"

function Message(){
    const [success,setSuccess]=useState("")
    return(
        <div className="box">
            <div className="text">
                <img src="./logo1.ico"></img>
               <h4> Help center</h4></div>
<div className="message-box">
    <textarea placeholder="Please enter the issue you are experiencing with your account in this text box and report it to us.">

    </textarea>
    {success && <p>{success}</p>}
    <button onClick={()=>{
        setSuccess("Thank you for your feedback. We will review your account and get back to you within 3 days. Thank you!")
    }}> Send</button>
</div>
<img src="./bottom.jpeg"></img>
        </div>
    )
}
export default Message