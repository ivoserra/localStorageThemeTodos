import { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user, setUser } = useContext(UserContext);

    function doLogin(e) {
        e.preventDefault();

        if (email !== "businessduck@example.org") {
            alert("Invalid email");
            return;
        }

        const oneUser={ id: 1, email, name: "Charles D. Businessduck", role: "admin" }
        setUser(oneUser);

    }

    return (
        <form className="loginform" onSubmit={doLogin}>
            <input
                type="text"
                placeholder="E-mail"
                value={email}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                disabled={password.length === 0}
                type="submit"
            >
                Login
            </button>
        </form>
    );
}

export default Login;
