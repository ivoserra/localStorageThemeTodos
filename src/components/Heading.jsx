// react 
import { useContext } from "react";

// file
import { UserContext } from "../contexts/UserContext";


export default function Heading() {
    const { user, setUser, theme, setTheme }= useContext(UserContext);
   
   

    function handleEvent(e){
        setTheme(e.target.value)

    }

    return (
        <div className="heading">
            <p>Welcome <b>{user.name}</b></p>
            <p>
                <a href="#" onClick={() => { setUser(null) }}>Click here to log out</a>
            </p>
            <hr/>
            <p>Switch theme</p>
            <select value={theme} onChange={handleEvent}>
            
                <option value='lightblue'>Light Blue</option>
                <option value='dark'>Light Green</option>
            </select>
            <hr/>
        </div>
    );
}